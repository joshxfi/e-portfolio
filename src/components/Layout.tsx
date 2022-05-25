import React from "react";
import { Navbar } from "./Navbar";
import { useStore } from "../hooks";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <main className={`${darkMode && "dark"} bg-primary text-white py-10 max-w-screen-sm mx-auto`}>
      <div className="">
      <Navbar />
      {children}
      </div>
    </main>
  );
};
