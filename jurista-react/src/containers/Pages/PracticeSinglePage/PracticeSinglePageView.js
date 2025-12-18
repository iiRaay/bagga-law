import React, { Fragment } from 'react'
import MainHeader from '../../../components/MainHeader/MainHeader'
import Breadcumb from '../../../components/Breadcumb'
import CetagorySidebarView from '../../../components/CetagorySidebar/CatagorySideBarView'
import FooterArea from '../../../components/FooterArea'
import BannerSidebar from '../../../components/BannerSidebar/BannerSidebarView'
import SingleContentArea from '../../../components/SingleContentArea/SingleContentAreaView'
import { useParams } from 'react-router-dom';

// images
import breadcumb from '../../../images/slider/UpdatedBanner-6-13-2025.jpg'
import banner from '../../../images/contact/Contact_us_pic.png'
import practiceOptions from '../../../constants/practices/practiceSinglePage'
import './PracticeSingleStyle.scss'


const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Practice', route: '/practice' },
    { name: 'Practice area details' }
]


const PracticeSinglePage = () => {
    const { id } = useParams();
    const practiceId = parseInt(id) || 1;
    
    return (
        <Fragment>
            <header className="headerArea">
                <MainHeader className="headerTop" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Expertise"
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
                                <CetagorySidebarView
                                    title="Category"
                                    className="cetagoryWrap"
                                />
                            </aside>
                        </div>
                        {practiceOptions.filter
                            (option => option.id === practiceId)
                            .map((option, index) => (
                                <div key={index} className="col-lg-8">
                                    <SingleContentArea
                                        className="singleContentArea"
                                        title={option.title}
                                        image={option.image}
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