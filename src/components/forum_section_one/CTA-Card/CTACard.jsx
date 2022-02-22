import React from "react";
import "./CTACard.css";
const CtaCard = ({ headline, body, button }) => {
  return (
    <div>
      <h2 className="headline">{headline}</h2>
      <div className="body">{body}</div>
    </div>
  );
};

export default CtaCard;
