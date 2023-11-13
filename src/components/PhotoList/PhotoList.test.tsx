import { render, screen } from "@testing-library/react";
import PhotoList from "./PhotoList";

describe("PhotoList", () => {
  describe("Presentation", () => {
    test("Renders no items if none are passed in", () => {
      render(<PhotoList photos={[]} />);

      const photoList: HTMLElement[] = screen.queryAllByText(/photo id:/i);
      expect(photoList).toHaveLength(0);
    });

    test("Renders one card for each photo passed in", () => {
      render(
        <PhotoList
          photos={[
            {
              albumId: 1,
              id: 1,
              title: "accusamus beatae ad facilis cum similique qui sunt",
              url: "https://via.placeholder.com/600/92c952",
              thumbnailUrl: "https://via.placeholder.com/150/92c952",
            },
            {
              albumId: 1,
              id: 2,
              title: "reprehenderit est deserunt velit ipsam",
              url: "https://via.placeholder.com/600/771796",
              thumbnailUrl: "https://via.placeholder.com/150/771796",
            },
          ]}
        />,
      );

      const photoList: HTMLElement[] = screen.queryAllByText(/photo id:/i);
      expect(photoList).toHaveLength(2);
    });
  });

  describe("Interaction", () => {});
});
