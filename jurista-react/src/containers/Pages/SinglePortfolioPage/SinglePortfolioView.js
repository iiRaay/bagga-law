import React, { Fragment } from 'react'

import MainHeader from '../../../components/MainHeader/MainHeader'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import CetagorySidebarView from '../../../components/CetagorySidebar/CatagorySideBarView'
import FooterArea from '../../../components/FooterArea'
import SearchSidebar from '../../../components/SearchSidebar'
import SingleContentArea from '../../../components/SingleContentArea/SingleContentAreaView'
import RecentPosts from '../../../components/RecentPosts'
import Portfolio from '../../../components/Portfolio'
// images
import breadcumb from '../../../images/breadcumb/1.jpg'
import single from '../../../images/practice/3.jpg'
// images
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'
import './SinglePortfolioStyle.scss'


const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Resent Case Studies', route: '/case-stadies' },
    { name: 'Case Stadies Details' }
]

const portfolioItem = [
    { images: portfolio1, title: 'General Service', subtitle: 'Corporate' },
    { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
    { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
]


const SinglePortfolioPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <MainHeader className="headerTop" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Case Stadies"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <div className="singleArea singlePortfolioArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <SingleContentArea
                                className="singleContentArea"
                                image={single}
                            />
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <SearchSidebar
                                    className="searchSidebarWrapper"
                                />
                                <CetagorySidebarView
                                    title="Category"
                                    className="cetagoryWrap"
                                />
                                <RecentPosts
                                    className="recentPostWrapper"
                                />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <Portfolio
                title="Our Resent Case Studies"
                subTitle="Here Our Best Work"
                fullWidth={true}
                portfolioItem={portfolioItem}
                className="portfolioArea portfolioAreaStyleFour"
            />

            <FooterArea />
        </Fragment>
    )
}
export default SinglePortfolioPage