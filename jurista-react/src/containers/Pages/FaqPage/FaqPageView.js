import React, { Fragment, useState, useEffect } from 'react'

import Breadcumb from '../../../components/Breadcumb'
import FooterArea from '../../../components/FooterArea'
import breadcumb from '../../../images/slider/UpdatedBanner-6-13-2025.jpg'
import placeholderImage1 from '../../../images/slider/UpdatedBanner-6-8-2025.jpeg'
import placeholderImage2 from '../../../images/logo/ba-logo-cropped.png'      
import './CasesPageStyles.scss'
import { caseDataByYear } from './StaticCaseData'
const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Cases', },
]

//Todo: Probably move this to a service/controller before implementing
const apiEndpoint = "https://api.canlii.org/en/v1/cases/";
const languageOption = "en";


const FAQPage = () => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
    const [listOfYears, setListOfYears] = useState(null);
    const [caseData, setCaseData] = useState(null);

    useEffect(() => {
        //Todo: Talk to gio about how we want this to be ordered
        // Can - Grab as much data as we can? (API limitations?)
        // Can - Static data for now and forget about API
        // Can - Grab data one year at a time (probably slower loading? Maybe not)
        // Can - Grab data for all years at once (probably faster loading? Maybe not - can set up to do last 5 years)
        if(caseDataByYear.length == 0) return;
        const years = Object.keys(caseDataByYear).map(year => parseInt(year)).sort((a, b) => b - a);
        setListOfYears(years);
        setSelectedYear(years[0]);
        setCaseData(caseDataByYear[years[0]]);
    }, [])


    useEffect(() => {
    
        // When selected year is updated, update the case data accordingly
        if(selectedYear && caseDataByYear[selectedYear]){
            setCaseData(caseDataByYear[selectedYear]);
        } else {
            setCaseData([]);
        }


    }, [selectedYear])

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

            <div className="casesPageContainer">
                <div className="casesPageBannerImages">
                    <img src={placeholderImage1} alt="Cases Banner" />
                    <img src={placeholderImage2} alt="Cases Banner" />
                    <img src={breadcumb} alt="Cases Banner" />
                </div>
                <div className="casesPageBanner">
                    <h2>Cases For {selectedYear}</h2>
                </div>
                <div className="grid-container">
                    <div className='col-caseData'>
                        {caseData && caseData.map((caseItem, index) => (
                            <div className="caseDataItem" key={index}>
                                <a target="_blank" className="caseDataTitle" href={caseItem.url}>
                                    <h3>{caseItem.title}</h3>
                                </a>
                                <p className="caseDataSummary">{caseItem.content.summary}</p>
                                <a target="_blank" className='caseDataLink' href={caseItem.url}>Read More ...</a>
                            </div>
                        ))}
                    </div>
                    <div className='col-yearList'>
                        <ul>
                            <li className='yearItem'><text color='#'>Year</text></li>
                            {listOfYears && listOfYears.map(year => (
                                <li key={year} className={selectedYear === year ? 'active' : ''}>
                                    <a href='#' target="_blank" onClick={e => { e.preventDefault(); setSelectedYear(year); }}>
                                        {year}
                                    </a>
                                </li>
                            ))}
                        </ul>   
                    </div>
                </div>
            </div>
            <FooterArea />
        </Fragment>
    )
}
export default FAQPage