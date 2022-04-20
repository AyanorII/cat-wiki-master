import type { NextPage } from "next";
import Discover from "../components/Discover/Discover";
import Hero from "../components/Hero";
import Outro from "../components/Outro/Outro";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Discover />
      <Outro />
    </>
  );
};

export default Home;
