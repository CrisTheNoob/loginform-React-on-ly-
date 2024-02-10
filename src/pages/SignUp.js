import React from 'react'

function SignUp() {
  return (
    <div>
        <h2>SignUp</h2>
        <form action="/">
            <fieldset>
                <legend>Signup</legend>
                <label htmlFor="name">Name: </label>
                <input type="text" id='name' name='signup' placeholder='Name' /> <br /> <br />
                <label htmlFor="lastname">Lastname: </label>
                <input type="text" id='lastname' name='signup' placeholder='Lastname' /> <br /> <br />
                <label htmlFor="email">Email: </label>
                <input type="email" name="signup" id="email" placeholder='Email' /> <br /> <br />
                <label htmlFor="pass">Password</label>
                <input type="password" name='signup' id='pass' placeholder='Password' /> <br /> <br />
                <label htmlFor="re-enter-pass">Re-enter password: </label>
                <input type="password" name='signup' id='re-enter-pass' placeholder='Re-enter password' /> <br /> <br />

                <button type="submit">Submit</button>
            </fieldset>
        </form>
    </div>
  )
}

export default SignUp