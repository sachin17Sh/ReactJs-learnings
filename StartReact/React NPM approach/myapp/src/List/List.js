import React, { Component } from 'react'

// export default class  extends Component {
//   render() {
// const ary = [10,15,20,25,30]
// console.log(ary);
// const newary = ary.map((a)=>{
//     return <li>{a*2}</li>
    

// } )

//     return (
//       <ul>
//         {ary.map((b)=>{
//             return <li>{b+5}</li>
//         })} 
//         <br/>
//         <li>{newary}</li>
//       </ul>
//     )
//   }
// }

//applying map in state 

export default class List extends Component {
    state ={
        Details: [
            {id:1, name:"tim ", password: "1gfwq"},
            {id:2, name:"john", password: "123edfgwq"},
            {id:3, name:"david", password: "123afewq"},
            {id:4, name:"harry", password: "12dg3ewq"}
        ],
        isentered:false
    }
  render() {
    const FullDetail=this.state.Details.map((user)=>{
        return <h2 key= {user.id}>ID:{user.id} Name:{user.name} Password:{user.password}</h2>
        
    })
    return (
      <div>{FullDetail}</div>
    )
  }
}
