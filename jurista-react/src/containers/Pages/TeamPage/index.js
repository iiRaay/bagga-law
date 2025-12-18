import React, { Fragment } from 'react'

import MainHeader from '../../../components/MainHeader/MainHeader'
import Breadcumb from '../../../components/Breadcumb'
import TeamMember from '../../../components/TeamMember'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
// images
// import breadcumb from '../../../images/breadcumb/1.jpg'
import groupBanner from '../../../images/Attorneys-single/group.jpg'
import './style.scss'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Attorneys' }
]

const TeamPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <MainHeader className="headerTop" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Our Firm"
                breadcumbMenu={breadcumbMenu}
                background={groupBanner}
            />
            <TeamMember
                title="Attorneys"
                subTitle="Meet Our Experts"
                className="teamArea teamAreaStyleTwo"
                noGutters={true}
            />

            <FooterArea />
        </Fragment>
    )
}
export default TeamPage