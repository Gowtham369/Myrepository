import React from 'react'
import './Loginandsignupstyle.scss'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function Login() {
    return (
        <div style={{backgroundColor:'#EAE7DC'}}>
              <h1 class='title'>Login</h1>
        
      <input class='formstyle' type='text' placeholder='Email ID'/>
      <input class='formstyle' type='password' placeholder='Password'/>
  
  <div class='continue'>
<Button variant="primary" size="lg" block>Login</Button>
</div>
  <div class='already'>
<a>New Here? </a><Link to="/Signup">Sign Up</Link></div><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
