import React from 'react'
// import avatarImg from '../../images/practice/4.jpg'
import avatarImg from '../../images/about/black_scale.jpg'

import './style.scss'

const SingleContentArea = ({ className, image, title, heading, body, avatartitle, avatarlistitem  }) => {
    return (
        <div className={className}>
            <div className="singleContentImg">
                {/* <img src={image} alt="" /> */}
            </div>
            <div className="singleContentWrap">
                <h3>{title}</h3>
                <h5>{heading}</h5>
                <p>{body}</p>

                <div className="avatarWra">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={avatarImg} alt="" />
                        </div>
                        <div className="col-md-8">
                            <h4>{avatartitle}</h4>
                            <ul>
                                {avatarlistitem.map(list => (
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