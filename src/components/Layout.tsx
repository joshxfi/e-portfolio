import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar, Footer } from "@/components";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { asPath } = useRouter();
  return (
    <>
      <Head>
        <title>
          Josh Daniel 🌃 {" "}
          {asPath.substring(1).charAt(0).toUpperCase() + asPath.slice(2)}
        </title>
        <meta
          name="description"
          content='This is an e-Portfolio titled "Autodidact" because it best describes how I learned to code and develop software.'
        />
      </Head>
      <main className="py-10 w-[85%] max-w-screen-sm mx-auto">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
};
