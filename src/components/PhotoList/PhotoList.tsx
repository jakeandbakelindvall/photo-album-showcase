import Photo from "../../types/photo";
import TestTarget from "../../types/testTarget";
import PhotoListCard from "../PhotoListCard/PhotoListCard";

const PhotoList = ({
  photos,
  dataTestId,
}: { photos: Photo[] } & TestTarget) => {
  return (
    <div
      className="mt-8 flex w-full flex-col justify-start border-t-2 border-orange-300"
      data-testid={dataTestId}
    >
      <div className="my-2 font-bold">Results:</div>
      <div className="grid auto-rows-fr grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <PhotoListCard
            key={`photo-list-card-${photo.id}`}
            photo={photo}
            dataTestId="photo-list-card"
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
