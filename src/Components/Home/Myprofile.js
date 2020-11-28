import React from 'react'
import { useState ,useEffect} from 'react'
import Home from './Home'
import './Home.scss'
import axios from 'axios'
import profpic from './profile.png'
import {url} from '../url'
import {tokenval} from '../Home/Tournamenthome'

export default function Myprofile() {

    const [myprofiledata,setMyprofiledata]=useState()
    const [profilepic,setProfilepic]=useState()
    const [issending,setissending]=useState(true)
    const formData = new FormData();

    useEffect(() => {
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
         
      }, [issending]);
      const updatefileField = e => {
        setMyprofiledata({
          ...myprofiledata,
          [e.target.name]:e.target.files[0],

        });
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.addEventListener("load", () => {
          setProfilepic(reader.result);
        });     
      };
    return (
        <div>
            <h2 className='title'>My profile</h2>
            <div className='profileback'>
            {profilepic?
            <img alt='Profilepicture' src={profilepic} className='updatedprofpic'/>
            :
            <img alt='Profilepicture' src={profpic} className='profpic'/>}
            </div>
            <label htmlFor='input' className='label'>Add photo</label>
            <input type='file' name='profile_image' onChange={updatefileField} id='input' accept='image/*' />

            <div className='myprofiledetails'>
                <div >
                      ProfileName
                </div>
            </div>

            <Home />
        </div>
    )
}
