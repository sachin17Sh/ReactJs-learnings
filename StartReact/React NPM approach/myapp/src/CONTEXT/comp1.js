import React, { useContext } from 'react'

import { LastName, Age } from '../App'; 


export default function Comp1 () {
const name=useContext(LastName)
const myage=useContext(Age)
  return (
  <>
  <h1>My name is Sachin {name}</h1>
  <h1> I am {myage}years old</h1>
  </>
  )
}
