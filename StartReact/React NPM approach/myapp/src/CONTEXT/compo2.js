import React from 'react';
import { LastName, Age } from '../App'; 

export default function Comp2() {
  return (
    <>
      <LastName.Consumer>
        {(lname) => (
          <Age.Consumer>
            {(age) => (
              <>
              <h1>
                Hlo my name is Sachin {lname} 
              </h1>
              <h2> 
                  I am {age} years old.
              </h2>
              </>
            )}
          </Age.Consumer>
        )}
      </LastName.Consumer>
    </>
  );
}
