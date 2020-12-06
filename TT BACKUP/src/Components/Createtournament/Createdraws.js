import React from 'react'
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa'
import {BiArrowBack} from 'react-icons/bi'
import { Form, Col, Row, Container, Button, Navbar } from 'react-bootstrap'
import { useState,useEffect } from 'react'
import {url} from '../url'
import {tokenval} from '../Home/Tournamenthome'
import axios from 'axios'
import { useParams,useHistory } from 'react-router-dom'
import profpic from './profile.png'
import '../Home/Home.scss'

import {GoPrimitiveDot} from 'react-icons/go'

export default function Createdraws() {
  const history = useHistory();

 let {id}=useParams()

    const [search,setsearch]=useState(' ')
    const [playersdata,setPlayersdata]=useState()
   const [postdata,setPostdata]=useState()
    const [counter,setCounter]=useState(0)
    let tournamentid={'tournament_id':id}
let x='';
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
         x=response.data.message
         if(x==='Matched Generated Successfully !')
           {
            alert(response.data.message+'\nYou will be redirected to Tournaments list')
            history.push("/Tournamentdetails/"+id)
           }
           else{alert(x)}
        })       
    };
   postData() 
}
const addapicall=()=>
{
     axios.post(
      url+'/tournament/player/add/', postdata ,   { headers: {Authorization: "Token "+tokenval }})
       .then(response => 
        {
          console.log(response);
         console.log(response.data.message); 
         setCounter(counter+1) 
         
        })  
}

const deleteapicall=()=>
{
     axios.post(
      url+'/tournament/player/delete/', postdata ,   { headers: {Authorization: "Token "+tokenval }})
       .then(response => 
        {
          console.log(response);
         console.log(response.data.message);
         setCounter(counter+1)  
        
        }) 
}

useEffect(() => {
    
       axios(
        url+'/tournament/player?search='+search+'&tournament_id='+id,    { headers: {Authorization: "Token "+tokenval }})
         .then(response => 
          {setPlayersdata(response.data.data)
            console.log(response);
           console.log(response.data.message); 
          })      


  }, [search,counter]);
    return (
        <div>{/* console.log(added) */}
            <h2 className='title'><BiArrowBack  style={{float:'left'}} onClick={() => history.push('/Tournamentdetails/'+id)}/>Create Draws {/* <BsThreeDotsVertical style={{float:'right'}}/> */}</h2>
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
            
            
            </div>
            <Form.Control style={{width:'69%',margin:'auto'}} type='text' name='searchfield' onChange={searchfieldhandle}/>
        <br/>
            {/*From here on Styling is from Playerlist */}
{playersdata?playersdata.map((data,i)=>{
    if(data.profile_image==='http://139.59.16.180:8006/media/False')
    return data.profile_image=false

    return( <div key={i} className='cards' style={{paddingTop:'15px'}}>   
       <div style={{textDecoration:'none',textAlign:'center',color:'black'}} >  

         
          <Container>
            <Row>
              <Col>{data.profile_image?<img alt='Profilepicture' src={data.profile_image} className='playerpicdisplay'/>
                :
                <img alt='Profilepicture' src={profpic} className='playerpicdisplay'/>}
                </Col>
              <Col>
              <Row><h5 style={{marginLeft:'7.5%'}}><b>{data.name}</b></h5></Row>
           <Row>
             <Col style={{textAlign:'left'}}>{data.age}Years</Col>
             <div><GoPrimitiveDot/></div>
           <Col>{data.gender}</Col></Row>
           </Col> 
          <Col>
            <div onMouseEnter={()=>{setPostdata({'tournament_id':id,'player_id':data.id})}}>
              {data.is_added?<FaMinusCircle style={{color:'red',width:'25px',height:'25px'}} onClick={deleteapicall}/>
              :<FaPlusCircle style={{color:'green',width:'25px',height:'25px'}} onClick={addapicall} />}
              </div>
          </Col>
            {console.log(postdata)}
           </Row>
         </Container>
         </div>
         </div>)}):<></>}
         <Navbar style={{border:'0px',width:'900px',margin:'auto'}} fixed="bottom">
         <Button style={{width:'73%',margin:'auto'}} type="submit" size="lg" block >
    Generate Draws
  </Button >
  </Navbar>
         </Form>
        </div>
    )

}
