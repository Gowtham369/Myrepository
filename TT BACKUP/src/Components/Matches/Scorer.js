import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './Matches.scss'
import profpic from './profile.png'
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa'
import { useParams,useHistory } from 'react-router-dom';
import {url} from '../url'
import {tokenval} from '../Home/Tournamenthome'
import {BiArrowBack} from 'react-icons/bi'
import medalpic from './medal.png'

export default function Matches() {
  const history=useHistory()

  const [countA,setCountA]=useState(0)
  const [countB,setCountB]=useState(0)
  const [countA1,setCountA1]=useState('-')
  const [countA2,setCountA2]=useState('-')
  const [countA3,setCountA3]=useState('-')
  const [countB1,setCountB1]=useState('-')
  const [countB2,setCountB2]=useState('-')
  const [countB3,setCountB3]=useState('-')
  const [matchesdata,setMatchesdata]=useState()
  const [scoredata,setScoredata]=useState()
  const [getscoredata,setGetscoredata]=useState()

  let {tournamentid,matchid}=useParams()
let counter=0;

  useEffect(()=>
  {
    const fetchData=async ()=>
    {
      await axios(
        url+'/match/score/view/?match_id='+matchid,{ headers: {Authorization: "Token "+tokenval }}
      ).then(response=>{ console.log(response);
          setMatchesdata(response.data.data.players)
          setGetscoredata(response.data.data.scores)
          console.log(response.data.players)
          
        }
      )
        
      
    }
    fetchData()
    
  },[])

  useEffect(() => {
    const postData = async () => {console.log(scoredata)
       await axios.post(
        url+'/match/score/update/',scoredata, { headers: {Authorization: "Token "+tokenval }} )
         .then(response => 
          {
            console.log(response);
            console.log(response.data.message);
          }
         )    
        };

     postData()
    
  }, [scoredata]);


useEffect(() => {if(matchesdata)setScoredata({'match_id':matchid,
'set_no':1,
'player1_id':matchesdata.player1.id,
'player2_id':matchesdata.player2.id,
 'player1_score':countA1,'player2_score':countB1})},[countA1,countB1]);


useEffect(() => {if(matchesdata)setScoredata({'match_id':matchid,
'set_no':2,
'player1_id':matchesdata.player1.id,
'player2_id':matchesdata.player2.id,
 'player1_score':countA2,'player2_score':countB2})},[countA2,countB2]);

 useEffect(() => {if(matchesdata)setScoredata({'match_id':matchid,
'set_no':3,
'player1_id':matchesdata.player1.id,
'player2_id':matchesdata.player2.id,
 'player1_score':countA3,'player2_score':countB3})},[countA3,countB3]);

  if(!(matchesdata||getscoredata))
  return<>Loading...</>
  if(getscoredata){getscoredata.map((data,i)=>{return counter=counter+1;} );
  console.log(counter)}
    return (
        <div> <h2 className='title'>
        <BiArrowBack onClick={() => history.push('/Tournamentdetails/'+tournamentid+'/Createdraws/Matches')} style={{float:'left'}}/>
        Scorer
      </h2>
            <div className="split left">
  <div className="centered">

    {matchesdata.player1.profile_image?<img alt='Profilepicture' style={{border:'1px solid grey'}} src={matchesdata.player1.profile_image}/>
                :<img src={profpic} style={{border:'1px solid grey'}} alt="player1"/>}
    <h2>       
       {matchesdata.player1.name}
    </h2>  

    
    <div className='scoringfield'>
    <FaMinusCircle style={{color:'red',width:'35px',height:'35px'}} onClick={() => setCountA(countA - 1)} type='button' size='35px'/>
    <div>{countA}</div>
    
    <FaPlusCircle style={{color:'green',width:'35px',height:'35px'}} onClick={() => {setCountA(countA + 1)}} type='button' size='35px'/>
   
    </div>
  </div>
</div>
<div className='verticalline'></div>
<h5 className='versus'>v/s</h5>
<div className="split right">
  <div className="centered">
  {matchesdata.player2.profile_image?<img alt='Profilepicture' style={{border:'1px solid grey'}} src={matchesdata.player2.profile_image}/>
                :<img src={profpic} style={{border:'1px solid grey'}} alt="player2"/>}

    <h2>{matchesdata.player2.name}</h2>

    
    <div className='scoringfield'>
    <FaMinusCircle style={{color:'red',width:'35px',height:'35px'}} onClick={() => setCountB(countB - 1)} type='button' size='35px'/>
    <div>{countB}</div>
   
    <FaPlusCircle style={{color:'green',width:'35px',height:'35px'}} onClick={() => setCountB(countB + 1)} type='button' size='35px'/>
   
    </div>
  </div>
</div><br/><br/>
<div><br/><br/><br/>
{/* <div style={{display:'flex-start',margin:'auto',width:'200px'}}> {(counter>0?getscoredata[0].player1_score: countA1)
    <(counter>0?getscoredata[0].player2_score:countB1)
    ?<img alt='Medal' src={medalpic} className='medalstyling'/>:<></>} */}
 <button onClick={()=> {setCountA1(countA);setCountB1(countB);setCountA(0);setCountB(0)}} className='scoreinputcontainer'>
    <div>
      {(counter>0?getscoredata[0].player1_score: countA1)
    >(counter>0?getscoredata[0].player2_score:countB1)
    ?<img alt='Medal' src={medalpic} className='medalstyling'/>:<></>}
    </div>
    <div className='scorefield'>{counter>0?getscoredata[0].player1_score: countA1}</div>
   <b className='scorefield'>Set 1</b>
    <div className='scorefield'>{counter>0?getscoredata[0].player2_score:countB1}</div>
    {(counter>0?getscoredata[0].player1_score: countA1)
    <(counter>0?getscoredata[0].player2_score:countB1)
    ?<img alt='Medal' src={medalpic} className='medalstyling'/>:<></>}
 </button>{/* </div> */}
 <br/>
 <button onClick={()=> {setCountA2(countA);setCountB2(countB);setCountA(0);setCountB(0)}} className='scoreinputcontainer'>
 {(counter>1?getscoredata[1].player1_score: countA2)
    >(counter>1?getscoredata[1].player2_score:countB2)
    ?<img alt='Medal' src={medalpic} className='medalstyling'/>:<></>}
    <div className='scorefield' >{counter>1?getscoredata[1].player1_score: countA2}</div>
   <b className='scorefield'>Set 2</b>
    <div className='scorefield' >{counter>1?getscoredata[1].player2_score: countA2}</div>
    {(counter>1?getscoredata[1].player1_score: countA2)
    <(counter>1?getscoredata[1].player2_score:countB2)
    ?<img alt='Medal' src={medalpic} className='medalstyling'/>:<></>}
 </button>
 <br/>
 <button onClick={()=> {setCountA3(countA);setCountB3(countB);setCountA(0);setCountB(0)}} className='scoreinputcontainer'>
 {(counter>2?getscoredata[2].player1_score: countA3)
    >(counter>2?getscoredata[2].player2_score:countB3)
    ?<img alt='Medal' src={medalpic} className='medalstyling'/>:<></>}
    <div className='scorefield' >{counter>2?getscoredata[2].player1_score: countA3}</div>
   <b className='scorefield'>Set 3</b>
    <div className='scorefield' >{counter>2?getscoredata[2].player2_score:countB3}</div>
    {(counter>2?getscoredata[2].player1_score: countA3)
    <(counter>2?getscoredata[2].player2_score:countB3)
    ?<img alt='Medal' src={medalpic} className='medalstyling'/>:<></>}
 </button>

</div>
        </div>
    )
}
