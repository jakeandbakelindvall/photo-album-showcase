import { fireEvent, render, screen } from "@testing-library/react";
import PhotoListCard from "./PhotoListCard";

describe("PhotoListCard", () => {
  describe("Presentation", () => {
    test("Renders basic info by default", () => {
      render(
        <PhotoListCard
          photo={{
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952",
          }}
        />,
      );

      const photoListCard: HTMLElement = screen.getByText(
        /photo title: accusamus/i,
      );
      expect(photoListCard).toBeInTheDocument();
    });
  });

  describe("Interaction", () => {
    test("Renders more detailed info on a 'show more' button click", () => {
      render(
        <PhotoListCard
          photo={{
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952",
          }}
        />,
      );

      const showMoreButton: HTMLElement = screen.getByText(/show more/i);
      fireEvent.click(showMoreButton);
      const albumIdText: HTMLElement = screen.getByText(/album id: 1/i);
      expect(albumIdText).toBeInTheDocument();
    });

    test("Renders no detailed info after a 'show less' button click", () => {
      render(
        <PhotoListCard
          photo={{
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952",
          }}
        />,
      );

      const showMoreButton: HTMLElement = screen.getByText(/show more/i);
      fireEvent.click(showMoreButton);
      const showLessButton: HTMLElement = screen.getByText(/show less/i);
      fireEvent.click(showLessButton);
      const albumIdText: HTMLElement | null =
        screen.queryByText(/album id: 1/i);
      expect(albumIdText).not.toBeInTheDocument();
    });
  });
});
