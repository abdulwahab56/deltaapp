import React from "react";
import { featuresData } from "../../data/FeatureData";
import "../Feature/Feature.css";
import "../style/GlobalStyle.css";

const Feature = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="feature_text">What we Offer</div>
      </div>
      <div className="feature_wrap">
        {featuresData.map((el, index) => {
          return (
            <div
              className={`feature_colume ${index % 2 === 1 ? "hello" : " "}`}
              key={index}
            >
              <div className="feature_icon">{el.icon}</div>
              <div className="feature_name">{el.name}</div>
              <div className="feature_detail">{el.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
