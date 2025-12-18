import React, { useState, Fragment } from 'react'
import './MainHeaderStyle.scss'
import logo from '../../images/logo/ba-logo-full-side.png'
import { NavLink, Link } from 'react-router-dom'

const MainHeader = props => {

    const [responsive, setResponsive] = useState(false)
    const [trigger, setTrigger] = useState(false)
    const responsiveHandler = () => {
        setResponsive(!responsive)
    }
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
           

          
            <div className="headerBottomArea headerBottomAreaStyelTwo">
                <div className="container">
                    <div className="headerBottomMainWrapper">
                        <div className="row">
                            <div className="col-lg-3 col-md-10 col-sm-6 col-8">
                                <div className="logo">
                                    <NavLink exact to="/">
                                        <img src={require('../../images/logo/ba-logo-full-side.png')} alt="" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className={"col-lg-8 responsiveWrapper"}>
                                <ul className="mainMenuWrap">
                                    <li><NavLink exact to="/">Home</NavLink></li>
                                    <li><NavLink exact to="/attorneys">Our Team</NavLink></li>
                                    <li>
                                        <NavLink exact to="/practice">General</NavLink>
                                        <ul className="subMenu">
                                            <li><NavLink exact to='/frequently-asked'>FAQ</NavLink></li>
                                            <li><NavLink exact to='/practice-details' state={{ id: 1}}>Criminal Law</NavLink></li>
                                            <li><NavLink exact to='/practice-details' state={{ id: 2}}>Personal Injury</NavLink></li>
                                            <li><NavLink exact to='/practice-details' state={{ id: 3}}>Family Law</NavLink></li>
                                            <li><NavLink exact to='/practice-details' state={{ id: 4}}>Immigration Law</NavLink></li>
                                            <li><NavLink exact to='/practice-details' state={{ id: 5}}>Real Estate Law</NavLink></li>
                                            <li><NavLink exact to='/practice-details' state={{ id: 6}}>Business Law</NavLink></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink exact to="/case-stadies">Client Resources</NavLink>
                                        <ul className="subMenu">
                                             <li><NavLink exact to='/cases'>Cases</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink exact to="/contact">Contact Us</NavLink></li>
                                </ul>
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-6 col-4">
                                <div className="searchMenuWrapper">
                                    <div className="searchWrap">
                                        <a href="https://instagram.com/baggalaw" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-instagram" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div onClick={responsiveHandler} className="responsiveTrigger">
                                        <span className="first"></span>
                                        <span className="second"></span>
                                        <span className="third"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainHeader