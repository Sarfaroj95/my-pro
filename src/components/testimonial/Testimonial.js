import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import user1 from "../../Assets/test-user/user.png"


export class Testimonial extends Component {
    render() {
        return (
            <div>
                <div className="whatIs" id="benifit">
                    <p className="title2">Testimonial
                     </p>
                </div>
                <div className="centerDiv">
                    <div className="w70">
                        <OwlCarousel
                            className="owl-theme"
                            loop
                            items="1"

                            autoplay
                            dots
                            are not
                            margin={40}

                        >
                            {/* 1st */}
                            <div class="item">
                                <div className="itemDiv">
                                    <div className="Lquote">
                                        <p><i class="fas fa-quote-left"></i></p>
                                    </div>
                                    <div className="tesDec">
                                        <p class="tesDec">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, adipiscing cursus varius lacinia vel amet. Diam nulla lobortis rutrum pellentesque fringilla nulla fames.</p>
                                    </div>
                                    <div className="centerDiv pt-2">
                                        <p className="userName">Sarfaroj </p>
                                    </div>
                                    <div className="centerDiv">
                                        <p className="userDg">UI Design</p>
                                    </div>
                                    <div className="Rquote">
                                        <p><i class="fas fa-quote-right"></i></p>
                                    </div>

                                </div>
                                <div className="centerDiv">
                                    <div className="userPicSec">
                                        <img className="userImg" src={user1} />
                                    </div>
                                </div>
                            </div>
                            {/* 2nd */}
                            <div class="item">
                                <div className="itemDiv">
                                    <div className="Lquote">
                                        <p><i class="fas fa-quote-left"></i></p>
                                    </div>
                                    <div className="tesDec">
                                        <p class="tesDec">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, adipiscing cursus varius lacinia vel amet. Diam nulla lobortis rutrum pellentesque fringilla nulla fames.</p>
                                    </div>
                                    <div className="centerDiv pt-2">
                                        <p className="userName">Sarfaroj </p>
                                    </div>
                                    <div className="centerDiv">
                                        <p className="userDg">UI Design</p>
                                    </div>
                                    <div className="Rquote">
                                        <p><i class="fas fa-quote-right"></i></p>
                                    </div>

                                </div>
                                <div className="centerDiv">
                                    <div className="userPicSec">
                                        <img className="userImg" src={user1} />
                                    </div>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div class="item">
                                <div className="itemDiv">
                                    <div className="Lquote">
                                        <p><i class="fas fa-quote-left"></i></p>
                                    </div>
                                    <div className="tesDec">
                                        <p class="tesDec">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, adipiscing cursus varius lacinia vel amet. Diam nulla lobortis rutrum pellentesque fringilla nulla fames.</p>
                                    </div>
                                    <div className="centerDiv pt-2">
                                        <p className="userName">Sarfaroj </p>
                                    </div>
                                    <div className="centerDiv">
                                        <p className="userDg">UI Design</p>
                                    </div>
                                    <div className="Rquote">
                                        <p><i class="fas fa-quote-right"></i></p>
                                    </div>

                                </div>
                                <div className="centerDiv">
                                    <div className="userPicSec">
                                        <img className="userImg" src={user1} />
                                    </div>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonial
