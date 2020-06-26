import React,{ Component } from 'react';
import Nav from './navigationbar';
import Userlist from './Userlist';
import Bloglist from './Bloglist';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


export class Routing extends Component {
    render() {
        return (

                <Router>
<div>
  
<Nav />
<Switch>
<Route path='/Userlist'><Userlist /></Route>
<Route path='/Bloglist'><Bloglist /></Route>
<Route path='/Login'><Login /></Route>
<Route path='/Logout'><Logout /></Route>

<Route path='/Register'><Register /></Route>
</Switch></div>
</Router>
    
        )
    }
}

export default Routing;
