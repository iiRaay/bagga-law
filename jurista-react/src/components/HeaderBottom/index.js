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

    const canLiiBaggaURL = 'https://www.canlii.org/#search/jId=ab&sort=decisionDateDesc&text=Bagga&searchId=2025-06-08T16%3A46%3A26%3A238%2F82af6bb23dad42c4b97d1e5c69362502';
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
                                <li><NavLink exact to='/'>Home</NavLink></li>

                                <li><NavLink exact to='/attorneys'>Our Team</NavLink></li>

                                <li><NavLink exact to='/practice'>Expertise</NavLink>
                                    <ul className="subMenu">
                                        <li><NavLink exact to='/practice-details' state={{ id: 1}}>Criminal Law</NavLink></li>
                                        <li><NavLink exact to='/practice-details' state={{ id: 2}}>Personal Injury</NavLink></li>
                                        <li><NavLink exact to='/practice-details' state={{ id: 3}}>Family Law</NavLink></li>
                                        <li><NavLink exact to='/practice-details' state={{ id: 4}}>Immigration Law</NavLink></li>
                                        <li><NavLink exact to='/practice-details' state={{ id: 5}}>Real Estate Law</NavLink></li>
                                        <li><NavLink exact to='/practice-details' state={{ id: 6}}>Business Law</NavLink></li>
                                    </ul>
                                </li>

                                <li><NavLink exact to='/case-stadies'>Client Resources</NavLink>
                                    <ul className="subMenu">
                                        <li><a href={canLiiBaggaURL} target="_blank" rel="noopener noreferrer">Cases</a></li>
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