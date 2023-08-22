// react
// const heading = React.createElement("h1", {} , "hello world from react")

import React from "react"
import  ReactDOM  from "react-dom/client";
const parent = React.createElement(
  "div",
  {id: 'parent'},
  React.createElement(
    "div",    {id: 'child'},
    React.createElement("h1", {}, "this is heading")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// console.log(heading);
// console.log(root);
