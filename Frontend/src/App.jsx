import { Outlet } from "react-router-dom";
import "./App.css";
import Navber from "./components/Navber";
import Footer from "./components/Footer";
import { AuthProvide } from "./context/AuthContext";
function App() {
  return (
    <>
      <AuthProvide>
        <Navber />
        <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
          <Outlet />
        </main>
        <Footer />
      </AuthProvide>
    </>
  )
}

export default App;
