import axios from 'axios'
import React, { useEffect,useState } from 'react'
import './Fixtures.scss'
import {url} from '../url'
import {tokenval} from '../Home/Tournamenthome'
import {BiArrowBack} from 'react-icons/bi'
import { useParams,useHistory } from 'react-router-dom'
import profpic from '../Createtournament/profile.png'

export default function Fixtures() {
const history = useHistory();
  const [fixturesdata,setFixturesdata]=useState()
useEffect(()=>{
  const getData = async () => {
  await axios(
url+'/tournament/matches/?tournament_id=8',{ headers: {Authorization: "Token "+tokenval }}
  ).then(response=>{
    
    console.log(response.data.data)
setFixturesdata(response.data.data)
  })
}
getData()
},[])

if(!fixturesdata)
return <></>

    return (
        <div>
            <h2 className='title'>
            <BiArrowBack 
            onClick={() => history.push('/Tournamentdetails/8')} 
            style={{float:'left'}}/>
            Fixtures</h2>
    <h4 className='tourntitle'><b>{fixturesdata.name}</b></h4>
      <div className='fixturesdisplay'>
         {fixturesdata.rounds.rounds_data.map((roundsdata,i)=>
         {return <div key={i} className='roundsstyle'>
          <h5><b> {roundsdata.round_name}</b></h5>
          {roundsdata.match_data.map((matchdata,j)=>
              {return <div key={j} className='matchesstyle'>
                  <div className='player1style'>
                  <div>{(matchdata.player1.profile_image ===null/*'http://139.59.16.180:8006/media/False' */)
                  ?<img alt='PPic' src={profpic} className='fixturespic'/>
                  :<img alt='PPic' src={matchdata.player1.profile_image} className='fixturespic'/>}</div>
                    <div>{matchdata.player1.name}</div>
                  </div>
                  <div className='player2style'>
                  <div>{(matchdata.player2.profile_image===null/* 'http://139.59.16.180:8006/media/False' */)
                  ?<img alt='PPic' src={profpic} className='fixturespic'/>
                  :<img alt='PPic' src={matchdata.player2.profile_image} className='fixturespic'/>}</div>
                    <div>{matchdata.player2.name}</div>
                   
                  </div>
                  {matchdata.is_completed?<div className='completed'>Completed</div>:<></>}
              </div> 
         })}
         
            </div>})}
            <div className='roundsstyle'>
              <h5><b>Winner</b></h5>
              <div className='playerstyle'>{fixturesdata.winner?fixturesdata.winner:<span>Yet to be determined</span>}</div>
              </div>
            </div>
        </div>
    )
}
