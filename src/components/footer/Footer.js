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
                                <Col lg={4} sm={12}>
                                    <div className="mobileFooter">
                                        <p className="footerTitle">Follow us on</p>

                                        <div className="socialSec">
                                            <ul className="socialIcon">
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-square"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
                                                </li>
                                                <li>
                                                    <a href="http://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="addSec mobileFooter">
                                        <p className="footerTitle">Location</p>
                                        <p className="address">123 Nguyen Trai street, Hanoi, Vietnam</p>
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="pcfooterHide">


                                        <Row >
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
                                    </div>
                                </Col>

                            </Row>


                        </div>
                    </div>
                </div>
                <div className="mobileFt">
                    <Row>
                        <Col >
                            <div>

                                <ul>
                                    <li><a href="#" className="footerText">What is Voicemate?</a></li>
                                </ul> <ul>
                                    <li><a href="#" className="footerText">How are we different?</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#" className="footerText">Language: English</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="">
                                <ul>
                                    <li><a href="#" className="footerText">About us</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#" className="footerText">Use cases</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#" className="footerText">Testimonial</a></li>
                                </ul> <ul>
                                    <li><a href="#" className="footerText">Our benefits</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#" className="footerText">Contact us</a></li>
                                </ul>
                            </div>

                        </Col>
                    </Row>
                </div>
                <div className="lastFooter">
                    <p className="lastFooterText">Privacy Policy / Copyright © 2020 VOICEMATE. All Rights Reserved</p>
                </div>
            </div>
        )
    }
}

export default Footer
