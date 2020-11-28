import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams,useHistory } from 'react-router-dom';
import {url} from '../url'
import {tokenval} from '../Home/Tournamenthome'
import {BiArrowBack} from 'react-icons/bi'
import profpic from '../Createtournament/profile.png'

export default function Playerdetails() {
  const history=useHistory()
    const [playerdetails,setPayerdetails]=useState()
    let {id}=useParams();
    useEffect(() => {
        const getData = async () => {
          await axios(
            url+'/players?id='+id,    { headers: {Authorization: "Token "+tokenval }})
             .then(response => 
              {setPayerdetails(response.data.data)
                console.log(response);
               console.log(response.data.message);
               console.log(id) 
              })  
                 
          };
         getData()
         
      }, []);
      if(!playerdetails)
      return <>Loading...</>
    return (
        <div>
            <h2 className='title'>
              <BiArrowBack onClick={() => history.push('/Playershome')} style={{float:'left'}}/>
              Player details
            </h2>
            {playerdetails.map((data,i) => 
            {if(data.profile_image==='http://139.59.16.180:8006/media/False')
              return data.profile_image=false
              return (
              <div key={i}>
                <div className='playerdetailsflex'>
                <div>
                {data.profile_image?<img alt='Profilepicture' src={data.profile_image} className='playerprofilepic'/>
                :
                <img alt='Profilepicture' src={profpic} className='playerprofilepic'/>}
                </div>
                <div className='playernameandso'>
                  <h4><b>{data.name}</b></h4><br/>
                  {data.age} Years<br/><br/>
                  {data.gender}
                </div>
                </div>
                <div className='playerdetail'>
                  <div className='playerdetailsflex'>
                  < div className='mutedtext '>Email :</div><div style={{margin:'0px 15px'}}>{data.email}</div>
                  </div>
                  <div className='playerdetailsflex'>
                  < div className='mutedtext '>Matches played :</div><div style={{margin:'0px 15px'}}>{data.matches_played}</div>
                  </div>
                  <div className='playerdetailsflex'>
                  < div className='mutedtext '>Matches won :</div><div style={{margin:'0px 15px'}}>{data.matches_won}</div>
                  </div>
                </div><br/>
                <div>
                  <h5><b>Played in tournaments</b><div className='horizontalline'></div></h5>.
                  <div></div>
                </div>
              </div>
            )})}
        </div>
    )
}
