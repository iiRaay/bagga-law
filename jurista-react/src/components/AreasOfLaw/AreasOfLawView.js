import React from "react";
import "./AreasOfLawStyle.scss";
import SectionTitle from "../Title";
import { NavLink } from "react-router-dom";

const areas = [
  {
    name: "Criminal Law",
    image: require("../../images/Attorneys-single/rohan.jpg"),
    icon: require("../../images/areas-of-law/Criminal_Law4.png"),
    link: "/practice-details/1",
  },
  {
    name: "Personal Injury",
    image: require("../../images/contact/Contact_us_pic.png"),
    icon: require("../../images/areas-of-law/Medical_Law.png"),
    link: "/practice-details/2",
  },
  {
    name: "Family Law",
    image: require("../../images/Attorneys-single/group.jpg"),
    icon: require("../../images/areas-of-law/Family_Law.png"),
    link: "/practice-details/3",
  },
  {
    name: "Immigration Law",
    image: require("../../images/Attorneys-single/DSC09430_2.jpg"),
    icon: require("../../images/areas-of-law/Immigration_Law.png"),
    link: "/practice-details/4",
  },
  {
    name: "Real Estate Law",
    image: require("../../images/contact/Contact_us_pic.png"),
    icon: require("../../images/areas-of-law/Realestate_Law.png"),
    link: "/practice-details/5",
  },
  {
    name: "Business Law",
    image: require("../../images/Attorneys-single/rob.jpg"),
    icon: require("../../images/areas-of-law/Business_Law.png"),
    link: "/practice-details/6",
  },
];

const AreasOfLawView = () => (
  <div className="areasOfLawSection">
    <div className="areasOfLawHeader">
        <SectionTitle title={"Areas of Law"} subTitle={"Our Expertise"}/>
    </div>
    <div className="areasOfLawGrid">
      {areas.map((area, idx) => (
        <NavLink to={area.link} key={idx} className="areaCardLink">
          <div className="areaCard">
            <div className="areaCardInner">
              <div className="areaVisual">
                <img
                  src={area.image}
                  alt={area.name}
                  className="areaImage"
                />
                <img
                  src={area.icon}
                  alt={`${area.name} icon`}
                  className="areaIcon"
                />
              </div>
              <div className="areaLabel">{area.name}</div>
              <div className="areaUnderline" />
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  </div>
);

export default AreasOfLawView;