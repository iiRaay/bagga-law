import React from 'react'
// import avatarImg from '../../images/practice/4.jpg'
import avatarImg from '../../images/about/black_scale.jpg'

import './SingleContentAreaStyle.scss'
import { NavLink } from 'react-router-dom'

const SingleContentArea = ({ className, image, title, heading, body, avatartitle, avatarlistitem  }) => {
    return (
        <div className={className}>
            <div className='banner'>
                    <h2>{title}</h2>
            </div>
            <div className="singleContentWrap">
                <div className='singleContentHeading'>
                    {heading}
                </div>
                <div className='singleContentBody'>
                    {body}
                </div>

                <p>This is a condensed list we curated for this page, for details and other Frequently Asked Questions visit our <NavLink to='/frequently-asked'>FAQ page</NavLink></p>
                <div className="avatarWrap">
                    <div className="row">
                        <div className="col-md-4">
                            <img className='' src={image} alt="Image unavailable" />
                        </div>
                        <div className="col-md-8">
                            <h4>{avatartitle}</h4>
                            <ul>
                                {avatarlistitem.map((list, index) => (
                                    <li key={list}>{list}</li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default SingleContentArea