import React, { Fragment } from 'react'
import MainHeader from '../../../components/MainHeader/MainHeader'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import Form from '../../../components/Form'
// images
import breadcumb from '../../../images/slider/UpdatedBanner-6-13-2025.jpg'

import './ContactPageStyle.scss'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Contact', },
]

const ContactPageView = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <MainHeader className="headerTop" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Contact"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />

            <div className="contactusPageArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contactUsInfo">
                                <h3>Our Contacts</h3>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                </p>
                                <h4>Address</h4>
                                <span>3825 34 Street N.E<br/>Suite 203 <br/>Calgary, Alberta<br/>T1Y6Z8</span>
                                <h4>Phone</h4>
                                <span>Inquiries: 1-403-250-7327</span>
                                <span>24/7 Emergency Bail: 1-587-429-4983</span>
                                <h4>Email</h4>
                                <span>sample@gmail.com</span>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contactUSForm">
                                <h3>Quick Contact Form</h3>
                                <Form
                                    addressInfo={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterArea />
        </Fragment>
    )
}
export default ContactPageView