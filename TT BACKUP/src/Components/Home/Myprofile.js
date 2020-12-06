import React from 'react'
import { useState ,useEffect} from 'react'
import Home from './Home'
import './Home.scss'
import axios from 'axios'
import profpic from './profile.png'
import {url} from '../url'
import {tokenval} from '../Home/Tournamenthome'
import { Link,useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Myprofile() {

    const [myprofiledata,setMyprofiledata]=useState()
    const history = useHistory();

    useEffect(()=>{

      const getData=async()=>
      {
        await axios(
          url+'/profile/',{ headers: {Authorization: "Token "+tokenval }}
        ).then(response=>{
          setMyprofiledata(response.data.data)
          console.log(response.data.data)
        })
      }
      getData()
    },[])
    const logout=()=>{

      localStorage.clear()
      history.push('/')
    }
/*     useEffect(() => {
        formData.append('profile_image',myprofiledata.profile_image)
        const getData = async () => {
          await axios(
            url+'/profile/',  formData,  { headers: {'Content-Type':'multipart/form-data',Authorization: "Token "+tokenval }})
             .then(response => 
              {
                setMyprofiledata(response.data.data)
              })
          };

         getData()
         
      }, [issending]); */
/*       const updatefileField = e => {
        setMyprofiledata({
          ...myprofiledata,
          [e.target.name]:e.target.files[0],

        });
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.addEventListener("load", () => {
          setProfilepic(reader.result);
        });     
      }; */
      if(!myprofiledata)
      return<>...</>
      if(myprofiledata.profile_imageurl ==='http://139.59.16.180:8006/media/False')
        return myprofiledata.profile_imageurl=false
    return (
    
        <div>{console.log(myprofiledata.profile_image)}
            <h2 className='title'>My profile</h2>
            <div className='profileback'>
            
            {myprofiledata.profile_imageurl?
            <img alt='Profilepicture' src={myprofiledata.profile_imageurl} className='myprofilepic'/>
            :
            <img alt='Profilepicture' src={profpic} className='myprofilepic'/>}
            </div>
            {/* <label htmlFor='input' className='label'>Add photo</label>
            <input type='file' name='profile_image' onChange={updatefileField} id='input' accept='image/*' /> */}

            <div className='myprofiledetails'>
                <h4 >
                      <b>{myprofiledata.first_name+' '+myprofiledata.last_name}</b>
                </h4>
            <div style={{fontSize:'18px'}}>{myprofiledata.email}</div>
            <div style={{marginTop:'100px',fontSize:'18px'}}><Link to='/Myprofile/Addmoredetails' style={{textDecoration:'none'}}>Update Profile</Link></div>
           
          <br/>
        <Button onClick={logout}>Logout</Button>
       </div>
            <Home />
        </div>
    )
}
