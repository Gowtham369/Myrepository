import React from 'react';
import welcomebanner from '../../Assets/welcomebanner.png'
import { Button } from 'react-bootstrap'
import '../../Assets/Styles/Loginandsignupstyle.scss'
import { Link,useHistory } from 'react-router-dom';

export default function Landingpage() {
const history = useHistory();

    if(localStorage.getItem('token'))
{
  history.push('/Tournamenthome')
}
    return (
        <div >
            <img alt='Welcomebanner' className='welcome' src={welcomebanner} />
            
            <div className='titletable'>Table Tennis Pros</div>
           
            <div className='landingpagebuttons'>
              <Link className="linkstyle" to="/Login" >
                <Button className="buttonstyle" variant="primary" size="lg" block>
                  Login
                </Button>
              </Link>
            
              <Link className="linkstyle" to="/Signup">
                <Button className="signupbuttonstyle" variant="" size="lg" block>
                Sign Up
                </Button>
                </Link>
          </div>


        </div>
    )
}
