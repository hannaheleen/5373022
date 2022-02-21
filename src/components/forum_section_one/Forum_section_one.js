import React from "react";
import "./forum_section_one.css";
import CtaCard from "./CTA-Card/CTACard";

export default function Forum_section_one() {
  return (
    <>
      <h2>Headline</h2>
      <div className="cube">
        {/* React transforms parameters into props object;
             let props = {
                 headline: '',
                 body: '',
                 button: ''
             }
             */}
        <CtaCard headline="Headline1" body="Body" button="button" />
        <CtaCard headline="Headline2" body="Body" button="button" />
        <CtaCard headline="Headline3" body="Body" button="button" />
        <CtaCard headline="Headline4" body="Body" button="button" />
      </div>
    </>
  );
}

// const Forum_section_one = () => {
//   return (
//     <>
//       <h2>Headline</h2>
//       <div className="cube">
//         {/* React transforms parameters into props object;
//            let props = {
//                headline: '',
//                body: '',
//                button: ''
//            }
//            */}
//         <CtaCard headline="Headline1" body="Body" button="button" />
//         <CtaCard headline="Headline2" body="Body" button="button" />
//         <CtaCard headline="Headline3" body="Body" button="button" />
//         <CtaCard headline="Headline4" body="Body" button="button" />
//       </div>
//     </>
//   );
// };

// export default Forum_section_one;
