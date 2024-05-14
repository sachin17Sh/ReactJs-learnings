import React from 'react';
import { useState } from 'react';

const Eventlist = ()=> {
    const purple = "#70a4e9;"
    const [bg, setbg] = useState(purple)
    const [ename, setename] = useState("Click Me ")
    const bgchnage = ()=>{
        let newbg = "rgb(255, 191, 201)"
        setbg(newbg)
        setename("Aaye haye Aaye haye Bado Badi Bado Badi ")

    }

return(
    <>
    <div  className= "main"style={{backgroundColor: bg}}>
        <button  className= "btn"onClick={bgchnage}>{ename}</button>

    </div>
    </>
)
}
export default Eventlist