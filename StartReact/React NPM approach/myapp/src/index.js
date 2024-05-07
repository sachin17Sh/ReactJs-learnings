import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css"

// import App from "./App";
 import Myform from "./form";
import Student from "./state";
// by JSX

let myname = <h2> My name is sachin</h2>
let extraname = <h1> Hiii Saurav</h1>
React.createElement('div',null,"Hii saurav")


// ReactDOM.render(myname, document.getElementById("main"));
// ReactDOM.render(extraname, document.getElementById("extra"));





// ReactDOM.render(<App/>, document.getElementById("original"))




ReactDOM.render(<Myform/>,  document.getElementById("fname"))

// ReactDOM.render(<Student/>,  document.getElementById("ns"))