import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import CetagorySidebar from '../../../components/CetagorySidebar'
import FooterArea from '../../../components/FooterArea'
import BannerSidebar from '../../../components/BannerSidebar'
import SingleContentArea from '../../../components/SingleContentArea'
import { useLocation } from 'react-router-dom';

import criminalLaw from './Resources/CriminalLaw'
import familyLaw from './Resources/FamilyLaw'
import businessLaw from './Resources/BusinessLaw'
import immigrationLaw from './Resources/ImmigrationLaw'
import realEstateLaw from './Resources/RealEstateLaw'
import personalInjury from './Resources/PersonalInjury'

// images
import breadcumb from '../../../images/slider/UpdatedBanner-6-8-2025.jpeg'
import banner from '../../../images/about/black_scale.jpg'
import single from '../../../images/practice/3.jpg'

import './style.scss'


const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Practice', route: '/practice' },
    { name: 'Practice area details' }
]

const options = [
    { 
        id: 1, 
        title: criminalLaw.title, 
        heading: criminalLaw.heading, 
        body: criminalLaw.body, 
        avatartitle: criminalLaw.avatartitle,
        avatarlistitem: criminalLaw.avatarlistitem,
    },
    { 
        id: 2, 
        title: personalInjury.title, 
        heading: personalInjury.heading, 
        body: personalInjury.body, 
        avatartitle: personalInjury.avatartitle,
        avatarlistitem: personalInjury.avatarlistitem,
    },
    { 
        id: 3, 
        title: familyLaw.title, 
        heading: familyLaw.heading, 
        body: familyLaw.body, 
        avatartitle: familyLaw.avatartitle,
        avatarlistitem: familyLaw.avatarlistitem,
    },
    { 
        id: 5, 
        title: realEstateLaw.title, 
        heading: realEstateLaw.heading, 
        body: realEstateLaw.body, 
        avatartitle: realEstateLaw.avatartitle,
        avatarlistitem: realEstateLaw.avatarlistitem,
    },
    { 
        id: 4, 
        title: immigrationLaw.title, 
        heading: immigrationLaw.heading, 
        body: immigrationLaw.body, 
        avatartitle: immigrationLaw.avatartitle,
        avatarlistitem: immigrationLaw.avatarlistitem,
    },
    { 
        id: 6, 
        title: businessLaw.title, 
        heading: businessLaw.heading, 
        body: businessLaw.body, 
        avatartitle: businessLaw.avatartitle,
        avatarlistitem: businessLaw.avatarlistitem,
    },

]


const PracticeSinglePage = () => {
    const location = useLocation();
    const id = location.state.id;
    console.log(id);
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Practice Single Area"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <div className="singleArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <aside className=" pr25">
                                <BannerSidebar
                                    image={banner}
                                    className="bannerWrapper"
                                />
                                <CetagorySidebar
                                    title="Category"
                                    className="cetagoryWrap"
                                />
                            </aside>
                        </div>
                        {options.filter
                            (option => option.id === id)
                            .map(option => (
                                <div className="col-lg-8">
                                    <SingleContentArea
                                        className="singleContentArea"
                                        title={option.title}
                                        heading={option.heading}
                                        body={option.body}
                                        avatartitle={option.avatartitle}
                                        avatarlistitem={option.avatarlistitem}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <FooterArea />
        </Fragment>
    )
}
export default PracticeSinglePage