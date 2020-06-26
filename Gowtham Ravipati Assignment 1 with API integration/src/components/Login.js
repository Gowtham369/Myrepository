import React, { Component } from 'react'
import { Button, Form} from 'react-bootstrap';
import './Styling.scss';

export class Login extends Component {
    render() {
      
      
      return (
            <div className='styling'>
                <h1 className='text-center'>Login</h1>
                <br/>
                <Form>
  <Form.Group>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />

  </Form.Group>

  <Form.Group>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </div>
        )
    }
}

export default Login
