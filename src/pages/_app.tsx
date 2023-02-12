import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import LoadingAnimation from "components/LoadingAnimation";
import { Box } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <ChakraProvider>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <Box
          height="100vh"
          backgroundImage="linear-gradient(to right, #5ee7df, #b490ca)"
        >
          <Component {...pageProps} />
        </Box>
      )}
    </ChakraProvider>
  );
}
