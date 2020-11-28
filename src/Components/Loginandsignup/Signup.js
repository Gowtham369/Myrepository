import React from 'react'
import './Loginandsignupstyle.scss'
import {Button, Col, Container, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {url} from '../url'

export default function Signup() {

  const [users,setUsers] = useState();
  
  const [issending, setIssending]=useState(true)

  const updateField = e => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value
    });
  };
  const printValues = e => {
    e.preventDefault();
setIssending(false)
    console.log(users.first_name,users.last_name,users.email ,users.password);
   
  };

  useEffect(() => {
    const postData = async () => {
      const result = await axios.post(
        url+'/register/',users )
         .then(response => 
          {console.log(response);
           console.log(response.data.message);
           alert(response.data.message+'\nNow you can Sign in To access the account')})    
          };

     issending?(console.log('Sending request')):(postData())
    
  }, [issending]);

    return (
    <div style={{backgroundColor:'#EAE7DC'}}>
        <h1 className='title'>Sign Up</h1>
        <form onSubmit={printValues}>
        <Container >
          <Row>
           <Col><input required className='formstyle firstnameinputstyle' name='first_name' onChange={updateField} type='text' placeholder='First Name'/></Col>

           <Col><input required className='formstyle lastnameinputstyle' name='last_name' onChange={updateField} type='text' placeholder='Last Name'/></Col>
           </Row>
        </Container>
        <input required className='formstyle' name='email'  type='email' onChange={updateField}  placeholder='Email ID'/>

        <input required className='formstyle' name='password'  onChange={updateField} type='password' placeholder='Password'/>
      <div className='continue'>

        <Button variant="primary" type='submit' size="lg" block>Continue</Button>
      </div>
  
      <div className='already'>
        Already have an account? <Link to='/Login'>Login</Link>
      </div><br/><br/><br/><br/><br/><br/><br/>
      </form>
    </div>
    )
}
