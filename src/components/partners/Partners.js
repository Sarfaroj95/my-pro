import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import Paypal from "../../Assets/svg/paypal.svg"
import Samsung from "../../Assets/svg/samsung.svg"
import Intel from "../../Assets/svg/intel.svg"
import Google from "../../Assets/svg/google.svg"
import Skype from "../../Assets/svg/skype.svg"


import { useTranslation } from "react-i18next"




export const Partners = () => {
    const { t, i18n } = useTranslation()

    return (
        <div className="centerDiv">
            <div className="w70">
                <div className="partnerDiv">
                    <p className="ptitle">{t('our_pertnar')}</p>

                </div>
                <div className="pertsection">
                    <img className="partnerImg" src={Paypal} />
                    <img className="partnerImg" src={Samsung} />
                    <img className="partnerImg " src={Intel} />
                    <img className="partnerImg" src={Google} />
                    <img className="partnerImg" src={Skype} />
                </div>
                {/* <Row>
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
                    </Row> */}
            </div>
        </div>
    )
}

