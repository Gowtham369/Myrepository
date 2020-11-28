import React from 'react'
import './Home.scss'
import { Button, Tabs, Tab } from 'react-bootstrap'
import Home from './Home'
import { Link } from 'react-router-dom'
import Completedtournaments from './Completedtournaments'
import Ongoingtournaments from './Ongoingtournaments'
import Upcomingtornaments from './Upcomingtournaments'
export let tokenval=localStorage.getItem('token')

export default function Tournamenthome() {
 
          return (
        <div>
             {console.log(tokenval)}
                <h2 className='title'>Tournaments</h2>
                <Tabs style={{backgroundColor:'#b3cccc'}} justify >
                    <Tab  eventKey="Completed" title="Completed">
                        
                        <Completedtournaments/>
                        
                    </Tab>
                    <Tab eventKey="Ongoing" title="Ongoing">
                    
                        <Ongoingtournaments />
                    
                    </Tab>
                    <Tab eventKey="Upcoming" title="Upcoming" >
                    
                        <Upcomingtornaments />
                    
                    </Tab>
                </Tabs>
                 <div className='centerofpage' style={{marginTop:'80px'}}>
                <h3 className='mutedtext'>
                Create a <br/> tournament
                </h3>
                <Link to='/Createtournament'><Button >Create now</Button></Link>
              </div>
            <Home/>
        </div>
    )
}
