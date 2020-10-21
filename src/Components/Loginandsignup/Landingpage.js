import React from 'react';
import welcomebanner from './welcomebanner.png'
import { Button } from 'react-bootstrap'
import './Loginandsignupstyle.scss'
import { Link } from 'react-router-dom';

export default function Landingpage() {
    return (
        <div style={{backgroundColor:'#ECECEC'}}>
            <img class='welcome' src={welcomebanner} />
            <br/><br/><br/><br/><br/>
           
            <div class='buttons'><Link to="/Login" ><Button variant="primary" size="lg" block>
    Login
  </Button></Link>
 <Link to="/Signup"> <Button Redirect variant="" size="lg" block>
    Sign Up
  </Button></Link></div>


        </div>
    )
}
