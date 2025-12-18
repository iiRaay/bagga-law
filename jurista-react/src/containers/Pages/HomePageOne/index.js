import React, { Fragment } from "react";
import MainHeader from "../../../components/MainHeader/MainHeader";
import HeroSlider from "../../../components/HeroSlider";
import Service from "../../../components/Service";
import About from "../../../components/About";
import ServiceArea from "../../../components/ServiceArea";
import Portfolio from "../../../components/Portfolio";
import Testmonial from "../../../components/Testmonial";
import ContactArea from "../../../components/ContactArea";
import TeamMember from "../../../components/TeamMember";
import FooterArea from "../../../components/FooterArea";
import Map from "../../../components/Map";
// images
import about from "../../../images/about/black_scale.jpg";
import signature from "../../../images/about/1.png";

// images
import portfolio1 from "../../../images/studies/1.jpg";
import portfolio2 from "../../../images/studies/2.jpg";
import portfolio3 from "../../../images/studies/3.jpg";
import portfolio4 from "../../../images/studies/4.jpg";
import portfolio5 from "../../../images/studies/5.jpg";
import ContactNotification from "../../../components/ContactNotification/ContactNotfication";
import services from "../../../constants/services";

const aboutText = [
  {
    text: "Bagga & Associates (formerly Bagga Law Office) was founded in 2000 by Mr. Ravinder (Rob) Bagga, a seasoned lawyer with over 25 years of legal experience. Since its founding, the firm has built a strong reputation for delivering dependable, strategic, and client-focused legal services.",
  },
  {
    text: "We are trial lawyers who love the courtroom. Advocacy is at the heart of what we do — whether it’s defending a criminal charge, navigating a high-stakes family dispute, or litigating a complex civil matter. We are confident, prepared, and relentless when it comes to protecting our clients’ rights in court.",
  },
  {
    text: "At the same time, we understand that not every case needs to go to trial. When the other side is reasonable, we are equally skilled at negotiating fair and practical resolutions that save our clients time, cost, and emotional stress — without compromising their legal position.",
  },
  {
    text: (
      <>
        As a boutique firm, we offer personalized service across a range of
        practice areas, including:
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "1.5rem",
            marginTop: "0.5rem",
          }}
        >
          <li>Criminal Defence</li>
          <li>Business Law</li>
          <li>Family Law</li>
          <li>Immigration Law</li>
          <li>Real Estate Law (Residential & Commercial)</li>
          <li>Personal Injury Law (including No-Fault Car Accidents)</li>
        </ul>
      </>
    ),
  },
  {
    text: "At Bagga & Associates, we combine deep legal knowledge with courtroom tenacity and a client-first mindset. We are committed to guiding you through every step of the legal process with integrity, professionalism, and unwavering dedication.",
  },
];

const heroSliders = [
  {
    images: "slideWrapperOne",
    title: "We Fight For Your Justice",
    subTitle: "As Like A Friend.",
    text: "The Most Talented Law Firm",
    button: "Contact us now",
  },
  // {
  //     images: 'slideWrapperTwo',
  //     title: 'We Fight For Your Justice',
  //     subTitle: 'As Like A Friend.',
  //     text: 'The Most Talented Law Firm',
  //     button: 'Contact us now'
  // },
];

const portfolioItem = [
  { images: portfolio1, title: "General Service", subtitle: "Corporate" },
  { images: portfolio2, title: "Personal Issue", subtitle: "General" },
  { images: portfolio3, title: "Business Accounting", subtitle: "Business" },
  { images: portfolio4, title: "Accounting issue", subtitle: "Criminal" },
  {
    images: portfolio5,
    title: "Business Accounting",
    subtitle: "Family Issue",
  },
];

const HomePageOne = () => {
  return (
    <Fragment>
      <ContactNotification />
      <header className="headerArea">
        <MainHeader className="headerTop" />
      </header>
      <HeroSlider sliders={heroSliders} className="heroSliderArea" />
      <Service className="serviceArea" />
      <About
        className="aboutArea"
        title="About Us"
        images={about}
        signature={signature}
        pragraphs={aboutText}
      />
      <ServiceArea
        className="ourServiceArea"
        title="How Can We Help You"
        subTitle="Area Of Practice"
        services={services}
      />
      <Portfolio
        className="portfolioArea"
        title="Recent Decisions"
        subTitle="Here Our Best Work"
        portfolioItem={portfolioItem}
      />
      <Testmonial className="testmonialArea" />
      <ContactArea className="contactArea" />
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
export default HomePageOne;
