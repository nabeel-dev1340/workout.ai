import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import LoadingAnimation from "components/LoadingAnimation";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <ChakraProvider>
      {loading ? <LoadingAnimation /> : <Component {...pageProps} />}
    </ChakraProvider>
  );
}
