import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main>
      <Header />

      <section className="min-h-screen">
        <Outlet />
      </section>

      <footer className="bg-gray-500 h-[30vh] text-white text-center flex items-end justify-center py-5">
        <p>&copy; 2023 Night Code Class 3.0. All rights reserved</p>
      </footer>
    </main>
  );
}

export default Main;
