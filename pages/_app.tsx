import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Layout } from "../src/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
