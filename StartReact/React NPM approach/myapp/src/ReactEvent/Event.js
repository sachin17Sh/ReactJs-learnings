import React from 'react';
import { useState } from 'react';

const Eventlist = ()=> {
    const purple = "#70a4e9;"
    const [bg, setbg] = useState(purple)
    const [ename, setename] = useState("Click Me ")
    const bgchnage = (value)=>{
        let newbg = "rgb(255, 191, 201)"

        console.log(value);
        setbg(newbg)
        setename("Aaye haye Aaye haye Bado Badi Bado Badi ")
    const array = ["2132","324","String",true]

    }

return(
    <>
    <div  className= "maincls"style={{backgroundColor: bg}}>
        <button  className= "btnnum"onClick={()=>bgchnage("Sachin")}>{ename}</button>
        
    </div>
    </>
)
}
export default Eventlist