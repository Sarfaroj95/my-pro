import React, { Component } from 'react'
import { Button, Row, Col } from 'react-bootstrap'

import Paypal from "../../Assets/svg/paypal.svg"
import Samsung from "../../Assets/svg/samsung.svg"
import Intel from "../../Assets/svg/intel.svg"
import Google from "../../Assets/svg/google.svg"
import Skype from "../../Assets/svg/skype.svg"






export class Partners extends Component {
    render() {
        return (
            <div className="centerDiv">
                <div className="w70">
                    <div className="partnerDiv">
                        <p className="pertners">Our Partners</p>

                    </div>
                    <Row>
                        <Col>
                            <img className="partnerImg" src={Paypal} />
                        </Col>
                        <Col>
                            <img className="partnerImg" src={Samsung} />
                        </Col>
                        <Col>
                            <img className="partnerImg ml-4" src={Intel} />
                        </Col>
                        <Col>
                            <img className="partnerImg" src={Google} />
                        </Col>
                        <Col>
                            <img className="partnerImg" src={Skype} />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Partners
