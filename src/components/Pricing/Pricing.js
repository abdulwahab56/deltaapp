import React from "react";
import "../Pricing/Pricing.css";
import { pricingData } from "../../data/PricingData";

const Pricing = () => {
  return (
    <div className="pricing_section">
      <div className="pricing_container">
        <div className="pricing_heading">Pick Your Best Option</div>
        <div className="pricing_feature">
          Create, maintain and store your data with Delta.
        </div>
      </div>
      <div className="pcontain">
        {pricingData.map((card, index) => {
          return (
            <div className="pricing_card" key={index}>
              <div className="pricing_info">
                <div className="PricingCard_Plan">
                  <h3>{card.title}</h3>
                </div>
                <div className="PricingCard_cost">
                  <h4>{card.price}</h4>
                </div>
                <div className="PricingCard_text">
                  <p>{card.description}</p>
                </div>
                <ul className="Pricing_feature">
                  {card.features.map((feature, index) => {
                    return (
                      <li className="pricingcard_feature" key={index}>
                        {feature}
                      </li>
                    );
                  })}
                </ul>
                <button className="pri_btn">Get Started</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
