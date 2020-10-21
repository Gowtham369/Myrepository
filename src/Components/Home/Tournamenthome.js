import React from 'react'
import './Home.scss'
import { Button } from 'react-bootstrap'
import Home from './Home'
export default function Tournamenthome() {
    return (
        <div>
             
                <h2 className='title'>Tournaments</h2>
        <div className='centerofpage'>
            <h3 className='mutedtext'>
                Create your <br/>first tournament
            </h3>
            <Button class>Create now</Button>
        </div>
        <Home/>
        </div>
    )
}
