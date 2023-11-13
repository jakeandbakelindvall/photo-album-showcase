import { useState } from "react";
import Photo from "../../types/photo";
import TestTarget from "../../types/testTarget";
import Button from "../Button/Button";

const PhotoListCard = ({
  photo,
  dataTestId,
}: { photo: Photo } & TestTarget) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const imageClassName: string = "w-1/4";

  return (
    <div data-testid={dataTestId}>
      <div>Photo ID: {photo.id}</div>
      <div>Photo Title: {photo.title}</div>
      {!expanded && (
        <>
          <img
            alt="Thumbnail"
            className={imageClassName}
            src={photo.thumbnailUrl}
            data-testid="thumbnail-image"
          ></img>
          <Button
            variant="secondary"
            onClick={() => setExpanded(true)}
            dataTestId="open-card"
          >
            Show more
          </Button>
        </>
      )}
      {expanded && (
        <>
          <img
            alt="Full size"
            className={imageClassName}
            src={photo.url}
            data-testid="full-image"
          ></img>
          <div data-testid="album-id">Album ID: {photo.albumId}</div>
          <Button
            variant="secondary"
            onClick={() => setExpanded(false)}
            dataTestId="close-card"
          >
            Show less
          </Button>
        </>
      )}
    </div>
  );
};

export default PhotoListCard;
