import React from 'react';
import { useState } from 'react';
import './index.css'

function Myform() {
    const [formdata, setformdata] = useState({
        fullname:'',
        dob: '',
        email:'',
        mobileNumber:'',
        gender:'',
        occupation:'',
        idType:'',
        idNumber:'',
        issueAuthority:'',
        issueDate:'',
        issueState:'',
        expiryDate:''

    })
    const submitButton=(event)=>{
        console.log(formdata);

    }
    const changevalue=(event)=>{
        setformdata((prevvalue)=>({
            ...prevvalue,[event.target.name]:event.target.value
        }));
    }

    return (
        <div className='formhead'>   
            <h1> Registration Form</h1>
            <h2>Personal Details</h2>
            <div>
                <span style={{display: "inline-block",margin:"0 10px 0 10px"}} >
                     <label style={{display: "block"}} >Full Name</label>
                     <input type="text" class="field"  name='fullname' value={formdata.fullname} onChange={changevalue} placeholder='Enter your Name' />
                </span>
                <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>
                    <label style={{display: "block"}}  >Date of Birth</label>
                     <input type="Date"  class="field" name='dob' value={formdata.dob} onChange={changevalue} placeholder='Enter birth date' />
                </span>
                <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>
                    <label style={{display: "block"}} >Email</label>
                    <input type="email" class="field"  name='email' value={formdata.email}  onChange={changevalue} placeholder='Enter you Email' />
                </span>
            </div>
            <br />
            <div>
            <span style={{display: "inline-block",margin:"0 10px 0 10px"}} >
            <label style={{display: "block"}} >Mobile Number</label>
            <input type="number"class="field" name='mobileNumber' value={formdata.mobileNumber}  onChange={changevalue} placeholder='Enter Mobile number' />
                </span>
                <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>
                <label style={{display: "block"}} >Gender</label>
            <input type="text" name='gender' class="field"  value={formdata.gender}  onChange={changevalue} placeholder='Enter your Gender' />
            </span>
            <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>
            <label style={{display: "block"}} >Occupation</label>
            <input type="text" name='occupation' class="field" value={formdata.occupation}  onChange={changevalue} placeholder='Enter occupation' />
            </span>
            </div>
            <h2> Identity Details</h2>
            <div>
            <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>
            <label style={{display: "block"}}> ID type</label>
            <input type="text" name='idType'class="field" value={formdata.idType}  onChange={changevalue} placeholder='Enter ID type' />
            </span>
            <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>
            <label style={{display: "block"}} >ID Number</label>
            <input type="Number" name='idNumber' class="field" value={formdata.idNumber}  onChange={changevalue} placeholder='Enter ID Number' />
            </span>
            <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>
            <label style={{display: "block"}} >Issue Authority</label>
            <input type="text" name='issueAuthority'class="field" value={formdata.issueAuthority}  onChange={changevalue} placeholder='Enter issue Department' />
            </span>
            </div> 
            <br/>
            <div>
            <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>  
            <label style={{display: "block"}}  > Issue Date</label>
            <input type="Date" name='issueDate' class="field"  value={formdata.issueDate}  onChange={changevalue} placeholder='Enter ID issue Date' />
            </span>
            <span style={{display: "inline-block",margin:"0 10px 0 10px"}}>  
            <label style={{display: "block"}}  > Issue State</label>
            <input type="text" name='issueState' class="field"  value={formdata.issueState}  onChange={changevalue} placeholder='Enter issue ID state' />
            </span>
            <span style={{display: "inline-block",margin:"0 10px 0 10px"}}> 
            <label style={{display: "block"}}  > Expiry State</label>
            <input type="Date" name='expiryDate' class="field"  value={formdata.expiryDate}  onChange={changevalue} placeholder='Enter ID Expiry Date' />
            </span>
            </div> <br/>
            <button  class="btn"onClick={submitButton}>Next  </button>


        </div>

       
    )
}
export default Myform