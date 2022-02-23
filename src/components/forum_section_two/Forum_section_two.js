import React, { useState } from "react";
import "./forum_section_two.css";
// import { InputGroup, Button, FormControl } from "react-bootstrap";
import BeitragList from "../beitrag-list/BeitragList";
import BeitragForm from "../beitrag-form/BeitragForm";

// export default class Forum_section_two extends Component {
//   render() {
//     const [entry, setEntry] = useState({ name: "Max", birthday: "15.12.1998" });
//     return (
//       <div className="footer">
//         {/* <h4>hier kommt das Texteingabefeld hin</h4> */}
//         {/* <>
//           <InputGroup>
//             <FormControl
//               placeholder="Schreib deinen Beitrag..."
//               aria-label="Recipient's username with two button addons"
//             />
//             <Button variant="outline-secondary">Hier klicken zum Posten</Button>
//           </InputGroup>
//         </> */}
//         <>
//           <BeitragList name={entry.name} birthday={entry.birthday} />
//           <BeitragForm addBirthday={setEntry} />
//         </>
//       </div>
//     );
//   }
// }

function Forum_two() {
  const [entry, setEntry] = useState({ name: "Max" });
  return (
    <>
      <BeitragList name={entry.name} />
      <BeitragForm addBeitrag={setEntry} />
    </>
  );
}
export default Forum_two;
