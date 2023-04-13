import React from "react";
import ReactDOM from "react-dom/client";

const ele = <span>Prashant Ranjan</span>;

// JSX- html LIKE OR XML LIKE SYNTAX
// JSX => Babel transpiles it to React.createElement => object => HTMLelement(render)
const Title = () => (
  <h1 className="head">
    {ele}
    Nmanste react!
  </h1>
);

// React Functional Component
const HeadingComponent = () => (
  <React.Fragment>
    <div className="header">
      <Title />
      <h1>Namaste Reactdjksjdjsdjkdsjj</h1>
    </div>
    <div>
      <h1>jfdjsj</h1>
    </div>
  </React.Fragment>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(<HeadingComponent />);
