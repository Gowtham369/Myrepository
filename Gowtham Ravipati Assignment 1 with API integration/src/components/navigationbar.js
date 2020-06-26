import React, {Component} from 'react';
import { Button, Container, Col, Row, ButtonGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom'

class nav extends Component {
    render(){
      const styling={ margin:'2%',width:'15%',float:'left'}

    return (
  <div>
      <Container fluid>
          <Row>
       <Col>
       <Button href='/Login' variant="info" block>Login</Button>
       </Col>
              <Col>
<Button variant="info" block href='/Register'>Register</Button>
       </Col></Row>
</Container>
<div>
<ButtonGroup vertical style={styling}>
 
<Link to='/'><Button>Home</Button></Link>
<Link to='/Userlist'><Button>User List</Button></Link>
<Link to='/Bloglist'><Button>Blog List</Button></Link>
<Link to='/Logout'><Button>Logout  </Button></Link>

</ButtonGroup>
</div>
  </div>
     );}
  }
  
  export default nav;
  