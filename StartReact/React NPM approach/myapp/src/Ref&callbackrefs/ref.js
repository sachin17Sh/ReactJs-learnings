import React  from 'react'
import { useState, useRef } from 'react'




const REFER = ()=>{
    const Name = useRef(null)
    const[newName, setnewName]=useState(false)
    const submitcheck=(e)=>{
        e.preventDefault()
        const chgname = Name.current.value
        chgname === ""? alert("Please enter your Name"): setnewName(true)
    }
    return(
        <>
            <form onSubmit={submitcheck}>
                <div>
                    <label>Your Name</label>
                    <input type='text' ref={Name}/>
                </div><br/>
                <button type='Submit'>Submit</button>
            </form>
            <h2>{newName? `You have typed: ${Name.current.value}`:"" }</h2>
        </>
    )
}
export default REFER




// Using class component 
// export default class  REFER extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             value: ""
//         }
//         this.textInput = React.createRef()
//     }
//     handleSubmit = (e)=>{
//         e.preventDefault()
//         this.setState({value:this.textInput.current.value})
//     }

//   render() {
    
//     return (
//       <>  
//     <h2> You typed:{this.state.value}</h2><br/>
//     <form onSubmit={this.handleSubmit}>
//         Input Box <input type='text' ref={this.textInput}/>
//         <input type='submit' value='Submit'/>
//     </form>
//       </>
//     )
//   }
// }

