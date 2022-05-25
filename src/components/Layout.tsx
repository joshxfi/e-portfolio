import React from "react";
import { Navbar, Footer } from "@/components";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="py-10 max-w-screen-sm mx-auto">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};
