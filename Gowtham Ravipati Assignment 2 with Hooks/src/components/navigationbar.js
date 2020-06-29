import React from 'react';
import { Button, Container, Col, Row, ButtonGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Styling.scss';
function nav(){
    
      

    return (
  <div>
      <Container fluid>
          <Row>
       <Col>
       <Button href='/Login' variant="info" block>Login</Button>
       </Col>
              <Col>
<Link to='/Register'><Button variant="info" block >Register</Button></Link>
       </Col></Row>
</Container>

<ButtonGroup vertical className='butstyling'>
 
<Link to='/'><Button block>Home</Button></Link>
<Link to='/Userlist'><Button block>User List</Button></Link>
<Link to='/Bloglist'><Button block>Blog List</Button></Link>
<Link to='/Logout'><Button block>Logout  </Button></Link>

</ButtonGroup>

  </div>
     );
  }
  
  export default nav;
  