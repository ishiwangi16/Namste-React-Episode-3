import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement=>Object =>HTML (render)

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// console.log(heading);

//JSX React=it is not HTML in JS
//it is HTML like syntax but not HTML or XML-like syntax
//(transpiled before it run=done by parcel-Babel)
//JSX->React.createElement=>ReactElement->Js OBect=>HTMLElemnt(Render)
//Babel convert it into JSX into React.createElemnt

const elem=<span>React Element</span>

//React element
const Title =()=> (
  <h1 className="head" tabIndex="1">
    {elem}
    Namaste React using JSX{" "}
  </h1>
);

const number = 1000;

//React component
//class Based component
// Functional Based component

// React Functional Component

//component composition
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
