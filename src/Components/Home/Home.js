import React from 'react'
import { Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.scss'
import {GiBasketballJersey } from 'react-icons/gi'
import {IoIosTrophy } from 'react-icons/io'
import {FaUser } from 'react-icons/fa'

export default function Home() {
    return (
        <div>
             <br/><br/><br/><br/><br/><br/><br/><br/>
            <div className='buttonpannel' >
           
            <Link to='/Tournamenthome'><Button type="submit" size='lg' variant='none' block> <IoIosTrophy size='13%' className='icons'/></Button></Link>
            <Link to='/Playershome'><Button type="submit" size='lg' variant='none' block >< GiBasketballJersey size='13%' className='icons'/></Button></Link>
     
            <Link to='/Myprofile'><Button type='submit' size='lg' variant='none' block> <FaUser size='13%' className='icons'>Tourny</FaUser></Button></Link>

     
     </div>  
     
     
        </div> 
    )
}
