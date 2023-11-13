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
    <div className="flex h-fit min-h-screen items-center justify-center">
      <div className="min-h-[50vh] w-5/6 rounded-2xl border-2 border-slate-800 bg-slate-700 p-8 text-orange-100 shadow-md shadow-blue-950">
        <h1 className="text-center text-2xl">Photo Album Showcase</h1>
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
        <div>
          {(invalid || isError) && (
            <span
              className="font-bold text-red-400"
              data-testid="error-message"
            >
              Error:&nbsp;
            </span>
          )}
          Please input a positive integer album ID, without leading zeroes
        </div>
        {isLoading && <div>Loading...</div>}
        <PhotoList photos={data ?? []} dataTestId="photo-list" />
      </div>
    </div>
  );
};

export default App;
