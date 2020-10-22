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
import { useTranslation } from "react-i18next"


export const Body = () => {

    const { t, i18n } = useTranslation()
    return (
        <div >
            <div className="bodyDiv">


                <p className="smlTitle">{t('title')}</p>
                <div className="centerDiv">
                    <div className="maintitsec">
                        <p className="title">{t('main_title')} </p>
                    </div>

                </div>
                <div className="centerDiv">
                    <div className="MsgBox">
                        <p className="bodyMsg">
                            {t('main_dec')}
                        </p>
                    </div>
                </div>
                <div className="centerDiv btnSec">
                    <div className="boxSvg">
                        <div>
                            <button className="button" >{t('btn_1')}</button>
                        </div>
                        <div>
                            <a href="#" className="learn">{t('btn_2')}</a>
                        </div>
                    </div>
                </div>
                <div className="centerDiv">
                    <div className="bgSec">
                        <div className="bg-blue">
                            <img className="bodySvg" src={body} alt="img" />
                        </div>
                        <div className="bg-blue-mobile">

                        </div>
                    </div>
                </div>
            </div>
            <div className="whatIs voice">
                <p className="title2">{t('voice_title')}</p>
            </div>
            <div className="container">
                <p className="bodyMsg">
                    {t('voice_dec')}
                </p>
            </div>
            <div className="centerDiv btnSec2">
                <div className="boxSvg">
                    <div>
                        <button className="button" >{t('btn_1')}</button>
                    </div>
                    <div>
                        <a href="#" className="learn">{t('btn_2')}</a>
                    </div>
                </div>
            </div>
            <div className="centerDiv">
                <div className="mainSVG">
                    <img className="mainsvgPic" src={MainSvg} alt="img" />
                </div>
            </div>

            {/*------- different Section-------- */}
            <div className="Section">
                <div className="whatIs">
                    <p className="title2">{t('diff_title')}</p>
                </div>
                <img className="leftSvg" src={left} alt="img" />
                <div className="centerDiv">
                    <div className="w70">
                        <div >
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <div className="IconDiv">
                                        <div>
                                            <img className="proIcon" src={One} alt="img" />
                                        </div>
                                        <div>
                                            <p className="IconText">{t('diff_icon1_title')}</p>
                                            <p className="IconDec">{t('diff_icon1_dec')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <div className="IconDiv">
                                        <div>
                                            <img className="proIcon" src={Two} alt="img" />
                                        </div>
                                        <div>
                                            <p className="IconText">{t('diff_icon2_title')}</p>
                                            <p className="IconDec">{t('diff_icon2_dec')}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="IconTop">
                                <Col sm={12} md={6} lg={6}>
                                    <div className="IconDiv">
                                        <div>
                                            <img className="proIcon" src={Three} alt="img" />
                                        </div>
                                        <div>
                                            <p className="IconText">{t('diff_icon3_title')}</p>
                                            <p className="IconDec">{t('diff_icon3_dec')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <div className="IconDiv">
                                        <div>
                                            <img className="proIcon" src={Four} alt="img" />
                                        </div>
                                        <div>
                                            <p className="IconText">{t('diff_icon4_title')}</p>
                                            <p className="IconDec">{t('diff_icon4_dec')}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="IconTop">
                                <Col sm={12} md={6} lg={6}>
                                    <div className="IconDiv">
                                        <div>
                                            <img className="proIcon" src={Five} alt="img" />
                                        </div>
                                        <div>
                                            <p className="IconText">{t('diff_icon5_title')}</p>
                                            <p className="IconDec">{t('diff_icon5_dec')}</p>
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
                            <p className="title3">{t('ben_title')}</p>
                        </div>
                        <div className="benSec">
                            <p className="benDec">{t('ben_dec')}</p>
                        </div>
                        <div className="pcView">
                            <Row>
                                <Col>
                                    <div className="IconDiv">
                                        <div>
                                            <img src={BenOne} alt="img" />
                                        </div>
                                        <div>
                                            <p className="benTextSec"><span className="benText">{t('ben_icon1_btxt')}</span><span className="benTextsml"> {t('ben_icon1_ntxt')}</span></p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="IconDiv">
                                        <div>
                                            <img src={BenTwo} alt="img" />
                                        </div>
                                        <div>
                                            <p className="benTextSec"><span className="benText">{t('ben_icon2_btxt')}</span><span className="benTextsml"> {t('ben_icon2_ntxt')}</span></p>
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
                                            <p className="benTextSec"><span className="benText">{t('ben_icon3_btxt')}</span><span className="benTextsml"> {t('ben_icon3_ntxt')}</span></p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="IconDiv">
                                        <div>
                                            <img src={BenFour} alt="img" />
                                        </div>
                                        <div>
                                            <p className="benTextSec"><span className="benText">{t('ben_icon4_btxt')}</span><span className="benTextsml"> {t('ben_icon4_ntxt')}</span></p>
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
                                            <p className="benTextSec"><span className="benText">{t('ben_icon5_btxt')}</span><span className="benTextsml"> {t('ben_icon5_ntxt')}</span></p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="IconDiv">
                                        <div>
                                            <img src={BenSix} alt="img" />
                                        </div>
                                        <div>
                                            <p className="benTextSec2"><span className="benText">{t('ben_icon6_btxt')}</span><span className="benTextsml"> {t('ben_icon6_ntxt')}</span>
                                                {/* <span className="benTextsml"> {t('ben_icon6b_ntxt')}</span> */}

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
                                            <p className="benTextSec"><span className="benText">{t('ben_icon7_btxt')}</span><span className="benTextsml"> {t('ben_icon7_ntxt')}</span></p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>

                                </Col>
                            </Row>
                        </div>
                        <div className="mobileView">
                            <Row>
                                <Col>
                                    <div className="IconDiv">
                                        <div>
                                            <img src={BenOne} alt="img" />
                                        </div>

                                    </div>
                                </Col>
                                <Col>
                                    <div className="IconDiv">
                                        <div>
                                            <img src={BenTwo} alt="img" />
                                        </div>

                                    </div>
                                </Col>
                                <Col>
                                    <div className="IconDiv">
                                        <div>
                                            <img src={BenThree} alt="img" />
                                        </div>

                                    </div>
                                </Col>
                            </Row>

                            <Row className="IconSec">

                                <Col>
                                    <div className="IconDiv">
                                        <div>
                                            <img src={BenFour} alt="img" />
                                        </div>

                                    </div>
                                </Col>
                                <Col>
                                    <div className="IconDiv">
                                        <div>
                                            <img src={BenFive} alt="img" />
                                        </div>

                                    </div>
                                </Col>
                                <Col>
                                    <div className="IconDiv">
                                        <div>
                                            <img src={BenSix} alt="img" />
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

                                    </div>
                                </Col>
                                <Col>

                                </Col>
                                <Col>

                                </Col>
                            </Row>

                        </div>
                    </div>
                </div>
            </div>
            {/*------- Benefits Section end -------- */}
            <div className="whatIs" id="usecase">
                <p className="title2">{t('cas_title')}</p>
            </div>
            {/* --------------use one ----------- */}
            <div className="UseSection">
                <div className="centerDiv">
                    <div className="w70">
                        <Row className="RVS">
                            <Col className="" lg={6} md={6} sm={12}>
                                <div className="mobileTop">
                                    <p className="useTitle">{t('cas_out_title')}</p>
                                    <ul className="list">
                                        <li>{t('cas_out_1')}</li>
                                        <li>{t('cas_out_2')}</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col className="" lg={6} md={6} sm={12}>
                                <div className="rightImg ">
                                    <img className="useIcon1" src={UseOne} alt="img" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            {/* ----------------- use two--------------- */}
            <div className="UseSection">
                <div className="centerDiv">
                    <div className="w70">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <div className="imgLeft">
                                    <img className="useIcon2" src={UseTwo} alt="img" />
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="mobileTop">
                                    <p className="useTitle">{t('cas_ser_title')}</p>
                                    <ul className="list">
                                        <li>{t('cas_ser_1')}</li>
                                        <li>{t('cas_ser_2')}</li>
                                        <li>{t('cas_ser_2')}</li>
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
                        <Row className="RVS">
                            <Col lg={6} md={6} sm={12}>
                                <div className="mobileTop">
                                    <p className="useTitle">{t('cas_coll_title')}</p>
                                    <ul className="list">
                                        <li>{t('cas_coll_1')}</li>
                                        <li>{t('cas_coll_2')}</li>
                                        <li>{t('cas_coll_3')}</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
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

                            <Col lg={6} md={6} sm={12}>
                                <div className="rightImg">
                                    <img className="useIcon4" src={UseFour} alt="img" />
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="mobileTop">
                                    <p className="useTitle">{t('cas_rec_title')}</p>
                                    <ul className="list">
                                        <li>{t('cas_rec_1')}</li>
                                        <li>{t('cas_rec_2')}</li>
                                        <li>{t('cas_rec_3')}</li>
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



