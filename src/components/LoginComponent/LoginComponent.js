import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

class LoginComponent extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <h1 className='justify text-center'>Admin Panel</h1>
                <hr></hr>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default LoginComponent;