import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const App = () => {
  return (
    <div className="grid grid-rows-navbar h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="grid grid-cols-2 relative">
        <Outlet />
      </main>
    </div>
  );
};
export default App;
