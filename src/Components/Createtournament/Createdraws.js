import React from 'react'
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa'
import {BiArrowBack} from 'react-icons/bi'
import { Form, Col, Row, Container, Button, Navbar } from 'react-bootstrap'
import { useState,useEffect } from 'react'
import {url} from '../url'
import {tokenval} from '../Home/Tournamenthome'
import axios from 'axios'
import { useParams,Link } from 'react-router-dom'
import profpic from './profile.png'
import '../Home/Home.scss'

import {GoPrimitiveDot} from 'react-icons/go'

export default function Createdraws() {

 let {id}=useParams()

    const [search,setsearch]=useState(' ')
    const [playersdata,setPlayersdata]=useState()
   const [postdata,setPostdata]=useState()
    const [counter,setCounter]=useState(0)
    const [tournamentid,setTournamentid]=useState({'tournament_id':id})

const searchfieldhandle=e=>
{
    setsearch(e.target.value)
}
const submithandle=e=>
{
  e.preventDefault();
  const postData = async () => {
    await axios.post(
      url+'/tournament/generateDraws/', tournamentid ,   { headers: {Authorization: "Token "+tokenval }})
       .then(response => 
        {
          console.log(response);
         console.log(response.data.message); 
        })       
    };
   postData() 
}
const addapicall=()=>
{
  
  const postData = async () => {
    await axios.post(
      url+'/tournament/player/add/', postdata ,   { headers: {Authorization: "Token "+tokenval }})
       .then(response => 
        {
          console.log(response);
         console.log(response.data.message); 
        })   
        setCounter(counter+1)     
    };
   postData() 

}

const deleteapicall=()=>
{
  
  const postData = async () => {
    await axios.post(
      url+'/tournament/player/delete/', postdata ,   { headers: {Authorization: "Token "+tokenval }})
       .then(response => 
        {
          console.log(response);
         console.log(response.data.message); 
        })
        setCounter(counter+1)      
    };
   postData()
   
}

useEffect(() => {
    const getData = async () => {
      await axios(
        url+'/tournament/player?search='+search+'&tournament_id='+id,    { headers: {Authorization: "Token "+tokenval }})
         .then(response => 
          {setPlayersdata(response.data.data)
            console.log(response);
           console.log(response.data.message); 
          })      
      };
     getData()

  }, [search,counter]);
    return (
        <div>{/* console.log(added) */}
            <h2 className='title'><BiArrowBack  style={{float:'left'}}/>Create Draws {/* <BsThreeDotsVertical style={{float:'right'}}/> */}</h2>
            <Form onSubmit={submithandle}>
              <div className='formcontrol'> 
            <Form.Group controlId="formGridState">
            <Container><Row><Col> <Form.Label>Match type:</Form.Label></Col>
              <Col><Form.Control as="select" defaultValue="Men's Singles">
              <option>Men's Single</option>
              <option>Women's Single</option>
              <option>Men's Doubles</option>
              <option>Women's Doubles</option>
              <option>Mixed Doubles</option>
              </Form.Control></Col></Row></Container>
            </Form.Group>
            <Form.Control type='text' name='searchfield' onChange={searchfieldhandle}/>
            
            </div>
        
            {/*From here on Styling is from Playerlist */}
{playersdata?playersdata.map((data,i)=>{
    if(data.profile_image==='http://139.59.16.180:8006/media/False')
    return data.profile_image=false

    return( <div key={i} className='cards' style={{paddingTop:'15px'}}>   
       <div style={{textDecoration:'none',textAlign:'center',color:'black'}} >  

         
          <Container>
            <Row><Col>{data.profile_image?<img alt='Profilepicture' src={data.profile_image} className='playerpicdisplay'/>
                :
                <img alt='Profilepicture' src={profpic} className='playerpicdisplay'/>}</Col>
              <Col><h5><b>{data.name}</b></h5></Col> 
           
             <Col>{data.age} Years</Col>
             <Col><GoPrimitiveDot/></Col>
           <Col>{data.gender}</Col>
<Col><div onClick={()=>setPostdata({'tournament_id':id,'player_id':data.id})}>{data.is_added?<FaMinusCircle onClick={deleteapicall}/>:<FaPlusCircle onClick={addapicall} />}</div></Col>
{console.log(postdata)}
           </Row>
         </Container>
         </div>
         </div>)}):<>Loading</>}
         <Navbar style={{backgroundColor:'#03393b'}} fixed="bottom">
         <Button type="submit" style={{backgroundColor:'#07c7d9'}} size="lg" block>
    Generate Draws
  </Button></Navbar>
         </Form>
        </div>
    )

}
