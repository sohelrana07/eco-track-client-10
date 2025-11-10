import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <header className="sticky top-0">
        <Navbar></Navbar>
      </header>
      <main className="max-w-[1440px] w-full mx-auto min-h-screen p-8 md:py-14 md:px-10 bg-base-200">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
