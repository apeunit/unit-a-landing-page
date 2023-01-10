import "../styles/globals.css";
import localFont from "@next/font/local";
const neufileGrotesk = localFont({
  src: "../public/assets/font/NeufileGrotesk-Regular.woff2",
});
export default function App({ Component, pageProps }) {
  return (
    <main className={neufileGrotesk.className}>
      <Component {...pageProps} />
    </main>
  );
}