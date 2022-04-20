import "../styles/globals.css";
import type { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps, router }: AppProps) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <Container>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear" }}
          key={router.route}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </Container>
  );
}

export default MyApp;
