import { useState } from "react";
import { useQuery } from "react-query";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Photo from "../../types/photo";
import PhotoList from "../PhotoList/PhotoList";

const App = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [queryValue, setQueryValue] = useState<string>("");

  const { isLoading, error, data } = useQuery<Photo[]>(
    ["getPhotosByAlbumId", queryValue],
    () =>
      fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${queryValue}`,
      ).then((res) => res.json()),
  );

  const handleSearch = (): void => {
    setQueryValue(inputValue);
    setInputValue("");
  };

  return (
    <div className="flex h-fit min-h-screen items-center justify-center">
      <div className="min-h-[50vh] w-5/6 rounded-2xl border-2 border-slate-800 bg-slate-700 p-8 text-orange-100 shadow-md shadow-blue-950">
        <h1 className="text-center text-xl">Photo Album Showcase</h1>
        <Input
          placeholder="Enter Album ID"
          value={inputValue}
          setValue={setInputValue}
        />
        <Button disabled={!inputValue.length} onClick={handleSearch}>
          Submit
        </Button>
        <PhotoList photos={data ?? []} />
      </div>
    </div>
  );
};

export default App;
