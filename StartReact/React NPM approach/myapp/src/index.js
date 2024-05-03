import React from "react";
import ReactDOM from "react-dom";


// by JSX

let myname = <h2> My name is sachin</h2>
let extraname = <h1> Hiii Saurav</h1>
React.createElement('div',null,"Hii saurav")


ReactDOM.render(myname, document.getElementById("main"));
ReactDOM.render(extraname, document.getElementById("extra"));

// by javascript => creating react element 
class App extends React.Component{
    render(){
        return React.createElement('div',null,'Hello world')
    }

}
ReactDOM.render(
    React.createElement(App, null), document.getElementById("root")
);
