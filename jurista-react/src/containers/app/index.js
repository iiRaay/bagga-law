import React, { Fragment, Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePageOne from "../Pages/HomePageOne";
import AboutPageView from "../Pages/AboutPage/AboutPageView";
import PracticePageView from "../Pages/PracticePage/PracticePageView";
import PracticeSinglePage from "../Pages/PracticeSinglePage/PracticeSinglePageView";
import PortfolioPage from "../Pages/PortfolioPage";
import SinglePortfolioPage from "../Pages/SinglePortfolioPage/SinglePortfolioView";
import TeamPage from "../Pages/TeamPage";
import SingleTeamPage from "../Pages/SingleTeamPage";
import ContactPageView from "../Pages/ContactPage/ContactPageView";
import BlogLeftPage from "../Pages/BlogLeftPage/BlogLeftView";
import BlogRightPage from "../Pages/BlogRightPage/BlogRightView";
import BlogFullWidth from "../Pages/BlogFullWidth";
import CasesPage from "../Pages/CasesPage/CasesPageView";
import FaqPageView from "../Pages/FaqPage/FaqPageView";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <ToastContainer autoClose={2500} position="top-center" />
          <Routes>
            <Route path="/" element={<HomePageOne />} />
            <Route path="about" element={<AboutPageView />} />
            <Route path="frequently-asked" element={<FaqPageView />} />
            <Route path="practice" element={<PracticePageView />} />
            <Route path="practice-details/:id" element={<PracticeSinglePage />}/>
            <Route path="case-studies" element={<PortfolioPage />} />
            <Route path="case-studies-details" element={<SinglePortfolioPage />}/> {/* typo? */}
            <Route path="attorneys" element={<TeamPage />} />
            <Route path="attorneys-single" element={<SingleTeamPage />} />
            <Route path="contact" element={<ContactPageView />} />
            <Route path="cases" element={<CasesPage />} />
            <Route path="blog-left" element={<BlogLeftPage />} />
            <Route path="blog-right" element={<BlogRightPage />} />
            <Route path="blog-fullwidth" element={<BlogFullWidth />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
