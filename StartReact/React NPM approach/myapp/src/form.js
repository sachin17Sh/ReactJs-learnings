
import React from 'react';
import { useState } from 'react';

function Myform() {
    
    return (
        <div>   
            <h1> Registration Form</h1>
            <h2>Personal Details</h2>
            <div>
                <span style={{display: "inline-block",margin:"0 10px 0 10px"}} >
                     <label style={{display: "block"}} >Full Name</label>
                     <input type="text" placeholder='Enter your Name' />
                </span>
                <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>
                    <label style={{display: "block"}}  >Date of Birth</label>
                     <input type="Date" placeholder='Enter birth date' />
                </span>
                <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>
                    <label style={{display: "block"}} >Email</label>
                    <input type="email" placeholder='Enter you Email' />
                </span>
            </div>
            <br />
            <div>
            <span style={{display: "inline-block",margin:"0 10px 0 10px"}} >
            <label style={{display: "block"}} >Mobile Number</label>
            <input type="number" placeholder='Enter Mobile number' />
                </span>
                <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>
                <label style={{display: "block"}} >Gender</label>
            <input type="text" placeholder='Enter your Gender' />
            </span>
            <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>
            <label style={{display: "block"}} >Occupation</label>
            <input type="text" placeholder='Enter occupation' />
            </span>
            </div>
            <h2> Identity Details</h2>
            <div>
            <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>
            <label style={{display: "block"}}> ID type</label>
            <input type="text" placeholder='Enter ID type' />
            </span>
            <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>
            <label style={{display: "block"}} >ID Number</label>
            <input type="Number" placeholder='Enter ID Number' />
            </span>
            <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>
            <label style={{display: "block"}} >Issue Authority</label>
            <input type="text" placeholder='Enter issue Department' />
            </span>
            </div> 
            <br/>
            <div>
            <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>  
            <label style={{display: "block"}}  > Issue Date</label>
            <input type="Date" placeholder='Enter ID issue Date' />
            </span>
            <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>  
            <label style={{display: "block"}}  > Issue State</label>
            <input type="text" placeholder='Enter issue ID state' />
            </span>
            <span style={{display: "inline-block",margin:"0 10px 0 10px"}}> 
            <label style={{display: "block"}}  > Expiry State</label>
            <input type="Date" placeholder='Enter ID Expiry Date' />
            </span>
            </div> <br/>
            <button type="submit">Next  </button>

        </div>

       
    )
}
export default Myform




 //     <div class="container text-center">
        //         <div class="row">
        //             <div class="col">
        //             <label for="FUll Name"   class="form-label">Full Name</label>
        //                 <input  type="text" class="form-control" placeholder="Enter your Name" aria-label="Enter your Name" aria-describedby="basic-addon1"/>
        //             </div>

        //             <div class="col">
        //             <label for="Date of Birth"   class="form-label">Date of Birth</label> 
        //             <input  type="Date" class="form-control" placeholder="Enter Date of Birth" aria-label="Enter Date of Birth" aria-describedby="basic-addon1"/></div>
        //             <div class="col">col</div>
        //             <div class="col">col</div>
        //         </div>
        //     </div>