import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import MainHeader from '../../../components/MainHeader/MainHeader'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import SearchSidebar from '../../../components/SearchSidebar'
import CetagorySidebar from '../../../components/CetagorySidebar'
import RecentPosts from '../../../components/RecentPosts'
import BlogPost from '../../../components/BlogPost'
import Tags from '../../../components/Tags'
import Instagram from '../../../components/Instagram'
// images
import breadcumb from '../../../images/breadcumb/1.jpg'
import './style.scss'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'News' }
]

const BlogFullWidth = () => {
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
            <div className="blogPostArea blogFullWidth">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <BlogPost />
                        </div>
                    </div>
                </div>
            </div>
            <FooterArea />
        </Fragment>
    )
}
export default BlogFullWidth