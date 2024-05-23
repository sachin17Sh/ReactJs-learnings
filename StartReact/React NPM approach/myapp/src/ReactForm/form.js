import React from 'react';
import { useState } from 'react';


function Myform() {
    const [formdata, setformdata] = useState({
        fullname: '',
        dob: '',
        email: '',
        mobileNumber: '',
        gender: '',
        occupation: '',
        idType: '',
        idNumber: '',
        issueAuthority: '',
        issueDate: '',
        issueState: '',
        expiryDate: ''
    });

    const [newerrors, setnewerrors] = useState({
        fullname: ''
    });

    const submitButton = () => {
        // console.log(formdata);
        let validateformErrors = {};
        if (!formdata.fullname.trim()) {
            validateformErrors.fullname = "Please enter a valid name";
        }
        if (!formdata.email.trim()) {
            validateformErrors.email = "Please enter valid Email";
        } else if (!/\S+@\S+\.\S+/.test(formdata.email.trim())) {
            validateformErrors.email = "Please enter a valid Email address";
        }
        if (!formdata.mobileNumber.trim()) {
            validateformErrors.mobileNumber = "Please enter valid Mobile Number";
        } else if (!/^\d{10}$/.test(formdata.mobileNumber.trim())) {
            validateformErrors.mobileNumber = "Please enter a 10-digit Mobile Number";
        }
        if (!formdata.gender.trim()) {
            validateformErrors.gender = "Please select Your Gender";
        } else if (!["male", "female", "other"].includes(formdata.gender.trim().toLowerCase())) {
            validateformErrors.gender = "Please enter a valid Gender (male, female, or other)";
        }

        if (!formdata.occupation.trim()) {
            validateformErrors.occupation = "Please enter Your Occupation";
        }

        if (!formdata.idType.trim()) {
            validateformErrors.idType = "Please enter ID Type";
        }

        if (!formdata.idNumber.trim()) {
            validateformErrors.idNumber = "Please enter ID Number";
        }

        if (!formdata.issueAuthority.trim()) {
            validateformErrors.issueAuthority = "Please enter Issue Authority";
        }

        if (!formdata.issueState.trim()) {
            validateformErrors.issueState = "Please enter Issue State";
        }
        setnewerrors(validateformErrors);

        if (Object.keys(validateformErrors).length === 0) {
            alert("Form submitted successfully");
        }
    };

    const changevalue = (event) => {
        setformdata((prevvalue) => ({
            ...prevvalue,
            [event.target.name]: event.target.value
        }));
    };

    return (
        <div className='formhead'>
            <h1> Registration Form</h1>
            <h2>Personal Details</h2>
            <div>
                <span style={{ display: "inline-block", margin: "0 10px 0 10px" }}>
                    <label style={{ display: "block" }}>Full Name</label>
                    <input type="text" className="field" name='fullname' value={formdata.fullname} onChange={changevalue} placeholder='Enter your Name' />
                    {<p style={{ color: 'red' }}>{newerrors.fullname}</p>}
                </span>
                <span style={{ display: "inline-block", margin: "0 10px 0 10px" }}>
                    <label style={{ display: "block" }}>Date of Birth</label>
                    <input type="Date" className="field" name='dob' value={formdata.dob} onChange={changevalue} placeholder='Enter birth date' />
                </span>
                <span style={{ display: "inline-block", margin: "0 10px 0 10px" }}>
                    <label style={{ display: "block" }}>Email</label>
                    <input type="email" className="field" name='email' value={formdata.email} onChange={changevalue} placeholder='Enter your Email' />
                    {<p style={{ color: 'red' }}>{newerrors.email}</p>}
                </span>
            </div>
            <br />
            <div>
                <span style={{ display: "inline-block", margin: "0 10px 0 10px" }}>
                    <label style={{ display: "block" }}>Mobile Number</label>
                    <input type="number" className="field" name='mobileNumber' value={formdata.mobileNumber} onChange={changevalue} placeholder='Enter Mobile number' />
                    {<p style={{ color: 'red' }}>{newerrors.mobileNumber}</p>}
                </span>
                <span style={{ display: "inline-block", margin: "0 10px 0 10px" }}>
                    <label style={{ display: "block" }}>Gender</label>
                    <input type="text" name='gender' className="field" value={formdata.gender} onChange={changevalue} placeholder='Enter your Gender' />
                    {<p style={{ color: 'red' }}>{newerrors.gender}</p>}
                </span>
                <span style={{ display: "inline-block", margin: "0 10px 0 10px" }}>
                    <label style={{ display: "block" }}>Occupation</label>
                    <input type="text" name='occupation' className="field" value={formdata.occupation} onChange={changevalue} placeholder='Enter occupation' />
                    {<p style={{ color: 'red' }}>{newerrors.occupation}</p>}
                </span>
            </div>
            <h2>Identity Details</h2>
            <div>
                <span style={{ display: "inline-block", margin: "0 10px 0 10px" }}>
                    <label style={{ display: "block" }}>ID type</label>
                    <input type="text" name='idType' className="field" value={formdata.idType} onChange={changevalue} placeholder='Enter ID type' />
                    {<p style={{ color: 'red' }}>{newerrors.idType}</p>}
                </span>
                <span style={{ display: "inline-block", margin: "0 10px 0 10px" }}>
                    <label style={{ display: "block" }}>ID Number</label>
                    <input type="Number" name='idNumber' className="field" value={formdata.idNumber} onChange={changevalue} placeholder='Enter ID Number' />
                    {<p style={{ color: 'red' }}>{newerrors.idNumber}</p>}
                </span>
                <span style={{ display: "inline-block", margin: "0 10px 0 10px" }}>
                    <label style={{ display: "block" }}>Issue Authority</label>
                    <input type="text" name='issueAuthority' className="field" value={formdata.issueAuthority} onChange={changevalue} placeholder='Enter issue Department' />
                    {<p>{newerrors.issueAuthority}</p>}
                </span>
            </div>
            <br />
            <div>
                <span style={{ display: "inline-block", margin: "0 10px 0 10px" }}>
                    <label style={{ display: "block" }}>Issue Date</label>
                    <input type="Date" name='issueDate' className="field" value={formdata.issueDate} onChange={changevalue} placeholder='Enter ID issue Date' />
                </span>
                <span style={{ display: "inline-block", margin: "0 10px 0 10px" }}>
                    <label style={{ display: "block" }}>Issue State</label>
                    <input type="text" name='issueState' className="field" value={formdata.issueState} onChange={changevalue} placeholder='Enter issue ID state' />
                    {<p style={{ color: 'red' }} >{newerrors.issueState}</p>}
                </span>
                <span style={{ display: "inline-block", margin: "0 10px 0 10px" }}>
                    <label style={{ display: "block" }}>Expiry State</label>
                    <input type="Date" name='expiryDate' className="field" value={formdata.expiryDate} onChange={changevalue} placeholder='Enter ID Expiry Date' />
                </span>
            </div>
            <br />
            <button className="btnls" onClick={submitButton}>Submit Form</button>
        </div>
    );
}

export default Myform;
