import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import body from "../../Assets/svg/body.svg"
import MainSvg from "../../Assets/svg/main.svg"
import left from "../../Assets/svg/left.svg"
import One from "../../Assets/svg/1.svg"
import Two from "../../Assets/svg/2.svg"
import Three from "../../Assets/svg/3.svg"
import Four from "../../Assets/svg/4.svg"
import Five from "../../Assets/svg/5.svg"
import BenOne from "../../Assets/svg/ben-1.svg"
import BenTwo from "../../Assets/svg/ben-2.svg"
import BenThree from "../../Assets/svg/ben-3.svg"
import BenFour from "../../Assets/svg/ben-4.svg"
import BenFive from "../../Assets/svg/ben-5.svg"
import BenSix from "../../Assets/svg/ben-6.svg"
import BenSeven from "../../Assets/svg/ben-7.svg"
import UseOne from "../../Assets/svg/use-1.svg"
import UseTwo from "../../Assets/svg/use-2.svg"
import UseThree from "../../Assets/svg/use-3.svg"
import UseFour from "../../Assets/svg/use-4.svg"


import { Partners } from "../../components/partners/Partners"
import { Footer } from "../../components/footer/Footer"
import { Testimonial } from "../../components/testimonial/Testimonial"


export class Body extends Component {
    render() {
        return (
            <div className="bodyDiv">
                <p className="smlTitle">VOICEMATE</p>
                <p className="title">Your Conversational<br />
                    Assistant
                </p>
                <div className="centerDiv">
                    <div className="MsgBox">
                        <p className="bodyMsg">
                            Say ‘hello’ to the future of conversational experience.
                            With the ever-increasing complexity of reaching the
                            masses with limited resources, companies are looking
                            for ways to optimize and reduce manual touchpoints
                        </p>
                    </div>
                </div>
                <div className="centerDiv">
                    <div className="boxSvg">
                        <div>
                            <button className="button" >Start free trial</button>
                        </div>
                        <div>
                            <a href="#" className="learn">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="bg-blue">
                        <img className="bodySvg" src={body} alt="img" />
                    </div>
                </div>
                <div className="whatIs voice">
                    <p className="title2">What is Voicemate?

                </p>
                </div>
                <div className="container">
                    <p className="bodyMsg">
                        Voice Mate is a multi-lingual
                        conversational assistant that is both text and
                        voice-based. Enabled with Natural Language
                        Understanding (NLU), the conversational
                        assistant can create a script from Text to
                        Speak based which can also be customized
                        with human-like and contextual responses in
                        multiple global languages. In addition, Voice
                        Mate is truly omni-channel, as it can be
                        integrated with IVR, mobile, web, social & IoT
                        channels.
                        </p>
                </div>
                <div className="centerDiv">
                    <div className="boxSvg">
                        <div>
                            <button className="button" >Start free trial</button>
                        </div>
                        <div>
                            <a href="#" className="learn">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="centerDiv">
                    <div className="mainSVG">
                        <img src={MainSvg} alt="img" />
                    </div>
                </div>

                {/*------- different Section-------- */}
                <div className="Section">
                    <div className="whatIs">
                        <p className="title2">How are we different?
                     </p>
                    </div>
                    <img className="leftSvg" src={left} alt="img" />
                    <div className="centerDiv">
                        <div className="w70">
                            <div >
                                <Row>
                                    <Col>
                                        <div className="IconDiv">
                                            <div>
                                                <img src={One} alt="img" />
                                            </div>
                                            <div>
                                                <p className="IconText">Pro-active and Personalized Engagement</p>
                                                <p className="IconDec">Give automated reminders, follow-ups, notifications, and recommendations.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="IconDiv">
                                            <div>
                                                <img src={Two} alt="img" />
                                            </div>
                                            <div>
                                                <p className="IconText">User Empowered Platform</p>
                                                <p className="IconDec">Allows user to create campaign and script with decision flow on Realtime basis without any external support.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="IconTop">
                                    <Col>
                                        <div className="IconDiv">
                                            <div>
                                                <img src={Three} alt="img" />
                                            </div>
                                            <div>
                                                <p className="IconText">Multilingual Support</p>
                                                <p className="IconDec">Multi global languages.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="IconDiv">
                                            <div>
                                                <img src={Four} alt="img" />
                                            </div>
                                            <div>
                                                <p className="IconText">Context awareness</p>
                                                <p className="IconDec">Captures intent and responds
                                                contextually for FAQs and user specific information.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="IconTop">
                                    <Col>
                                        <div className="IconDiv">
                                            <div>
                                                <img src={Five} alt="img" />
                                            </div>
                                            <div>
                                                <p className="IconText">Enterprise Readiness</p>
                                                <p className="IconDec">Connects easily to ERP, CRM,
                                                ticketing and knowledge base systems with pre-built connector</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>

                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
                {/*------- different Section end-------- */}

                {/*------- Benefits Section -------- */}
                <div className="Section">


                    <img className="rightSvg" src={left} alt="img" />
                    <div className="centerDiv">
                        <div className="w70">
                            <div className="whatIs">
                                <p className="title3">Our Benefits</p>
                            </div>
                            <div>
                                <p className="benDec">We have researched and developed features that<br /> bring many benefits to our customers</p>
                            </div>
                            <div >
                                <Row>
                                    <Col>
                                        <div className="IconDiv">
                                            <div>
                                                <img src={BenOne} alt="img" />
                                            </div>
                                            <div>
                                                <p className="benTextSec"><span className="benText">Reach larger audience</span><span className="benTextsml"> in short time</span></p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="IconDiv">
                                            <div>
                                                <img src={BenTwo} alt="img" />
                                            </div>
                                            <div>
                                                <p className="benTextSec"><span className="benText">Real time</span><span className="benTextsml"> audio scripts creation</span></p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="IconSec">
                                    <Col>
                                        <div className="IconDiv">
                                            <div>
                                                <img src={BenThree} alt="img" />
                                            </div>
                                            <div>
                                                <p className="benTextSec"><span className="benText">Auto follow-up</span><span className="benTextsml"> on non connected database</span></p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="IconDiv">
                                            <div>
                                                <img src={BenFour} alt="img" />
                                            </div>
                                            <div>
                                                <p className="benTextSec"><span className="benText">Multiple layer</span><span className="benTextsml"> of actions on single journey</span></p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="IconSec">
                                    <Col>
                                        <div className="IconDiv">
                                            <div>
                                                <img src={BenFive} alt="img" />
                                            </div>
                                            <div>
                                                <p className="benTextSec"><span className="benText">User defined</span><span className="benTextsml"> actions and flow</span></p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="IconDiv">
                                            <div>
                                                <img src={BenSix} alt="img" />
                                            </div>
                                            <div>
                                                <p className="benTextSec2"><span className="benText">Improves process efficiency</span><span className="benTextsml"> and captures</span>
                                                    <span className="benTextsml"> response accurately</span>

                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="IconSec">
                                    <Col>
                                        <div className="IconDiv">
                                            <div>
                                                <img src={BenSeven} alt="img" />
                                            </div>
                                            <div>
                                                <p className="benTextSec"><span className="benText">Reduce Operational Cost</span><span className="benTextsml"> due to manual work</span></p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>

                                    </Col>
                                </Row>

                            </div>
                        </div>
                    </div>
                </div>
                {/*------- Benefits Section end -------- */}
                <div className="whatIs" id="benifit">
                    <p className="title2">Use Cases
                     </p>
                </div>
                {/* --------------use one ----------- */}
                <div className="UseSection">
                    <div className="centerDiv">
                        <div className="w70">
                            <Row>
                                <Col>
                                    <div>
                                        <p className="useTitle">Outbound Sales</p>
                                        <ul className="list">
                                            <li>Capture intend based on customized Scripts for prequalified leads.</li>
                                            <li>Validate Demand thru auto calling.</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="rightImg">
                                        <img className="useIcon1" src={UseOne} alt="img" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                {/* ----------------- use two--------------- */}
                <div className="UseSection service">
                    <div className="centerDiv">
                        <div className="w70">
                            <Row>
                                <Col>
                                    <div>
                                        <img className="useIcon2" src={UseTwo} alt="img" />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <p className="useTitle">Service</p>
                                        <ul className="list">
                                            <li>IVR based Voice OTP Authentication.</li>
                                            <li>Capture Service Rating.</li>
                                            <li>Conduct Survey with buyer database on Brand loyalty. Product Recommendation.</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                {/* ------------------ use three ----------------- */}
                <div className="UseSection">
                    <div className="centerDiv">
                        <div className="w70">
                            <Row>
                                <Col>
                                    <div>
                                        <p className="useTitle">Collection</p>
                                        <ul className="list">
                                            <li>Payment Reminder.</li>
                                            <li>Intend Capture.</li>
                                            <li>Automated Multi-Settlement targeting based on movement in Collection bucket.</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="rightImg">
                                        <img className="useIcon3" src={UseThree} alt="img" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                {/* -------------------- use four ------------------- */}
                <div className="UseSection">
                    <div className="centerDiv">
                        <div className="w70">
                            <Row>

                                <Col>
                                    <div>
                                        <img className="useIcon4" src={UseFour} alt="img" />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <p className="useTitle">Recruitment</p>
                                        <ul className="list">
                                            <li>Capture Intend on Placement from Candidate Pool.</li>
                                            <li>Conduct Recorded Interview.</li>
                                            <li>Qualify Candidates based on answers received as text.</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div>
                    <Testimonial />
                </div>

                <div>
                    <Partners />
                </div>
                <div>
                    <Footer />
                </div>

            </div>
        )
    }
}

export default Body
