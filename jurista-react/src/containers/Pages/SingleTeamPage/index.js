import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import Portfolio from '../../../components/Portfolio'
import ContactArea from '../../../components/ContactArea'

// images
// import breadcumb from '../../../images/breadcumb/1.jpg'
import groupBanner from '../../../images/Attorneys-single/group.jpg'
import team from '../../../images/Attorneys-single/rohan.jpg'
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'

import './style.scss'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Attorneys', route: '/attorneys' },
    { name: 'Attorneys Details' }
]
const teamMembarInfo = [
    { level: 'Positon: ', text: 'Associate Lawyer' },
    { level: 'Practice Area: ', text: 'Criminal Defence law, Immigration law, Personal Injury law (No-Fault Motor Vehicle Accidents)' },
    { level: 'Experience: ', text: '1 Year' },
    { level: 'Address: ', text: '3825 34 St NE Suite 203, Calgary, AB T1Y 6Z8' },
    { level: 'Non-Urgent Phone: ', text: '403-250-7327' },
    { level: 'Email: ', text: 'manpreet@baggalaw.ca' },
    { level: 'Urgent Phone: ', text: ' 587-429-4983' },
]
const teamContents = [
    'Bachelor of Laws with Honors, Federation of Law Societies of Canada Accreditation',
    'Ouellette Hoare Claxton, Student-At-Law Articles',
    'Called to the Alberta Bar at 24 years old'
]

