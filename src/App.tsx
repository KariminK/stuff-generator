import Navbar from "./Navbar";

function App() {
  return (
    <div className="grid grid-rows-navbar h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="grid grid-cols-2 relative"></main>
    </div>
  );
}

export default App;
