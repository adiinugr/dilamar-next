import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { AudioContextProvider } from "../context/AudioContext";
import CustomHead from "components/CustomHead";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <AudioContextProvider>
        <CustomHead />
        <Component {...pageProps} key={router.route} />
      </AudioContextProvider>
    </AnimatePresence>
  );
}

export default MyApp;
