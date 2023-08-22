import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Component/Header";
import Body from "./src/Component/Body";


const App = () => {
  return (
    <>
      <Header />
      <Body/>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
