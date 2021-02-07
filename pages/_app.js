import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { AudioContextProvider } from "../context/AudioContext";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <AudioContextProvider>
        <Component {...pageProps} key={router.route} />
      </AudioContextProvider>
    </AnimatePresence>
  );
}

export default MyApp;
