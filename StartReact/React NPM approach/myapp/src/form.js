import React from "react";

function MyForm(params) {
    return (
        <form>
            <h1>Registration Form</h1>
            <div>
                <h2>Personal Details</h2>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    DOB
                    <input type="Date" name="dob" />
                </label> <br/> <br/> 
                <label>
                    Address:
                    <input type="text" name="add" />
                </label>
                <label>
                    State
                    <input type="text" name="st" />
                </label>
                
            </div>
            <div> 
                <h2> Contact Info</h2>
                <label>
                    E-mail:
                    <input type="email" name="mail" />
                </label>
                
                <label>
                    Phone Number:
                    <input type="tel" name="Pno" />
                </label><br/><br/> 
                <label>
                    Father Name:
                    <input type="text" name="fname" />
                </label>
                <label>
                    Mother Name:
                    <input type="text" name="mname" />
                </label>
            </div>

        </form>
    );
}

export default MyForm;
