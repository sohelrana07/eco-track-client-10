import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="max-w-[1440px] w-full mx-auto min-h-screen bg-base-200 flex flex-col justify-center items-center p-8 md:py-14">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
