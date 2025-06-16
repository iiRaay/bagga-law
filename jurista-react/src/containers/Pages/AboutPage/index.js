import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import Service from "../../../components/Service";
import About from "../../../components/About";
import ServiceArea from "../../../components/ServiceArea";
import Testmonial from "../../../components/Testmonial";
import TeamMember from "../../../components/TeamMember";
import CounterArea from "../../../components/CounterArea";
import FooterArea from "../../../components/FooterArea";
import Map from "../../../components/Map";
// images
import about from "../../../images/about/2.jpg";
import breadcumb from "../../../images/breadcumb/1.jpg";
import services from "../../../constants/services";
import "./style.scss";
import aboutText from "../../../constants/aboutUs";

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "About us" }];

const AboutPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb
        className="breadcumbArea"
        title="About Us"
        breadcumbMenu={breadcumbMenu}
        background={breadcumb}
      />
      <Service className="serviceArea mt-0" />
      <About
        className="aboutArea aboutAreaStyleTwo"
        title="About us"
        subTitle="Who we are"
        images={about}
        orderLast="order-last"
        videoId="XxVg_s8xAms"
        pragraphs={aboutText}
      />
      <ServiceArea
        className="ourServiceArea ourServiceAreaStyleTwo"
        title="How Can We Help You"
        subTitle="Area Of Practice"
        services={services}
      />
      <Testmonial className="testmonialArea pt100" />
      <CounterArea
        fullWidth={true}
        className="counterArea counterAreaStyleTwo"
      />
      <TeamMember
        title="Our Team"
        subTitle="Meet Our Experts"
        className="teamArea"
        slider={true}
      />
      <Map />
      <FooterArea />
    </Fragment>
  );
};
export default AboutPage;
