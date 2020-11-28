import React, {useState, useEffect} from 'react'
import { Container, Row, Form, Col, Button } from 'react-bootstrap'
import './Addplayerandplayerdetails.scss'
import profpic from '../Home/profile.png'
import {url} from '../url'
import {tokenval} from '../Home/Tournamenthome'
import axios from 'axios'

export default function Addplayer() {
    const [playerdetails,setPlayerDetails]=useState()
    const [issending, setIssending]=useState(true)
    const [profilepic,setProfilepic]=useState()
    const formData = new FormData();
    
    useEffect(() => {
        const postData = async () => {
          formData.append('name',playerdetails.name)
          formData.append('profile_image',playerdetails.profile_image)
          formData.append('age',playerdetails.age)
          formData.append('gender', playerdetails.gender)
          formData.append('email',playerdetails.email)

           await axios.post(
            url+'/players/add/',formData , { headers: {'Content-Type':'multipart/form-data',
                                                    Authorization: "Token "+tokenval }})
             .then(response => 
              {console.log(response);
               console.log(response.data.message);
               alert(response.data.message)})
              };
         issending?(console.log('Sending request')):(postData())
        
      }, [issending]);
      

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
        
      }

    return (
        <div>
            <h2 className='title'>Add player</h2>
            <Form onSubmit={handlesubmit} >
            {profilepic?<img alt='Profilepicture' src={profilepic} className='updatedprofpic'/>:<img alt='Profilepicture' src={profpic} className='profpic'/>}
            <label htmlFor='input' className='label'>Add photo</label>
            <input type='file' onChange={updatefileField} required name='profile_image' id='input' accept="image/*" />
            <Form.Group className='formcontrol' >
            <Form.Control required  name='name' onChange={updateField} type="text" placeholder="Name" />

            <br/>
            
    <Form.Control required  type="email" name='email' onChange={updateField} placeholder="Email ID" />
    <br/>
    <Container  >
   <Row> 
    <Col>
   <Form.Label >Gender: </Form.Label>
   </Col>
   <Col>    
   <Form.Control name='gender' onChange={updateField} required as="select">
      <option  value=''>Select</option>
      <option  value='Male'>Male</option>
      <option value='Female'>Female</option>
      <option value='Other'>Other</option>
      </Form.Control></Col>
      </Row><br/>
      <Row>
          <Col><Form.Control required type="number" name='age' onChange={updateField} placeholder="Age" /></Col>
          <Col><Form.Label >Years </Form.Label></Col>
      </Row><br/>
      <Button variant='primary' size='lg' block type='submit'>Save</Button>
      
      </Container>
    </Form.Group>    
            </Form>
        </div>
    )
}
