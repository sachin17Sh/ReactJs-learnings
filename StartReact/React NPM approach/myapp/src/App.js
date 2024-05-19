import React from "react";
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


const App = (props) => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>This is a div</h2>
      <p>{props.children}</p> 
    </div>
  );
};

export default App;

