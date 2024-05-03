import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// by JSX

let myname = <h2> My name is sachin</h2>
let extraname = <h1> Hiii Saurav</h1>
React.createElement('div',null,"Hii saurav")


ReactDOM.render(myname, document.getElementById("main"));
ReactDOM.render(extraname, document.getElementById("extra"));





ReactDOM.render(<App/>, document.getElementById("original"))