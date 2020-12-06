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
           
            <Link style={{textDecoration:'none'}} to='/Tournamenthome'>
                <Button type="submit" size='lg' variant='none' block> 
                    <div style={{display:'flex',flexDirection:'column',fontSize:'12px'}}>
                        <div><IoIosTrophy size='13%' className='icons'/></div>
                        <div>Tournaments</div>
                    </div></Button>
            </Link>
            <Link style={{textDecoration:'none'}} to='/Playershome'>
                <Button type="submit" size='lg' variant='none' block > 
                    <div style={{display:'flex',flexDirection:'column',fontSize:'12px'}}>
                        <div>< GiBasketballJersey size='13%' className='icons'/></div>
                        <div>Players</div>
                    </div>
                </Button>
            </Link>
     
            <Link style={{textDecoration:'none'}} to='/Myprofile'>
                <Button type='submit' size='lg' variant='none' block>
                    <div style={{display:'flex',flexDirection:'column',fontSize:'12px'}}><div>
                         <FaUser size='13%' className='icons'/></div>
                         <div>My profile</div>
                    </div>
                </Button>
            </Link>

     
     </div>  
     
     
        </div> 
    )
}
