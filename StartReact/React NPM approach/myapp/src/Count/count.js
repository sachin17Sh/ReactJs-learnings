
import { useState } from 'react';


function App() {
  const[Count,setCount] = useState(0)
  return (
  <div className='main'>
    <h1>The Count is {Count}</h1>
    <button className='btn' onClick={()=>setCount(Count+1)}>Click Me</button>

  </div>
  );
}

export default App;
