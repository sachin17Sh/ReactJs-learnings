import React from "react";

function MyForm(params) {
    return (
        <form>
            <h1>Registration Form</h1>
            <div>
                <h2>Personal Details</h2>
                <label>
                    Name:
                </label>
                <input type="text" name="name" />
                <label>
                    DOB
                </label>
                <input type="Date" name="dob" />
                <br /> <br />
                <label>
                    Address:
                </label>
                <input type="text" name="add" />

                <label>
                    State:
                </label>
                <input type="text" name="st" />


            </div>
            <div>
                <h2> Contact Info</h2>
                <label>
                    E-mail:
                </label>
                <input type="email" name="mail" />


                <label>
                    Phone Number:
                </label>
                <input type="tel" name="Pno" />
                <br /><br />
                <label>
                    Father Name:
                </label>
                <input type="text" name="fname" />

                <label>
                    Mother Name:
                </label>
                <input type="text" name="mname" />
            </div>
            <div>
                <input type="Submit" name="Submit" />
            </div>
        </form>
    );
}

export default MyForm;
