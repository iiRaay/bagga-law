import React from 'react'
import './style.scss'
const HeaderTop = props => {
    return (
        <div className={props.className}>
            <div className="container">
                <div className="headerTopMainWrapper">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-12 col-lg-5">
                            <ul className="d-flex accountLoginArea">
                                <li><i className="fa fa-map-marker" aria-hidden="true"></i>3825 34 St NE Suite 203, Calgary, AB</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12 col-12 col-lg-5">
                            <ul className="headerContact">
                                <li><i className="fa fa-phone"></i> (403) 250-7327</li>
                                <li><i className="fa fa-clock-o"></i> 8:30AM - 4:30PM</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="btnStyle btnStyle2 text-right">
                                <a href="#">Free Consultation 24/7</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderTop