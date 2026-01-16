import React from "react";
import SectionTitle from '../Title'
import './OurPartnersStyle.scss'
import { NavLink } from "react-router-dom";

const OurPartnersView = () => {
    return (
        <div className="ourPartnersArea">
            <div className="ourPartnersTitle">
                <div className="row">
                    <div className="col-12">
                        <SectionTitle title="Our Partners" subTitle="" />
                    </div>
                </div>
            </div>
            <div className="partnerSection">
                <h2>{">INSERT PARTNER LOGO'S HERE<"}</h2>
            </div>
        </div>

    )
}
export default OurPartnersView