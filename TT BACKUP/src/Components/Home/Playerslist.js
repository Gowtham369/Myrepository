import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {url} from '../url'
import './Home.scss'
import {tokenval} from './Tournamenthome'
import { Link } from 'react-router-dom'
import { Col, Row, Container,Button } from 'react-bootstrap'
import {GoPrimitiveDot} from 'react-icons/go'
import profpic from '../Createtournament/profile.png'

export default function Playerslist() {

 const [playerslist,setPlayerslist]=useState();

 useEffect(() => {
    const getData = async () => {
      await axios(
        url+'/players',    { headers: {Authorization: "Token "+tokenval }})
         .then(response => 
          {setPlayerslist(response.data.data)
            console.log(response);
           console.log(response.data.message); 
          })  
      };
     getData() 
  }, []);

  if(!playerslist)
  return    <div className='centerofpage'>
              <h3 className='mutedtext'>
                  You have not added players
              </h3>
             
          <Link to='/Addplayer'><Button >Add players</Button></Link>
            </div>
 
    return (
        <div>
            { playerslist.map((data,i)=>
        
        {if(data.profile_image==='http://139.59.16.180:8006/media/False')
        return data.profile_image=false
          return( <div key={i} className='cards' style={{paddingTop:'15px'}}> <Link to={'/Playerdetails/'+data.id}  
        style={{textDecoration:'none',textAlign:'center',color:'black'}} >  

         
          <Container>
            <Row><div style={{marginLeft:'10%'}}>
                {data.profile_image?<img alt='Profilepicture' src={data.profile_image} className='playerpicdisplay'/>
                :
                <img alt='Profilepicture' src={profpic} className='playerpicdisplay'/>}
                </div>
              {/* <Col><h5><b>{data.name}</b></h5></Col> 
           
             <Col>{data.age} Years</Col>
             <Col><GoPrimitiveDot/></Col>
           <Col>{data.gender}</Col> */}
           <Col style={{marginLeft:'17%',marginRight:'10%'}}>
              <Row><h5 style={{marginLeft:'3.5%'}}><b>{data.name}</b></h5></Row>
           <Row >
             <Col style={{textAlign:'left'}}>{data.age}Years</Col>
             <div><GoPrimitiveDot/></div>
           <Col>{data.gender}</Col></Row>
           </Col> 
           </Row>
         </Container>
         
         </Link></div>)})}
         <div className='centerofpage' style={{marginTop:'10%'}}>
            <h3 className='mutedtext'>
                You Can add players here
            </h3><Link to='/Addplayer'><Button 
            style={{fontSize:'35px',borderRadius:'50px',
            position:'fixed',top:'30px',marginTop: '647px',
             marginLeft: '315px',width:'50px',height:'50px',paddingTop:'0px',
             paddingBottom:'0px'}}>
               +
               </Button></Link></div>
        </div>
    )
}
