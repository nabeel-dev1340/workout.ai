import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/weights.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <script
          defer
          src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
