import React from "react";
import "./CTACard.css";
const CtaCard = ({ headline, body, button }) => {
  return (
    <div>
      <h2 className="headline">{headline}</h2>
      <div className="body">{body}</div>
      <button
        className="button"
        onClick={() => {
          console.log("Button Clicked");
        }}
      >
        {button}
      </button>
    </div>
  );
};

export default CtaCard;
/*
import React from 'react';
import './CtaCard.css';
const CtaCard = (props) => {
  return (
    <div>
      <h2 className='headline'>{props.headline}</h2>
      <div className='body'>{props.body}</div>
      <button
        className='button'
        onClick={() => {
          console.log('Button Clicked');
        }}>
        {props.button}
      </button>
    </div>
  );
};

export default CtaCard;
*/
