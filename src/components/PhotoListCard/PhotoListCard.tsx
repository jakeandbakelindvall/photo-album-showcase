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
          ></img>
          <Button variant="secondary" onClick={() => setExpanded(true)}>
            Show more
          </Button>
        </>
      )}
      {expanded && (
        <>
          <img alt="Full size" className={imageClassName} src={photo.url}></img>
          <div>Album ID: {photo.albumId}</div>
          <Button variant="secondary" onClick={() => setExpanded(false)}>
            Show less
          </Button>
        </>
      )}
    </div>
  );
};

export default PhotoListCard;
