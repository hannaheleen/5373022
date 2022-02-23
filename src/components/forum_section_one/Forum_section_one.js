// import React from "react";
import React, { useState } from "react";
import "./forum_section_one.css";
import CtaCard from "./CTA-Card/CTACard";
import BeitragList from "../beitrag-list/BeitragList";
import BeitragForm from "../beitrag-form/BeitragForm";

// import firstnameRef from "../pages/Login";

export default function Forum_section_one() {
  const [entry, setEntry] = useState({ name: "Max" });
  return (
    <>
      <h2>Hier sehen Sie die geposteten Texte:</h2>

      <BeitragList name={entry.name} />
      <BeitragForm addBeitrag={setEntry} />
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

// function Forum_two() {
//   const [entry, setEntry] = useState({ name: "Max" });
//   return (
//     <>
//       <BeitragList name={entry.name} />
//       <BeitragForm addBeitrag={setEntry} />
//     </>
//   );
// }
// export default Forum_two;
