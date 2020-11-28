import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'
import {url} from '../url'
import './Home.scss'
import {tokenval} from './Tournamenthome'
import { Link } from 'react-router-dom'
import profpic from '../Createtournament/profile.png'
import {Button,Col, Container, Row} from 'react-bootstrap'

export default function Completedtournaments() {
 const [completedTournaments,setCompletedTournaments]=useState();

    
        useEffect(() => {
            const getData = async () => {
              await axios(
                url+'/tournament/previous/',    { headers: {Authorization: "Token "+tokenval }})
                 .then(response => 
                  {
                    setCompletedTournaments(response.data.data)
                     
                  })
              };
             getData()
             
          }, []);
          if(!completedTournaments)
          return  <div className='centerofpage'>
                    <h3 className='mutedtext'>
              There are no Tournaments<br/>in this Section
              </h3>
                  </div>
      console.log(completedTournaments)
          
    return (
      <div>
       { completedTournaments.map((data,i)=>
            
           {return(<div key={i} className='cards'> <Link to={'/Tournamentdetails/'+data.id}  style={{textDecoration:'none',color:'black'}}>
         
           <Container>
             <Row><Col><img alt='Profilepicture' src={profpic} className='picdisplay'/></Col>
             <Col><h5><b>{data.name}</b></h5> 
          <div>Starts on :{data.start_date}</div>
          <div>Last date of Registration : {data.end_date}</div>
        </Col></Row>
        </Container>
        
        </Link></div>)})}</div>
)}
            

