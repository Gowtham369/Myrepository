import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'
import {url} from '../url'
import './Home.scss'
import {tokenval} from './Tournamenthome'
import { Link } from 'react-router-dom'
import profpic from '../Createtournament/profile.png'
import {Col, Container, Row} from 'react-bootstrap'

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
            
           {if(data.tournament_image==='http://139.59.16.180:8006/media/False')
           return data.tournament_image=false
             return(<div key={i} className='cards'> <Link to={'/Tournamentdetails/'+data.id}  style={{textDecoration:'none',color:'black'}}>
         
           <Container>
             <Row><Col>{data.tournament_image?<img alt='Tournamentimage' src={data.tournament_image} className='picdisplay'/>
                :
                <img alt='Tournamentimage' src={profpic} className='picdisplay'/>}</Col>
             <Col><h5><b>{data.name}</b></h5> 
             <div><span className='mutedtext'>Starts on :</span><span>{data.start_date}</span></div>
          <div><span className='mutedtext'>Last date of Registration : </span><span>{data.end_date}</span></div>
        </Col></Row>
        </Container>
        
        </Link></div>)})}</div>
)}
            

