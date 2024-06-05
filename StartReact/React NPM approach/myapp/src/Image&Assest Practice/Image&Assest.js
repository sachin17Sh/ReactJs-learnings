import React from 'react'
import pic from '../download.jpg'

export default function Photo() {
  return (
    <div>
      <h1>This is the beauty of Himalayas</h1>
      {/* <img src={process.env.PUBLIC_URL + "/images/images.jpg"}
      alt='Himalays'
     /> */}
<img  src={pic} alt='himalayas'/>

    </div>
  )
}
