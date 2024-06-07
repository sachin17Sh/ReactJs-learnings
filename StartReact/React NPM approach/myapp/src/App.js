import React, { createContext } from 'react'
import Comp1 from './CONTEXT/comp1'


const LastName=createContext()
const Age = createContext()
export default function App() {
  return (
    <>
    <LastName.Provider value={"Sharma"}>
      <Age.Provider value={21}>
      <Comp1/>
      </Age.Provider>
    </LastName.Provider>
    </>
  )
}
export {LastName, Age}