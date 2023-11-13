import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Photo from "../../types/photo";
import PhotoList from "../PhotoList/PhotoList";

const App = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (): void => {
    setSearchValue("");
  };

  const photos: Photo[] = [
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
  ];

  return (
    <div className="flex h-fit min-h-screen items-center justify-center">
      <div className="min-h-[50vh] w-5/6 rounded-2xl border-2 border-slate-800 bg-slate-700 p-8 text-orange-100 shadow-md shadow-blue-950">
        <h1 className="text-center text-xl">Photo Album Showcase</h1>
        <Input
          placeholder="Enter Album ID"
          value={searchValue}
          setValue={setSearchValue}
        />
        <Button disabled={!searchValue.length} onClick={handleSearch}>
          Submit
        </Button>
        <PhotoList photos={photos} />
      </div>
    </div>
  );
};

export default App;
