import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Link, Switch } from 'react-router-dom';
import Landingpage from './Loginandsignup/Landingpage'
import Login from './Loginandsignup/Login'
import Signup from './Loginandsignup/Signup'
import Tournamenthome from './Home/Tournamenthome'
import Playershome from './Home/Playershome'
import Myprofile from './Home/Myprofile'
import Addplayer from './Addplayerandplayerdetailspage/Addplayer';

export default function Routing() {
    return (
        <div>
            <Router>
            <Switch>
            <Route exact path='/' component={Landingpage}></Route> 
  <Route exact path='/Login' component={Login}></Route> 
  <Route exact path='/Signup' component={Signup}></Route> 
  
  <Route exact path='/Tournamenthome' strict component={Tournamenthome}></Route> 
     <Route exact path='/Playershome' strict component={Playershome}></Route> 
     <Route exact path='/Myprofile' strict component={Myprofile}></Route> 
     <Route exact path='/Addplayer' strict component={Addplayer}></Route> 

     <Redirect to='/'/>

  </Switch>
            </Router>
        </div>
    )
}
