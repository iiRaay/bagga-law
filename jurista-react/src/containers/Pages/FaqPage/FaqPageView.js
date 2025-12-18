import React, { Fragment, useState, useEffect } from 'react'
import MainHeader from '../../../components/MainHeader/MainHeader'

import Breadcumb from '../../../components/Breadcumb'
import FooterArea from '../../../components/FooterArea'
import breadcumb from '../../../images/slider/UpdatedBanner-6-13-2025.jpg' 
import './FaqPageStyles.scss'
import { faq } from './FaqData' 
const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Pages', route: '/pages' },
    { name: 'FAQ', },
]


const FaqPageView = () => {
    const [faqData, setfaqData] = useState(null);
    const [expandedOpen, setExpandedOpen] = useState([]);

    useEffect(() => {
        if(faq.length == 0) return;
        setfaqData(faq);
    }, [])

    const toggleExpand = (index) => {
        setExpandedOpen(prev => (
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        ));
    }

    return(
        <Fragment>
            <header className="headerArea">
                <MainHeader className="headerTop" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Frequently Asked Questions"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />

            <div className='maincontainer'>
                <div className='banner'>
                    <h2>FAQ</h2>
                </div>
                <div className='container'>
                    {faqData && faqData.map((faqItem, itemIndex) => (
                        <div className='faq-category' key={itemIndex}>
                            <h3>{faqItem.category}</h3>
                                {faqItem.data.map((faq, questionIndex) => {
                                    const uniqueIndex = `${itemIndex}-${questionIndex}`;
                                    const isExpanded = expandedOpen.includes(uniqueIndex);
                                    return (
                                        <div key={questionIndex} className='faq-item'>
                                            <div 
                                                className='question'
                                                onClick={() => toggleExpand(uniqueIndex)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <h4>{faq.question}</h4>
                                                <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`} aria-hidden="true"></span>
                                            </div>
                                            {isExpanded && (
                                                <div className='answer'>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            <div className='space'></div>
                        </div>
                    ))}
                </div>
            </div>
            <FooterArea />
        </Fragment>
    )
}
export default FaqPageView