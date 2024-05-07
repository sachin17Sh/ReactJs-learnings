import React, { Component } from "react";

//fragments help us to render multiple elements 
class App extends Component {
    render() {
        return <>
            <h1>Fragments</h1>
            <p> It is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser,, along with other assets like CSS, images, and fonts. Webpack helps manage dependencies between these assets and optimizes them for production use.

                When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles
            </p>
            <div> Fragments are used when we want to render number of element without using a parent element or component
            </div>
            <p>Babel is a JavaScript compiler that allows developers to write code using the latest ECMAScript (JavaScript) syntax while ensuring compatibility with older browsers and environments that may not support these newer features. It's commonly used in modern web development workflows to convert code written in newer versions of JavaScript into older versions that are widely supported.
            </p>


        </>
    }
}
export default App;
