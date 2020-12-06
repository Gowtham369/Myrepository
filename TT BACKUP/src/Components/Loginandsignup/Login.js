import axios from 'axios'
import {useHistory} from 'react-router-dom'
import React, {useState,useEffect} from 'react'
import './Loginandsignupstyle.scss'

import {Button, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {url} from '../url'

export default function Login() {
    const [signin,setSignin]=useState()
    const [submitval,setsubmitval]=useState(0)
    const [issending, setIssending]=useState(true)
  const[valid,setValid]=useState(true)
  const[validres,setValidres]=useState('')

 
    
    const history = useHistory();
    let x='';
    useEffect(() => {
      const postData = async () => {
        await axios.post(
          url+'/login/',signin )
           .then(response => {
             
             setValidres(response.data.message)
            x=response.data.message
            console.log(response);
            console.log(x)
            if(response.data.data.token!==undefined){localStorage.clear();localStorage.setItem('token', response.data.data.token)};
          });
            if(x==='Login Successful !!'){
              history.push("/Tournamenthome")} 
              else{setValid(false);} 
             
      };
     
    issending?(console.log('Sending request')):(postData())
             
    }, [issending,submitval]);


  const handlesubmit= e=>{
    e.preventDefault();
      setIssending(false)
    setsubmitval(submitval+1)
  }

  const updateField = e => {
    setSignin({
      
      ...signin,
      [e.target.name]: e.target.value
    });
  };
if(localStorage.getItem('token'))
{
  history.push('/Tournamenthome')
}
  return (
        <div >
              <h1 className='titlesignup'>Login</h1>
       <Form onSubmit={handlesubmit}> 
       {valid?<></>:
    <div style={{color:'red',textAlign:'center'}}>{validres}</div>}
      <input required className='formstyle' onChange={updateField} name='email' type='email' placeholder='Email ID'/>
      <input required className='formstyle' onChange={updateField} name='password' type='password' placeholder='Password'/>
  
  <div className='continue'>
  
<Button  variant="primary" type='submit'  size="lg" block>Login</Button></div>
  <div className='already'>
New Here? <Link to="/Signup">Sign Up</Link></div><br/><br/><br/><br/><br/><br/><br/>
        </Form>
        

        </div>
    )
}
