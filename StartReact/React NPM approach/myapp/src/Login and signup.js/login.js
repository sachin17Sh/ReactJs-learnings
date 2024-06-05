import React from 'react'


export default function LoginForm() {
  return (
    <div className='login'>
      <h2>Login</h2>
      <div className='form-group'>
        <form.label for='uname'>Username</form.label>
        <input type="text" className='form-control' id='uname' placeholder='Enter your Username'></input>
      </div>
      <div className='form-group'>
        <form.label for='email'>Email Address</form.label>
        <input type="email" id="email " className='form-control' placeholder='Enter your Email address'></input>
      </div>
      <div className='form-group'>
        <form.label for='psw'>Password</form.label>
        <input type="psw" className='form-control' id='psw' placeholder='Enter your password'></input>
      </div>
    </div>
  )
}
