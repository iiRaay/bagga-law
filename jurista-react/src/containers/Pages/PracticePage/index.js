import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import Service from '../../../components/Service'
import ServiceArea from '../../../components/ServiceArea'
import Testmonial from "../../../components/Testmonial";
import PricingTable from "../../../components/PricingTable";
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import services from '../../../constants/services'
// images
import breadcumb from '../../../images/slider/UpdatedBanner-6-13-2025.jpg'
import './style.scss'



const breadcumbMenu = [
    {name:'Home',route:'/'},
    {name:'Practice area'}
]

const PracticePage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb 
                className="breadcumbArea"
                title="Practice Area"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <Service className="serviceArea mt-0" />
            <ServiceArea
                className="ourServiceArea ourServiceAreaStyleThree bgFFF"
                title="How Can We Help You"
                subTitle="Area Of Practice"
                services={services}
            />
            <PricingTable 
                className="pricingTableArea"
                title="Pricing Table"
                subTitle="Our Pricing Plan"
            />
            <Testmonial
                className="testmonialArea pt100"
            />

            <FooterArea/>
        </Fragment>
    )
}
export default PracticePage