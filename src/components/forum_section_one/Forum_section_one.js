import React from "react";
import "./forum_section_one.css";
import CtaCard from "./CTA-Card/CTACard";
// import firstnameRef from "../pages/Login";

export default function Forum_section_one() {
  return (
    <>
      <h2>Hier sehen Sie die geposteten Texte:</h2>
      <div className="cube">
        {/* React transforms parameters into props object;
             let props = {
                 headline: '',
                 body: '',
                 button: ''
             }
             */}
        <CtaCard headline="Text1" body="Body" />
        <CtaCard headline="Text2" body="Body" />
        <CtaCard headline="Text3" body="Body" />
        <CtaCard headline="Text4" body="Body" />
      </div>
    </>
  );
}
