import { useState } from "react";
import { useQuery } from "react-query";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Photo from "../../types/photo";
import PhotoList from "../PhotoList/PhotoList";

const App = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [queryValue, setQueryValue] = useState<string>("");
  const [invalid, setInvalid] = useState<boolean>(false);

  const { isLoading, isError, data } = useQuery<Photo[]>({
    queryKey: ["getPhotosByAlbumId", queryValue],
    queryFn: () =>
      fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${queryValue}`,
      ).then((res) => res.json()),
    enabled: !!queryValue.length,
  });

  const handleSearch = (): void => {
    if (/^[1-9][0-9]*$/.test(inputValue)) {
      setInvalid(false);
      setQueryValue(inputValue);
      setInputValue("");
    } else {
      setInvalid(true);
    }
  };

  return (
    <div className="mx-auto flex h-fit min-h-screen w-11/12 flex-col text-orange-100 md:w-5/6">
      <h1 className="my-8 text-center text-3xl">Photo Album Showcase</h1>
      <div className="flex flex-wrap items-start">
        <Input
          placeholder="Enter Album ID"
          value={inputValue}
          setValue={setInputValue}
          dataTestId="main-input"
        />
        <Button
          disabled={!inputValue.length}
          onClick={handleSearch}
          dataTestId="main-button"
        >
          Submit
        </Button>
      </div>
      <div>
        {(invalid || isError) && (
          <span className="font-bold text-red-400" data-testid="error-message">
            Error:&nbsp;
          </span>
        )}
        Please input a positive integer album ID, without leading zeroes
      </div>
      {isLoading && <div>Loading...</div>}
      <PhotoList photos={data ?? []} dataTestId="photo-list" />
    </div>
  );
};

export default App;
