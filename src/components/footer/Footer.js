import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Fb from "../../Assets/svg/fb.svg"
import { useTranslation } from "react-i18next"


export const Footer = () => {
    const { t, i18n } = useTranslation()

    return (
        <div>
            <div className="footerSec">
                <div className="centerDiv">
                    <div className="w70">
                        <Row>
                            <Col lg={4} sm={12}>
                                <div className="mobileFooter">
                                    <p className="footerTitle">{t('footer_follow')}</p>

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
                                    <p className="footerTitle">{t('footer_loc')}</p>
                                    <p className="address">{t('footer_add')}</p>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="pcfooterHide">


                                    <Row >
                                        <Col>
                                            <p className="footerTitle">{t('footer_voice')}</p>
                                            <div className="footerDiv">
                                                <ul>
                                                    <li><a href="#" className="footerText">{t('head1')}</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="#" className="footerText">{t('voice_title')}</a></li>
                                                </ul> <ul>
                                                    <li><a href="#" className="footerText">{t('diff_title')}</a></li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="footerDiv2">
                                                <ul>
                                                    <li><a href="#" className="footerText">{t('head1')}</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="#" className="footerText">{t('head5')}</a></li>
                                                </ul> <ul>
                                                    <li><a href="#" className="footerText">{t('head3')}</a></li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="footerDiv2">
                                                <ul>
                                                    <li><a href="#" className="footerText">{t('footer_cont')}</a></li>
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
                                <li><a href="#" className="footerText">{t('voice_title')}</a></li>
                            </ul> <ul>
                                <li><a href="#" className="footerText">{t('diff_title')}</a></li>
                            </ul>
                            <ul>
                                <li><a href="#" className="footerText">Language: English</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className="">
                            <ul>
                                <li><a href="#" className="footerText">{t('head1')}</a></li>
                            </ul>
                            <ul>
                                <li><a href="#" className="footerText">{t('head4')}</a></li>
                            </ul>
                            <ul>
                                <li><a href="#" className="footerText">{t('head5')}</a></li>
                            </ul> <ul>
                                <li><a href="#" className="footerText">{t('head3')}</a></li>
                            </ul>
                            <ul>
                                <li><a href="#" className="footerText">{t('footer_cont')}</a></li>
                            </ul>
                        </div>

                    </Col>
                </Row>
            </div>
            <div className="lastFooter">
                <p className="lastFooterText">{t('footer_policy')}</p>
            </div>
        </div>
    )
}

