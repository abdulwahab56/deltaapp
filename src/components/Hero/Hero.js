import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/hero.mp4";
import "../Hero/Hero.css";
import "../style/GlobalStyle.css";

const Hero = () => {
  return (
    <div className="hero_section">
      <video src={heroVideo} className="hero_video" autoPlay />
      <div className="conatiner" Container>
        <h1 className="MainHeading">Your data is secure with us</h1>
        <p className="hero_text">
          We provide the best security systems for clients all over the world
        </p>
        <div className="btn_style">
          <Link to="signup" className="hero_btn btn">
            Get Started
          </Link>{" "}
          <button className="btn">Find More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
