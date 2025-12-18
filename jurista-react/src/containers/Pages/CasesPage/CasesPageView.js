import React, { Fragment, useState, useEffect } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import Form from '../../../components/Form'
// images
import breadcumb from '../../../images/slider/UpdatedBanner-6-13-2025.jpg'
import './CasesPageStyles.scss'
import { caseDataByYear } from './StaticCaseData'
const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Contact', },
]

const apiEndpoint = "https://api.canlii.org/en/v1/cases/";


const languageOption = "en";


const CasesPage = () => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
    const [listOfYears, setListOfYears] = useState(null);
    const [caseData, setCaseData] = useState(null);

    useEffect(() => {

        if(caseDataByYear.length == 0) return;
        const years = Object.keys(caseDataByYear).map(year => parseInt(year)).sort((a, b) => b - a);
        setListOfYears(years);
        setSelectedYear(years[0]);
        setCaseData(caseDataByYear[years[0]]);
        for(var i=0; i< years.length; i++){
            console.log(i);
            console.log("Year: ", years[i]);
        }
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
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Cases"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />

            <div className="casesPageContainer">
                <div className="grid-container">
                    <div className='col-caseData'>
                        <h2>Cases For {selectedYear}</h2>
                       
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
export default CasesPage