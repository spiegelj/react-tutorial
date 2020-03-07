import React from "react";
import ReactDOM from "react-dom";
import { checkPropTypes } from "prop-types";

function Hi() {
  return (
    <div>
      Hello <b>John</b>!<br />
      New pass at picking this up.
      <br />
      Won't go anywhere but tell me something:
      <br />
      <input type="text" id="hiText" />
      <br />
      simple math: 2+3 = {2 + 3}
    </div>
  );
}

function Greet(props) {
  return <div>Hi {props.name}</div>;
}

function GreetDesctructure({ first, last }) {
  return (
    <div>
      Hi {first} {last}!
    </div>
  );
}

const HiAgain = ({ name }) => {
  return <div>Hi {name}</div>;
};

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <br />
      {props.email}
      <br />
      {props.notes}
    </div>
  );
}

const Gate = ({ gateState }) => {
  return <div>{gateState ? "open" : "closed"}</div>;
};

const staticName = "Dave";

ReactDOM.render(<Gate gateState={false} />, document.querySelector("#root"));
/*ReactDOM.render(<Card name={staticName} 
  email="dave@abc.com"
  first="Dave"
  last="Davidson"
  notes={<Greet name="Still Dave" />}/>, 
    document.querySelector('#root'));
*/
