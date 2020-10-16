import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export class Header extends Component {
    render() {
        return (
            <div className="centerDiv">

                <Navbar className="w70">
                    <Navbar.Brand href="#home" className="logo" >Voicemate</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="headerLink">About us</Nav.Link>
                        <Nav.Link href="#features" className="headerLink">Features</Nav.Link>
                        <Nav.Link href="#benifit" className="headerLink">Our Benefits</Nav.Link>
                        <Nav.Link href="#pricing" className="headerLink">Use Cases</Nav.Link>
                        <Nav.Link href="#pricing" className="headerLink">Testimonial</Nav.Link>

                    </Nav>
                    <div inline>
                        {/* <Button variant="danger" >Sign Up</Button> */}
                        <button className="button" >Sign Up</button>

                    </div>
                </Navbar>

            </div>
        )
    }
}

export default Header
