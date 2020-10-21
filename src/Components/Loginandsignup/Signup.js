import React from 'react'
import './Loginandsignupstyle.scss'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Signup() {
    return (
        <div style={{backgroundColor:'#EAE7DC'}}>
            <h1 class='title'>Sign Up</h1>
            <input class='formstyle'
        type='text' placeholder='Name'
      />
  <input class='formstyle' type='text' placeholder='Email ID'/><div class='continue'>
<Button variant="primary" size="lg" block>Continue</Button></div>
  
  <div class='already'>
<a>Already have an account? </a><Link to='/Login'>Login</Link>
  </div><br/><br/><br/><br/><br/><br/><br/></div>
    )
}
