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
    
    const history = useHistory();
    let x='';
    useEffect(() => {
      const postData = async () => {
        await axios.post(
          url+'/login/',signin )
           .then(response => {
             localStorage.clear()
            if(response.data.data.token!==undefined){localStorage.setItem('token', response.data.data.token)};
            x=response.data.message
            console.log(response);
            console.log(x)});
            if(x==='Login Successful !!'){
              history.push("/Tournamenthome")} 
              else{window.location.reload();}   
      };
     

       issending?(console.log('Sending request')):(postData())
       /* if(x==='Login Successful !!'){
        history.push("/Tournamenthome")}    
        if(x==='Invalid Credentials!'){history.push("/Login")}  */      
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

  return (
        <div style={{backgroundColor:'#EAE7DC'}}>
              <h1 className='title'>Login</h1>
       <Form onSubmit={handlesubmit}> 
      <input required className='formstyle' onChange={updateField} name='email' type='email' placeholder='Email ID'/>
      <input required className='formstyle' onChange={updateField} name='password' type='password' placeholder='Password'/>
  
  <div className='continue'>
<Button  variant="primary" type='submit'  size="lg" block>Login</Button>
</div>
  <div className='already'>
New Here? <Link to="/Signup">Sign Up</Link></div><br/><br/><br/><br/><br/><br/><br/>
        </Form>
        

        </div>
    )
}
