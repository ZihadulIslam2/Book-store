import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <nav>Navber</nav>
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
