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
                                        <h2><span>{slider.title}</span></h2>
                                        <h3><span>{slider.subTitle}</span></h3>
                                        <p>{slider.text}</p>
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