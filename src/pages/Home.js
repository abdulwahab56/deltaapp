import React from "react";
import Carsousel from "../components/Carousel/Carsousel";
import Content from "../components/Content/Content";
import Feature from "../components/Feature/Feature";
import Hero from "../components/Hero/Hero";
import { heroOne, heroThree, heroTwo } from "../data/HeroData";

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carsousel />
    </div>
  );
};

export default Home;
