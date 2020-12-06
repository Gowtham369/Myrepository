import React, {useState, useEffect} from 'react'
import { Container, Row, Form, Col, Button } from 'react-bootstrap'
import './Addplayerandplayerdetails.scss'
import profpic from '../Home/profile.png'
import {url} from '../url'
import {tokenval} from '../Home/Tournamenthome'
import {useHistory} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import axios from 'axios'

export default function Addplayer() {
  const history = useHistory();
  const [playerdetails,setPlayerDetails]=useState()
    const [issending, setIssending]=useState(true)
    const [profilepic,setProfilepic]=useState()
    const formData = new FormData();
    const [valid,setValid]=useState(true)
   const [submitval,setSubmitval]=useState(0)
    let x='';
    useEffect(() => {
        const postData = async () => {
          formData.append('name',playerdetails.name)
          playerdetails.profile_image?formData.append('profile_image',playerdetails.profile_image):console.log('')
          formData.append('age',playerdetails.age)
          formData.append('gender', playerdetails.gender)
          formData.append('email',playerdetails.email)

           await axios.post(
            url+'/players/add/',formData , { headers: {'Content-Type':'multipart/form-data',
                                                    Authorization: "Token "+tokenval }})
             .then(response => 
              {console.log(response);
               console.log(response.data.message);
               x=response.data.message
               response.data.message.email?alert(response.data.message.email[0]):console.log(response.data.message);
               if(x==='Player Successfully Added'){
                alert(response.data.message+'\nYou will be redirected to Players list')
               history.push("/Playershome")}
               else{setValid(false)}
              })
              };
         issending?(console.log('Sending request')):(postData())
        
      }, [issending,submitval]);
      

    const updateField = e => {
        setPlayerDetails({
          
          ...playerdetails,
          [e.target.name]: e.target.value
        });
      };

      const updatefileField = e => {
        setPlayerDetails({
          ...playerdetails,
          [e.target.name]:e.target.files[0],

        });
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.addEventListener("load", () => {
          setProfilepic(reader.result);
        });     
      };

      const handlesubmit= e=>{
        e.preventDefault();
          setIssending(false)
        setSubmitval(submitval+1)
      }

    return (
        <div>
      
            
            <h2 className='title'>
              <BiArrowBack onClick={() => history.push('/Playershome')} style={{float:'left'}}/>
              Add player
              </h2>
            <Form onSubmit={handlesubmit} >{valid?
    <div style={{color:'red',textAlign:'center'}}>{x}</div>:<></>}
            {profilepic?<img alt='Profilepicture' src={profilepic} className='updatedprofpic'/>:<img alt='Profilepicture' src={profpic} className='updatedprofpic'/>}
            <label htmlFor='input' className='label'>Add photo</label>
            <input type='file' onChange={updatefileField} name='profile_image' id='input' accept="image/*" />
            <Form.Group className='formcontrol' >
            <Form.Control required  name='name' onChange={updateField} type="text" placeholder="Name" />

            <br/>
            
    <Form.Control required  type="email" name='email' onChange={updateField} placeholder="Email ID" />
    <br/>
    <Container style={{padding:'0px'}} >
   <Row > 
    <Col>
   <Form.Label style={{fontSize:'18px'}}>Gender: </Form.Label>
   </Col>
   <Col>    
   <Form.Control  name='gender' onChange={updateField} required as="select">
      <option  value=''>Select</option>
      <option  value='Male'>Male</option>
      <option value='Female'>Female</option>
      <option value='Other'>Other</option>
      </Form.Control></Col>
      </Row><br/>
      <Row>
          <Col><Form.Control style={{width:'185%'}} required type="number" name='age' onChange={updateField} placeholder="Age" /></Col>
          <Col><Form.Label style={{float:'right',fontSize:'18px'}}>Years </Form.Label></Col>
      </Row><br/>
      <Button variant='primary' size='lg' block type='submit'>Save</Button>
      
      </Container>
    </Form.Group>    
            </Form>
        </div>
    )
}
