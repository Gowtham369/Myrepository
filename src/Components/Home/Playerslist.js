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
                  You have not <br/>added players
              </h3>
            </div>

    return (
        <div>
            { playerslist.map((data,i)=>
        
        {return( <div key={i} className='cards' style={{paddingTop:'15px'}}> <Link to={'/Playerdetails/'+data.id}  
        style={{textDecoration:'none',textAlign:'center',color:'black'}} >  

         
          <Container>
            <Row><Col><img alt='Profilepicture' src={profpic} className='playerpicdisplay'/></Col>
              <Col><h5><b>{data.name}</b></h5></Col> 
           
             <Col>{data.age} Years</Col>
             <Col><GoPrimitiveDot/></Col>
           <Col>{data.gender}</Col>
           </Row>
         </Container>
         
         </Link></div>)})}
         <div className='centerofpage'>
            <h3 className='mutedtext'>
                You Can <br/>add players here
            </h3><Link to='/Addplayer'><Button >Add players</Button></Link></div>
        </div>
    )
}
