import React from 'react'
import { useState,useEffect } from 'react'
import { Row, Col,Container } from 'react-bootstrap'
import { Link, useParams,useHistory } from 'react-router-dom'
import profpic from '../Createtournament/profile.png'
import './Matches.scss'
import axios from 'axios'
import {url} from '../url'
import {tokenval} from '../Home/Tournamenthome'
import medalpic from './medal.png'
import {BiArrowBack} from 'react-icons/bi'

export default function Matches() {

 let {id}=useParams()
  const history = useHistory();
  const [matchesdata,setMatchesdata]=useState()
 let matchcounter=1;
 
 useEffect(() => {
    const getData = async () => {
      await axios(
        url+'/match/?tournament_id='+id,    { headers: {Authorization: "Token "+tokenval }})
         .then(response => 
          {setMatchesdata(response.data.data)
           console.log(response.data.data)
          })      
      };
     getData()

  }, []);

  if(!matchesdata)
  return <>Loading...</>

    return (
        <div>
            <h2 className='title'>
            <BiArrowBack 
            onClick={() => history.push('/Tournamentdetails/'+id)} 
            style={{float:'left'}}/>
            Matches</h2>
            
    { matchesdata.map((data,i)=>{
             
        return (<div key={i}><h4 className='matchtitle'><b>Match {matchcounter+i}</b></h4>
        <div className='matchcards'><Link to={'/Tournamentdetails/'+id+'/Createdraws/Matches/'+data.id}  
        style={{textDecoration:'none',textAlign:'center',color:'black'}}>
            <Container>
                <Row>
                    <Col>
    <Row>{data.winner_id===data.player1.id
    ?<img alt='Medal' src={medalpic} className='matchmedalstyling'/>
    :<></>}
        {(data.player1.profile_image==='http://139.59.16.180:8006/media/False')?<img alt='Profilepicture' src={profpic} className='matchplayerpicdisplay'/>:<img alt='Profilepicture' src={data.player1.profile_image} className='matchplayerpicdisplay'/>}</Row>
    <br/> <div>{data.player1.name}</div>
                   {/*  <div>Rank</div>    */}           
                    </Col>

                    <Col><span className='matchversus'> v/s </span></Col>

                    <Col>
    <Row>
        {(data.player2.profile_image==='http://139.59.16.180:8006/media/False')?<img alt='Profilepicture' src={profpic} className='matchplayerpicdisplay'/>:<img alt='Profilepicture' src={data.player2.profile_image} className='matchplayerpicdisplay'/>}
        {data.winner_id===data.player2.id
    ?<img alt='Medal' src={medalpic} className='matchmedalstyling'/>
    :<></>}
    </Row>
         <div>{data.player2.name}</div>
                   {/*  <div>Rank</div>    */}           
                    </Col>

                </Row>
            </Container>
        </Link></div><br/>
    </div>)})}
        </div>
    )
}
