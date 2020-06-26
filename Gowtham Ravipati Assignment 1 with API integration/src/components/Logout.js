import React, { Component } from 'react'
import './Styling.scss';

export class Logout extends Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <h1 className='text-center'>You are now Loggedout from Your Account</h1>
                <h2 className='text-center'>Thank You For Visititng Us</h2>
            </div>
        )
    }
}

export default Logout
