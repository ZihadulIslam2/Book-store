import { Outlet } from "react-router-dom";
import "./App.css";
import Navber from "./components/Navber";
function App() {
  return (
    <>
      <Navber />
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
