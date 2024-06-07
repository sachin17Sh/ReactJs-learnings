import React, { Component } from "react";
// import PropTypes from "prop-types";

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello {this.props.name}</h1>
//                 <h2>Your Rollno is {this.props.rollno}</h2>
//             </div>
//         );
//     }
// }

// App.propTypes = {
//     name: PropTypes.string,
//     rollno: PropTypes.number
// };

// export default App;


//In React, children is a special prop that allows
// you to pass components or elements as data to other components, which can then render those children as part of their output


// const App = (props) => {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <h2>This is a div</h2>
//       <p>{props.children}</p> 
//     </div>
//   );
// };

// export default App;



// import Student from './student';

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log("Constructor called");
//     }
// componentDidMount(){
//     console.log("RENDERR");
// }
//     render() {
//         console.log("App rendered");
//         return (
//             <div>
//                 <h1>Hello</h1>
//                 <h2>My name is Sachin</h2>
//                 <div>
//                     <Student />
//                 </div>
//             </div>
//         );
//     }
// }

// export default App;

function App() {
    const array = ["2132", "324", "String",true, 194, "new"]
    return (
        <div>       
            <h1>{array}</h1>          
        </div >
    )

}
export default App

// you have create a stop watch 
// but is bar logic tera khudh ka ho
// with css
// give me estimate time ? 

// tomorrow final date 