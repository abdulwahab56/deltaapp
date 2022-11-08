import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Slider from "react-slick/lib/slider";
import { data, sliderSettings } from "../../data/CarousalData";
import "../Carousel/Carsousal.css";
const Carsousel = () => {
  const [select, setSelect] = useState(null);
  return (
    <div className="section_carosoul">
      <div className="Carso_main ">
        <div className="Carso_heading">Find more about us</div>
        <div className="Carso_icon">
          <FaArrowCircleLeft onClick={select?.slickPrev} />
          <FaArrowCircleRight onClick={select?.slickNext} />
        </div>
      </div>
      <div className="review_slider">
        <Slider {...sliderSettings} ref={setSelect}>
          {data.map((el, index) => {
            return (
              <div className="carsousel" key={index}>
                <div>
                  <img className="carsousel_img" src={el.image} alt="" />
                </div>
                <div className="carousel_title">{el.title}</div>
                <div className="carousel_description">{el.description}</div>
                <div>
                  <button className="btn_wrap">Learn More</button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carsousel;
