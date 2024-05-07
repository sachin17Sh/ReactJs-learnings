import React, { Component } from 'react'

// Without constructor and with constructor
class Student extends Component {
    constructor(props){
        super(props)
        this.   state = {
            name: "Sachin",
            Age: 21
        }
    }
 
    render(){
        return (
            <div>
            <h1> Hello my name is {this.state.name}</h1>
            <h1> I am just {this.state.Age} year old</h1>
            </div>
        )
    }
}

//export default Student

