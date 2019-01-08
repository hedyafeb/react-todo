import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    Button,
    Nav,
    NavItem } from 'reactstrap';

class myNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Button color="link">
                        <Link to="/"> To-Do</Link>
                    </Button>
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button color="link">
                                    <Link to="/tasks"> All Tasks </Link>
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </Navbar>
            </div>
        )
    }
}

export default myNavbar