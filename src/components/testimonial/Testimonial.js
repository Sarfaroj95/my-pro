import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export class Testimonial extends Component {
    render() {
        return (
            <div>
                <div className="whatIs" id="benifit">
                    <p className="title2">Testimonial
                     </p>
                </div>
                <div className="centerDiv">
                    <div className="">
                        <OwlCarousel
                            className="owl-theme"
                            loop
                            item="1"
                            nav
                            autoplay
                            dots
                            are not
                        >
                            <div class="item">
                                <div className="testDiv">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, adipiscing cursus varius lacinia vel amet. Diam nulla lobortis rutrum pellentesque fringilla nulla fames.</p>
                                </div>
                            </div>
                            <div class="item" >
                                <div className="testDiv">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, adipiscing cursus varius lacinia vel amet. Diam nulla lobortis rutrum pellentesque fringilla nulla fames.</p>
                                </div>
                            </div> <div class="item" >
                                <div className="testDiv">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, adipiscing cursus varius lacinia vel amet. Diam nulla lobortis rutrum pellentesque fringilla nulla fames.</p>
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
