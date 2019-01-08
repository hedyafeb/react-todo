import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <h3>Login</h3>
                <Form className="col-4">
                    <FormGroup>
                        <Label>Email</Label>
                        <Input placeholder="input email"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" placeholder="input password"></Input>
                    </FormGroup>
                    <Button>Login</Button>
                </Form>
            </div>
        )
    }
}

export default Login