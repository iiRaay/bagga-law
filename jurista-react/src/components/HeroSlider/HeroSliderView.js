import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './HeroSliderStyle.scss'

class HeroSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            arrows: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        };
        return (
            <Slider className={this.props.className} {...settings}>
                {this.props.sliders.map((slider, i) => (
                    <div
                        key={i}
                        className={`slideWrapper ${slider.images}`}
                    >
                        <div
                            className="sliderContent">
                            <div className="container">
                                <div className="row">
                                    <div className="col col-lg-8">
                                        <div className="sliderTitle">
                                        <h2><span>{slider.title}</span></h2>

                                        </div>
                                        <div className="sliderSubTitle">
                                        <h2><span>{slider.subTitle}</span></h2>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        )
    }
}
export default HeroSlider