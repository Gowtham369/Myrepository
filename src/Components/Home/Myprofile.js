import React from 'react'
import Home from './Home'
import './Home.scss'
import profpic from './profile.png'
export default function Myprofile() {
    return (
        <div>
            <h2 className='title'>My profile</h2>
            <div className='profileback'>
                <img src={profpic} className='profpic'/>
            </div>
            <label htmlFor='input' className='label'>Add photo</label>
            <input type='file' name='image-upload' id='input' accept='image/*' />
            <Home />
        </div>
    )
}
