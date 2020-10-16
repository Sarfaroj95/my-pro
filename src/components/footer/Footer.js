import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Fb from "../../Assets/svg/fb.svg"


export class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footerSec">
                    <div className="centerDiv">
                        <div className="w70">
                            <Row>
                                <Col lg={4}>
                                    <p className="footerTitle">Follow us on</p>
                                    <div className="socialIcon">
                                        <li style={{ "list-style-type": "none" }}><a href="#"> <img src={Fb} /></a></li>
                                        <li><a href="#"> <img src={Fb} /></a></li>
                                        <li><a href="#"> <img src={Fb} /></a></li>
                                        <li><a href="#"> <img src={Fb} /></a></li>
                                    </div>

                                    <p className="footerTitle">Location</p>
                                    <p className="address">123 Nguyen Trai street, Hanoi, Vietnam</p>

                                </Col>
                                <Col lg={8}>
                                    <Row>
                                        <Col>
                                            <p className="footerTitle">Voicemate</p>
                                            <div className="footerDiv">
                                                <ul>
                                                    <li><a href="#" className="footerText">About us</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="#" className="footerText">What is Voicemate?</a></li>
                                                </ul> <ul>
                                                    <li><a href="#" className="footerText">How are we different?</a></li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="footerDiv2">
                                                <ul>
                                                    <li><a href="#" className="footerText">Use cases</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="#" className="footerText">Testimonial</a></li>
                                                </ul> <ul>
                                                    <li><a href="#" className="footerText">Our benefits</a></li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="footerDiv2">
                                                <ul>
                                                    <li><a href="#" className="footerText">Contact us</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="#" className="footerText">Language: English</a></li>
                                                </ul>

                                            </div>
                                        </Col>
                                    </Row>
                                </Col>

                            </Row>
                        </div>
                    </div>
                </div>
                <div className="lastFooter">
                    <p className="lastFooterText">Privacy Policy / Copyright © 2020 VOICEMATE. All Rights Reserved</p>
                </div>
            </div>
        )
    }
}

export default Footer
