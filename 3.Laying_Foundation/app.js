// react
// const heading = React.createElement("h1", {} , "hello world from react")

import React from "react";
import ReactDOM from "react-dom/client";
// const parent = React.createElement(
//   "div",
//   {id: 'parent'},
//   React.createElement(
//     "div",
//     {id: 'child'},
//     React.createElement("h1", {}, "this is heading")
//   )
// );
const Title = () => {
  return <h1>This is Title</h1>;
};
const Container = () => {
  return (
    <div>
      <Title />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Container />);

// console.log(heading);
// console.log(root);
