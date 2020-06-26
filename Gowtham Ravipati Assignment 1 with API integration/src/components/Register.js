import React, { Component } from 'react'
import { Button, Form, Row, Col} from 'react-bootstrap';
import './Styling.scss';
export class Register extends Component {
    render() {
        return (
            <div className='styling'>
                <h1 className='text-center'>Register</h1>
                <br/>
                <Form> 
                 <Form.Group><Row>
    <Col><Form.Label> First Name</Form.Label>
    <Form.Control type="name" placeholder="Enter First Name" /></Col><Col>
    <Form.Label> Second Name</Form.Label>
    <Form.Control type="name" placeholder="Enter Second Name" /></Col>
    </Row>
  </Form.Group>
  <Form.Group>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />

  </Form.Group>

  <Form.Group>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Set Password" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
        )
    }
}

export default Register;