const portfolioItem = [
    { images: portfolio1, title: 'General Service', subtitle: 'Corporate' },
    { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
    { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
]

const SingleTeamPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Our Attorneys"
                breadcumbMenu={breadcumbMenu}
                background={groupBanner}
            />
            <div className='singleTeamArea'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-12">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="singleTeamImgWrap">
                                        <div className="singleTeamImg">
                                            <img src={team} alt="" />
                                        </div>
                                        <h4>Rohan Bagga</h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="singleTeamContent">
                                        <h4>Important Information</h4>
                                        <ul className="teamMembarInfo">
                                            {teamMembarInfo.map((teamInfo, i) => (
                                                <li key={i}>
                                                    <span>{teamInfo.level}</span>
                                                    {teamInfo.text}
                                                </li>
                                            ))}
                                        </ul>
                                        <ul className="socialShare">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="singleTeamInfo">
                                        <h3>Personal Experience</h3>
                                        <p>Mr. Bagga's personal experience encompasses a diverse array of professional roles, each contributing significantly to his growth and expertise within the legal field. From his formative years as a summer law student, volunteering alongside seasoned practitioners at Bagga Law Office and within the esteemed 'Trial Lawyer' association, Mr. Bagga gained invaluable insights into the intricacies of criminal and civil litigation. Throughout his tenure, he had the privilege of collaborating with esteemed legal professionals, including Mr. John Hooker, Mr. Peter Hoare, and his father, Mr. Rob Bagga, among others, fostering a deep understanding of various legal domains.</p>
                                        <p>Transitioning seamlessly into his articles as a Student-At-Law under the tutelage of Mr. Peter Hoare at Ouellette Hoare Claxton, Mr. Bagga delved into complex legal scenarios, honing his skills across diverse practice areas. His hands-on involvement in cases involving organized crime, Murder, Sexual Assault, and Domestic Assault provided him with invaluable courtroom experience and a nuanced understanding of legal proceedings.</p>
                                        <p>Upon attaining the status of Barrister and Solicitor in 2022, Mr. Bagga further solidified his professional standing by joining Bagga and Associates as an associate lawyer, marking a significant milestone in his legal career. Throughout his journey, Mr. Bagga's unwavering commitment to advocating for his clients' interests has remained steadfast, earning him a reputation for excellence and integrity within the legal community.</p>
                                        <h5>Education</h5>
                                        <ul>
                                            {teamContents.map(teamContent => (
                                                <li key={teamContent}>{teamContent}</li>
                                            ))}
                                        </ul>
                                        <h5>Language</h5>
                                        <span>French(fluent), English (fluent), Greek , chinese.</span>
                                        <h5> Biography</h5>
                                        <p>Mr. Rohan Bagga, commonly referred to as Mr. Bagga Jr., was called to the Alberta Bar at 24 and has since been practicing in the areas of Criminal Defence law, Immigration law, and Personal Injury law (No-Fault Motor Vehicle Accidents).</p>
                                        <p>Born in Calgary, Alberta, a graduate of the class of 2015 from Bert Church High School in Airdrie, Alberta, Mr. Bagga left for the United Kingdom at 18 to pursue his dream of becoming a lawyer and playing soccer overseas.</p>
                                        <p>Throughout law school, Mr. Bagga found his passion in Criminal Law and Immigration Law. When back in Canada, during summers through his educational journey, Mr. Bagga volunteered as a summer law student with his father’s law firm, at the time Bagga Law Office, and alongside “Trial Lawyer”, which was an association of independent lawyers practicing exclusively in criminal and civil litigation.</p>
                                        <p>As a summer student, Mr. Bagga has the privilege of attending Court and working alongside veteran defence lawyers such as Mr. John Hooker, Mr. Peter Hoare, the late Mr. Ryan Claxton, the late Mr. Clinton Ford, and of course his father Mr. Rob Bagga.</p>
                                        <p>As a summer student, Mr. Bagga Jr. got significant exposure to Criminal Law and had the experience of working alongside some of Calgary’s “veteran defence lawyers” in high-profile cases which included charges such as; Murder, Sexual Assault, Organized Crime (Drugs and Guns), Financial Crimes and also Domestic Crimes enhanced his legal education drastically.</p>
                                        <p>Upon returning to Canada, Mr. Bagga successfully had his Bachelor of Laws with Honors accredited by the Federation of Law Societies of Canada and within one year completed all 7 accreditation exams assigned.</p>
                                        <p>Upon completing the accreditation and law degree transfer process, Mr. Bagga started his articles as a Student-At-Law under the supervision and guidance of Mr. Peter Hoare at Ouellette Hoare Claxton. Through his articles, Mr. Bagga got exposure to and worked on numerous cases involving organized crime (drugs and guns). Mr. Bagga also actively participated in Murder, Manslaughter, Sexual Assault, and Domestic Assault cases. Through his articles, Mr. Bagga not only worked with veteran defence lawyer Mr. Peter Hoare but also worked alongside veteran defence lawyer, Mr. Andre Ouellette.</p>
                                        <p>Upon completing his Articles, and passing the Alberta Bar, Mr. Bagga became a Barrister and Solicitor in 2022 and joined his father’s law firm Bagga and Associates as an associate lawyer.</p>
                                        <p>Young and motivated to fiercely advocate for his clients’ interest, since becoming a lawyer Mr. Bagga Jr. has successfully defended his clients (i.e. charges being withdrawn and no criminal record) when charged under the Criminal Code of Canada including; Sexual Assault, Assault with a Weapon, Fraud, Domestic Charges, Uttering Threats, Providing false statements to a police officer, and DUI (Driving under the influence of Alcohol and Drugs).</p>
                                        <p>Mr. Bagga has also secured Bail Release for numerous clients facing charges of Gun Crime, Domestic Crime (Assault and Uttering Threats), and Assault with a weapon.</p>
                                        <p>Mr. Bagga also practices Immigration Law and has helped numerous clients obtain Permanent and Temporary Residency in Canada through various programs available under Immigration, Refugees and Citizenship Canada’s policies. (Spousal PR, Parental PR, Refugee cases, Federal Skill Category, Provincial Nominee Programs, Investment Streams, Super Visa, Visitor Visa, Work Permit, Study Permit, Temporary Residency Permit and LMIA). Mr. Bagga Jr. also notably successfully challenged the rejection of his client’s work permit application by Immigration Canada by way of a Judicial Review Application in the Federal Court of Canada resulting in his client ultimately obtaining her desired work status in Canada.</p>
                                        <p>Last, Mr. Bagga also takes on No-Fault Car Accident cases, on a contingency basis, dedicated to ensuring his clients get the medical treatment they are entitled to from their insurance to recover from their injuries and monetary compensation from the at-fault driver for pain and suffering and other implications as a result of the car accident.</p>
                                        <p>Mr. Bagga does not accept Legal Aid Cases, however, will provide a flexible payment plan upon being retained.</p>
                                        <p>Mr. Bagga can be reached by appointment. Please contact his assistant Ms. Manpreet Kaur at <a href="mailto:manpreet@baggalaw.ca">manpreet@baggalaw.ca</a> or <a href="tel:403-250-7327">403-250-7327</a>. FOR URGENT CRIMINAL DEFENCE INQUIRIES ONLY PLEASE CALL <a href="tel:587-429-4983">587-429-4983</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Portfolio
                title="Participated Case"
                subTitle="Here Our Best Work"
                fullWidth={true}
                portfolioItem={portfolioItem}
                className="portfolioArea portfolioAreaStyleFour"
            /> */}
            <ContactArea
                className="contactArea"
            />

            <FooterArea />
        </Fragment>
    )
}
export default SingleTeamPage