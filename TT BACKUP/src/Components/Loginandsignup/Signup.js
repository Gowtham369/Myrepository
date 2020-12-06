import React from 'react'
import './Loginandsignupstyle.scss'
import {Button, Col, Container, Row} from 'react-bootstrap'
import { Link,useHistory } from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {url} from '../url'


export default function Signup() {
const history = useHistory();
let x='';
  const [users,setUsers] = useState();
  const[valid,setValid]=useState(true)
  const [submitval,setSubmitval]=useState(0)
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
    setSubmitval(submitval+1)
  };

  useEffect(() => {
    const postData = async () => {
     await axios.post(
        url+'/register/',users )
         .then(response => 
          {console.log(response);
           x=response.data.message
           console.log(response.data.message);
           response.data.message.email?alert(response.data.message.email):console.log(response.data.message);
          /*  console.log(x) */
           if(x==='Successfully Registered !!'){
            alert(response.data.message+'\nNow you can Sign in To access the account')
           history.push("/")}
           else{setValid(false)}
          })    
          };

     issending?(console.log('Sending request')):(postData())
    
  }, [issending,submitval]);

    return (
    <div >
        <h1 className='titlesignup'>Sign Up</h1>
        <form onSubmit={printValues}>
        <Container >
          <Row>
    {valid?
    <div style={{color:'red',textAlign:'center'}}>{x}</div>
    :<></>}
           <Col><input required className='formstyle firstnameinputstyle' name='first_name' onChange={updateField} type='text' placeholder='First Name'/></Col>

           <Col><input required className='formstyle lastnameinputstyle' name='last_name' onChange={updateField} type='text' placeholder='Last Name'/></Col>
           </Row>
        
        <input required className='formstyle' name='email'  type='email' onChange={updateField}  placeholder='Email ID'/>

        <input required className='formstyle' name='password'  onChange={updateField} type='password' placeholder='Password'/>
      
      </Container><div className='continue'>
        <div >
        <Button  variant="primary" type='submit' size="lg" block>Continue</Button>
      </div></div>
  
      <div className='already'>
        Already have an account? <Link to='/Login'>Login</Link>
      </div><br/><br/><br/><br/><br/><br/><br/>
      </form>
    </div>
    )
}
