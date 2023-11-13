import Button from "../Button/Button";

const App = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="min-h-[50vh] w-5/6 rounded-2xl border-2 border-slate-800 bg-slate-700 p-8 text-orange-100 shadow-md shadow-blue-950">
        <h1 className="text-center text-xl">Photo Album Showcase</h1>
        <br />
        <Button>Sample Text</Button>
      </div>
    </div>
  );
};

export default App;
