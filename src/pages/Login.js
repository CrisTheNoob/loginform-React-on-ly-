import React from 'react'

function Login() {
  return (
    <div>
        <h2>Login</h2>
        <form action="/">
            <label htmlFor="username">Username: </label>
            <input type="text" id='username' name='login' placeholder='Username' required /> <br /> <br />
            <label htmlFor="password">Password: </label>
            <input type="password" id='password' name='login' placeholder='Password' required /> <br /> <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login