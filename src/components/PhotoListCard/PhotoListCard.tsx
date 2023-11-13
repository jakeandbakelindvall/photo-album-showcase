import { useState } from "react";
import Photo from "../../types/photo";
import TestTarget from "../../types/testTarget";
import Button from "../Button/Button";

const PhotoListCard = ({
  photo,
  dataTestId,
}: { photo: Photo } & TestTarget) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const imageWrapperClassName: string = "w-32 h-32";
  const imageClassName: string = "h-full";

  return (
    <div
      className="flex flex-col rounded-2xl border-2 border-slate-800 bg-slate-700 p-2 shadow-md shadow-sky-950 transition-colors duration-500 hover:border-slate-500 md:p-4"
      data-testid={dataTestId}
    >
      <div>Photo ID: {photo.id}</div>
      <div>Photo Title: {photo.title}</div>
      <div className="mt-1 flex h-[-webkit-fill-available] flex-col justify-end gap-2">
        {!expanded && (
          <>
            <div className={imageWrapperClassName}>
              <img
                alt="Thumbnail"
                className={imageClassName}
                src={photo.thumbnailUrl}
                data-testid="thumbnail-image"
              ></img>
            </div>
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
            <div className="flex justify-between">
              <div className={imageWrapperClassName}>
                <img
                  alt="Full size"
                  className={imageClassName}
                  src={photo.url}
                  data-testid="full-image"
                ></img>
              </div>
              <div
                className="mt-8 max-w-[35%] text-xs font-bold"
                data-testid="album-id"
              >
                (Album ID: {photo.albumId})
              </div>
            </div>
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
    </div>
  );
};

export default PhotoListCard;
