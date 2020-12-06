import React, {useState, useEffect} from 'react'
import { Form,Container,Row,Col,Button } from 'react-bootstrap'
import profpic from '../Home/profile.png'
import {url} from '../url'
import {tokenval} from '../Home/Tournamenthome'
import {useHistory} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import axios from 'axios'

export default function Updatemyprofile() {
    const [profilepic,setProfilepic]=useState()
    const [issending, setIssending]=useState(true)
    const [submitval,setsubmitval]=useState(0)
    const [updatedata,setUpdatedata] =useState() 
    const formData = new FormData();
    const history = useHistory();
    useEffect(() => {
        const postData = async () => {
          formData.append('first_name',updatedata.first_name)
          formData.append('last_name',updatedata.last_name)
          formData.append('age',updatedata.age)
          formData.append('profile_image',updatedata.profile_image)
          formData.append('gender',updatedata.gender)


          console.log(formData)

           await axios.put(
            url+'/profile/update/',formData , { headers: {'Content-Type':'multipart/form-data',
                                                    Authorization: "Token "+tokenval }})
             .then(response => 
              {console.log(response);
               console.log(response.data.message);
               alert(response.data.message)})
              };
         issending?(console.log('Sending request')):(postData())
        
      }, [issending,submitval]);

      const updateField = e => {
        setUpdatedata({
          
          ...updatedata,
          [e.target.name]: e.target.value
        });

        
      };
      const updatefileField = e => {
        setUpdatedata({
          ...updatedata,
          [e.target.name]:e.target.files[0],

        });
        
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.addEventListener("load", () => {
          setProfilepic(reader.result);
        });   
         
      };

      const printValues = e => {
        e.preventDefault();
    setIssending(false)
        setsubmitval(submitval+1)
      };

      
    return (
        <div><h2 className='title'>
          <BiArrowBack onClick={() => history.push('/Myprofile')} style={{float:'left'}}/>
          Update My Profile details
          </h2>
             <form onSubmit={printValues}>

        <div style={{margin:'0% 42.5%',color:'red'}}>Fill all the fields</div>
        {profilepic?<img alt='Profilepicture' src={profilepic} className='myprofilepic'/>:<img alt='Profilepicture' src={profpic} className='myprofilepic'/>}
            <label htmlFor='input' className='label'>Add photo</label>
            <input type='file' onChange={updatefileField}  name='profile_image' id='input' accept="image/*" />

            <Container ><Row>
    
           <Col><input  className='formstyle firstnameinputstyle' name='first_name' onChange={updateField} type='text' placeholder='First Name'/></Col>

           <Col><input  className='formstyle lastnameinputstyle' name='last_name' onChange={updateField} type='text' placeholder='Last Name'/></Col>
           </Row>
           <div className='formstyle'> <Row>
    <Col>
   <Form.Label >Age : </Form.Label>
   </Col>
   <Col>  <Form.Control name='age' onChange={updateField}  type="number"></Form.Control></Col></Row></div>

        <div className='formstyle'> <Row>
    <Col>
   <Form.Label >Gender: </Form.Label>
   </Col>
   <Col>  <Form.Control name='gender' onChange={updateField}  as="select">
      <option  value=''>Select</option>
      <option  value='0'>Male</option>
      <option value='1'>Female</option>
     
      </Form.Control></Col></Row></div>
      </Container><div className='continue'>
        <div style={{boxShadow:'0px 0px 20px'}}>
        <Button  variant="primary" type='submit' size="lg" block>Continue</Button>
      </div></div>
  
      <br/><br/>
      
      <br/><br/><br/><br/><br/>
      </form>
        </div>
    )
}
