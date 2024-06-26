import React, { useState, Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../images/logo/ba-logo-full-side.png'
import './style.scss'

const HeaderBottom = props => {
    // const [search, setSearch] = useState()
    const [responsive, setResponsive] = useState(false)
    const [trigger, setTrigger] = useState(false)
    const submitHandler = e => {
        e.preventDefault()
    }
    const clickHandler = () => {
        setTrigger(!trigger)
    }
    const responsiveHandler = () => {
        setResponsive(!responsive)
    }
    return (
        <div className={props.className}>
            <div className="container">
                <div className="headerBottomMainWrapper">
                    <div className="row">
                        <div className="col-lg-3 col-md-10 col-sm-6 col-8">
                            <div className="logo">
                                <NavLink to="/">
                                    <img src={logo} alt="" />
                                </NavLink>
                            </div>
                        </div>
                        <div className={responsive ? "col-lg-8 responsiveWrapper active" : "col-lg-8 responsiveWrapper"}>
                            <ul className="mainMenuWrap">
                                <li><NavLink exact to='/'>Home</NavLink>
                                    <ul className="subMenu">
                                        <li><NavLink exact to='/'>Home One</NavLink></li>
                                        <li><NavLink exact to='/home-two'>Home Two</NavLink></li>
                                        <li><NavLink exact to='/home-three'>Home Three</NavLink></li>
                                    </ul>
                                </li>
                              <li><NavLink exact to='/attorneys'>Our Team</NavLink>
                                    <ul className="subMenu">
                                        <li><NavLink exact to='/attorneys'>Attorneys</NavLink></li>
                                        <li><NavLink exact to='/attorneys-single'>Attorneys single</NavLink></li>
                                    </ul>
                                </li>                                <li><NavLink exact to='/practice'>Expertise</NavLink>
                                    <ul className="subMenu">
                                        <li><NavLink exact to='/practice'>Practice areas</NavLink></li>
                                        <li><NavLink exact to='/practice-details'>Practice areas single</NavLink></li>
                                    </ul>
                                </li>

                                <li><NavLink exact to='/case-stadies'>Client Resources</NavLink>
                                    <ul className="subMenu">
                                        <li><NavLink exact to='/case-stadies'>Cases</NavLink></li>
                                        <li><NavLink exact to='/case-stadies-details'>Case single</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink exact to='/contact'>Contact Us</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-6 col-4">
                            <div className="searchMenuWrapper">
                                <div className="searchWrap">
                                <a href="https://instagram.com/baggalaw" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                                    {/* <i onClick={clickHandler} className="fa fa-search"></i>
                                    <div className={trigger ? 'searchform active' : 'searchform'}>
                                        <form onSubmit={submitHandler}>
                                            <input
                                                placeholder="search here"
                                                value={search}
                                                type="text"
                                                onChange={event => setSearch(event.target.value)}
                                            />
                                            <button><i className="fa fa-search"></i></button>
                                        </form>
                                    </div> */}
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
    )
}
export default HeaderBottom