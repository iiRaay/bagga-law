import React, { Fragment, useState, useEffect } from 'react'
import MainHeader from '../../../components/MainHeader/MainHeader'

import Breadcumb from '../../../components/Breadcumb'
import FooterArea from '../../../components/FooterArea'
import breadcumb from '../../../images/slider/UpdatedBanner-6-13-2025.jpg'
import placeholderImage1 from '../../../images/slider/UpdatedBanner-6-8-2025.jpeg'
import placeholderImage2 from '../../../images/logo/ba-logo-cropped.png'      
import './FAQPageStyles.scss'
import { FAQData } from './FAQData' 
const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Cases', },
]

//Todo: Probably move this to a service/controller before implementing
const apiEndpoint = "https://api.canlii.org/en/v1/cases/";
const languageOption = "en";


const FaqPageView = () => {
    const [faqData, setfaqData] = useState(null);

    useEffect(() => {
        if(FAQData.length == 0) return;
        setfaqData(FAQData);
    }, [])

    return(
        <Fragment>
            <header className="headerArea">
                <MainHeader className="headerTop" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Cases"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />

            <div className='container'>
                <div className='banner'>
                    <h2>FAQ</h2>
                </div>
                <div className='content'>
                    {faqData && faqData.map((faqItem, itemIndex) => (
                        <div>
                            <h3>{faqItem.category}</h3>
                                {faqItem.data.map((faq, questionIndex) => (
                                    <div key={questionIndex}> {/* Future refernce, will use the question index to determine which one to add to expanded */}
                                        <div className='question'>
                                            <h4>{faq.question}</h4>
                                        </div>
                                        <div className='answer'>
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
            </div>
            <FooterArea />
        </Fragment>
    )
}
export default FaqPageView