import React from 'react';
import './App.css';
import Createtournament from './Components/Createtournament';
import Landingpage from './Components/Loginandsignup/Landingpage';
import Signup from './Components/Loginandsignup/Signup';
import Login from './Components/Loginandsignup/Login'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Routing from './Components/Routing';
import Home from './Components/Home/Home';
function App() {
  return (
    <div >
    {/* <Createtournament /> */}
    {/*  <Landingpage /> */}
     {/* <Signup/> */}
{/* <Login/> */}
{/* <Routing /> */}
{/* <Home/> */}
<Routing></Routing>
    </div>
  );
}

export default App;
