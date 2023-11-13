import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import nock from "nock";
import Photo from "../../types/photo";

// Taken from TanStack Query examples:
const renderWithClient = (ui: React.ReactElement) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const { rerender, ...result } = render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={queryClient}>
          {rerenderUi}
        </QueryClientProvider>,
      ),
  };
};

const mockPhotos: Photo[] = [
  {
    albumId: 32,
    id: 1580,
    title: "ab debitis placeat fuga",
    url: "https://via.placeholder.com/600/49e8f3",
    thumbnailUrl: "https://via.placeholder.com/150/49e8f3",
  },
  {
    albumId: 32,
    id: 1581,
    title: "quasi et qui nihil facilis tenetur et",
    url: "https://via.placeholder.com/600/ac651c",
    thumbnailUrl: "https://via.placeholder.com/150/ac651c",
  },
  {
    albumId: 32,
    id: 1582,
    title: "ea itaque enim vel quae voluptates consequuntur",
    url: "https://via.placeholder.com/600/f6441a",
    thumbnailUrl: "https://via.placeholder.com/150/f6441a",
  },
];

describe("App", () => {
  // Still a potential source of leakiness, but was fighting it a little much
  // when dealing with it after each, so all will have to do for demo's sake:
  afterAll(() => {
    nock.restore();
    nock.cleanAll();
  });

  describe("Presentation", () => {
    test("Renders a title, an empty input, a button, and informative text by default", () => {
      renderWithClient(<App />);

      const title: HTMLElement = screen.getByText(/photo album showcase/i);
      const input: HTMLElement = screen.getByPlaceholderText(/enter album id/i);
      const button: HTMLElement = screen.getByText(/submit/i);
      const helperText: HTMLElement = screen.getByText(
        /input a positive integer album id/i,
      );
      expect(title).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(helperText).toBeInTheDocument();
    });

    test("Renders an empty list by default", () => {
      renderWithClient(<App />);

      const photoList: HTMLElement[] = screen.queryAllByText(/photo id:/i);
      expect(photoList).toHaveLength(0);
    });
  });

  describe("Interaction", () => {
    test("Clears the input on a button press for submission", async () => {
      renderWithClient(<App />);

      const input: HTMLElement = screen.getByPlaceholderText(/enter album id/i);
      fireEvent.change(input, { target: { value: "9" } });
      const changedInput: HTMLElement = screen.getByDisplayValue(/9/i);
      expect(changedInput).toBeInTheDocument();

      const button: HTMLElement = screen.getByText(/submit/i);
      fireEvent.click(button);

      await waitFor(() => {
        const clearedInput: HTMLElement | null =
          screen.queryByDisplayValue(/9/i);
        expect(clearedInput).not.toBeInTheDocument();
      });
    });

    test("Shows a list on a valid submission", async () => {
      nock("https://jsonplaceholder.typicode.com")
        .defaultReplyHeaders({
          "access-control-allow-origin": "*",
          "access-control-allow-credentials": "true",
        })
        .get("/photos")
        .query({ albumId: "9" })
        .reply(200, mockPhotos);

      renderWithClient(<App />);

      const input: HTMLElement = screen.getByPlaceholderText(/enter album id/i);
      fireEvent.change(input, { target: { value: "9" } });

      const button: HTMLElement = screen.getByText(/submit/i);
      fireEvent.click(button);

      await waitFor(() => {
        const photoList: HTMLElement[] = screen.queryAllByText(/photo id:/i);
        return expect(photoList).toHaveLength(mockPhotos.length);
      });
    });

    test("Shows error text and no list on an invalid submission", async () => {
      nock("https://jsonplaceholder.typicode.com")
        .defaultReplyHeaders({
          "access-control-allow-origin": "*",
          "access-control-allow-credentials": "true",
        })
        .get("/photos")
        .query({ albumId: "9" })
        .reply(200, mockPhotos);

      renderWithClient(<App />);

      const input: HTMLElement = screen.getByPlaceholderText(/enter album id/i);
      fireEvent.change(input, { target: { value: "definitely not 9" } });

      const button: HTMLElement = screen.getByText(/submit/i);
      fireEvent.click(button);

      await waitFor(() => {
        const photoList: HTMLElement[] = screen.queryAllByText(/photo id:/i);
        return expect(photoList).toHaveLength(0);
      });
      await waitFor(() => {
        const errorHelperText: HTMLElement = screen.getByText(/error:/i);
        return expect(errorHelperText).toBeInTheDocument();
      });
    });
  });
});
