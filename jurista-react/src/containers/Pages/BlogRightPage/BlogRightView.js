import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import MainHeader from '../../../components/MainHeader/MainHeader'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import SearchSidebar from '../../../components/SearchSidebar'
import CetagorySidebarView from '../../../components/CetagorySidebar/CatagorySideBarView'
import RecentPosts from '../../../components/RecentPosts'
import BlogPost from '../../../components/BlogPost'
import Tags from '../../../components/Tags'
import Instagram from '../../../components/Instagram'
// images
import breadcumb from '../../../images/breadcumb/1.jpg'
import './BlogRightStyle.scss'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'News' }
]

const BlogRightPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <MainHeader className="headerTop" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="News"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <div className="blogPostArea blogPostLeftArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <BlogPost />
                        </div>
                        <div className="col-lg-4">
                            <aside>
                                <SearchSidebar className="searchSidebarWrapper" />
                                <CetagorySidebarView
                                    title="Cetagory"
                                    className="cetagoryWrap" />
                                <RecentPosts className="recentPostWrapper" />
                                <Tags />
                                <Instagram />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <FooterArea />
        </Fragment>
    )
}
export default BlogRightPage