import Photo from "../../types/photo";
import TestTarget from "../../types/testTarget";
import PhotoListCard from "../PhotoListCard/PhotoListCard";

const PhotoList = ({
  photos,
  dataTestId,
}: { photos: Photo[] } & TestTarget) => {
  return (
    <div data-testid={dataTestId}>
      {photos.map((photo) => (
        <PhotoListCard
          key={`photo-list-card-${photo.id}`}
          photo={photo}
          dataTestId="photo-list-card"
        />
      ))}
    </div>
  );
};

export default PhotoList;
