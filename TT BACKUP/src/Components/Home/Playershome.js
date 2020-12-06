import React from 'react'
import './Home.scss'
import Home from './Home'
import Playerslist from './Playerslist'
export default function Playershome() {
    return (
        <div>
        
            <h2 className='title'>Players</h2>
            <Playerslist />
            <Home/>
        
        </div>
    )
}
