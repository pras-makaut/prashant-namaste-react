import React from "react";
import ReactDOM from "react-dom/client";
/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>This is h1 tag</h1>
 *      </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Hello World from React!"
);
console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);
