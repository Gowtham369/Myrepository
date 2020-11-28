import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './Matches.scss'
import profpic from './profile.png'
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa'
export default function Matches() {
  const [posts,setPosts] = useState();
  const [isLoading, setisLoading]=useState(true)
  const [countA,setCountA]=useState(0)
  const [countB,setCountB]=useState(0)
  const [countA1,setCountA1]=useState(0)
  const [countA2,setCountA2]=useState(0)
  const [countA3,setCountA3]=useState(0)
  const [countB1,setCountB1]=useState(0)
  const [countB2,setCountB2]=useState(0)
  const [countB3,setCountB3]=useState(0)

  /* GET https://api.fortnitetracker.com/v1/profile/{platform}/{epic-nickname} */
  useEffect(() => {
    const fetchData = async () => {
     await axios(
        'https://jsonplaceholder.typicode.com/posts'
        
        )
     
      
      setisLoading(false)
    };
   
    fetchData();
    
  }, []);
  
    return (
        <div className='Matches'>
            <div className="split left">
  <div className="centered">
    <img src={profpic} alt='Player1'/>
    {/* {console.log(data)} */}
    <h2>       
       {!isLoading? posts.hits.map(post=>(<li key={post.id}>{post.title}</li>)):<p>Loading...</p>}      
    </h2>   
    <p>Some text.</p>
    <div className='scoringfield'>
    
    <FaPlusCircle onClick={() => setCountA(countA + 1)} type='button' size='35px'/>
    <div>{countA}</div>
    <FaMinusCircle onClick={() => setCountA(countA - 1)} type='button' size='35px'/>
   
    </div>
  </div>
</div>
<div className='verticalline'></div>
<h5 className='versus'>v/s</h5>
<div className="split right">
  <div className="centered">
    <img src={profpic} alt="player2"/>
    <h2>John Doe</h2>
    <p>Some text here too.</p>
    <div className='scoringfield'>
   
    <FaPlusCircle onClick={() => setCountB(countB + 1)} type='button' size='35px'/>
    <div>{countB}</div>
    <FaMinusCircle onClick={() => setCountB(countB - 1)} type='button' size='35px'/>
   
    </div>
  </div>
</div>
<div><br/><br/><br/>
 <button onClick={()=> {setCountA1(countA);setCountB1(countB);setCountA(0);setCountB(0)}} className='scoreinputcontainer'>
    <div className='scorefield'>{countA1}</div>
   <b className='scorefield'>Set 1</b>
    <div className='scorefield'>{countB1}</div>
 </button>
 <br/>
 <button onClick={()=> {setCountA2(countA);setCountB2(countB);setCountA(0);setCountB(0)}} className='scoreinputcontainer'>
    <div className='scorefield'>{countA2}</div>
   <b className='scorefield'>Set 2</b>
    <div className='scorefield'>{countB2}</div>
 </button>
 <br/>
 <button onClick={()=> {setCountA3(countA);setCountB3(countB);setCountA(0);setCountB(0)}} className='scoreinputcontainer'>
    <div className='scorefield'>{countA3}</div>
   <b className='scorefield'>Set 3</b>
    <div className='scorefield'>{countB3}</div>
 </button>

</div>
        </div>
    )
}
