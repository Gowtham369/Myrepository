import React from 'react'
import { BrowserRouter as Router, Redirect, Route,  Switch } from 'react-router-dom';
import Landingpage from './Loginandsignup/Landingpage'
import Login from './Loginandsignup/Login'
import Signup from './Loginandsignup/Signup'
import Tournamenthome from './Home/Tournamenthome'
import Playershome from './Home/Playershome'
import Myprofile from './Home/Myprofile'
import Addplayer from './Addplayerandplayerdetailspage/Addplayer';
import Createtournament from './Createtournament/Createtournament'
import Tournamentdetails from './Createtournament/Tournamentdetails';
import Matches from './Matches/Matches';
import Playerdetails from './Addplayerandplayerdetailspage/Playerdetails';
import Createdraws from './Createtournament/Createdraws';
export default function Routing() {
    return (
        <div>
            <Router>
            <Switch>
            <Route exact path='/' component={Landingpage}></Route> 
       
        {/* Login and Signup */}
  <Route exact path='/Login' component={Login}></Route> 
  <Route exact path='/Signup' component={Signup}></Route> 
  
  {/* Tournamenthome and details */}
  <Route exact path='/Tournamenthome' strict component={Tournamenthome}></Route> 
  <Route exact path='/Matches' component={Matches}></Route> 
  <Route exact path='/Tournamentdetails/:id/Createdraws' component={Createdraws}></Route> 

{/* Players */}
     <Route exact path='/Playerdetails/:id' strict component={Playerdetails}></Route> 
  <Route exact path='/Tournamentdetails/:id' strict component={Tournamentdetails}></Route> 
  <Route exact path='/Playershome' strict component={Playershome}></Route> 


{/* My Profile */}
     <Route exact path='/Myprofile' strict component={Myprofile}></Route> 
     
     {/* Creating Tournament and adding Players */}
     <Route exact path='/Addplayer' strict component={Addplayer}></Route> 
     <Route exact path='/Createtournament' strict component={Createtournament}></Route> 
     
     <Redirect to='/'/>

  </Switch>
            </Router>
        </div>
    )
}
