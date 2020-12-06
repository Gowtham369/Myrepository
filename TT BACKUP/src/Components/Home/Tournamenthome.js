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


 if(tokenval===localStorage.getItem('token'))
          return (
        <div>
             {console.log(tokenval)}
                <h2 className='title'>Tournaments</h2>
               
                <Tabs  className='tabsstyling'  justify  >
                    <Tab  eventKey="Completed" title="Completed" >
                        
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
                Create a tournament
                </h3>
                <Link to='/Createtournament'><Button style={{fontSize:'35px',borderRadius:'50px',
            position:'fixed',top:'30px',marginTop: '647px',
             marginLeft: '315px',width:'50px',height:'50px',paddingTop:'0px',
             paddingBottom:'0px'}} >+</Button></Link>
              </div>
            <Home/>
        </div>
    )
}
