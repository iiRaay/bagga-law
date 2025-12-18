import React, { Fragment, Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePageOne from "../Pages/HomePageOne";
import AboutPageView from "../Pages/AboutPage/AboutPageView";
import PracticePageView from "../Pages/PracticePage/PracticePageView";
import PracticeSinglePage from "../Pages/PracticeSinglePage/PracticeSinglePageView";
import PortfolioPage from "../Pages/PortfolioPage";
import SinglePortfolioPage from "../Pages/SinglePortfolioPage";
import TeamPage from "../Pages/TeamPage";
import SingleTeamPage from "../Pages/SingleTeamPage";
import ContactPageView from "../Pages/ContactPage/ContactPageView";
import BlogLeftPage from "../Pages/BlogLeftPage";
import BlogRightPage from "../Pages/BlogRightPage";
import BlogFullWidth from "../Pages/BlogFullWidth";
import CasesPage from "../Pages/CasesPage/CasesPageView";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <ToastContainer autoClose={2500} position="top-center" />
          <Routes>
            <Route exact path="/" element={<HomePageOne />} />
            <Route exact path="about" element={<AboutPageView />} />
            <Route exact path="practice" element={<PracticePageView />} />
            <Route exact path="practice-details" element={<PracticeSinglePage />}/>
            <Route exact path="case-stadies" element={<PortfolioPage />} />
            <Route exact path="case-stadies-details" element={<SinglePortfolioPage />}/> {/* typo? */}
            <Route exact path="attorneys" element={<TeamPage />} />
            <Route exact path="attorneys-single" element={<SingleTeamPage />} />
            <Route exact path="contact" element={<ContactPageView />} />
            <Route exact path="cases" element={<CasesPage />} />
            <Route exact path="blog-left" element={<BlogLeftPage />} />
            <Route exact path="blog-right" element={<BlogRightPage />} />
            <Route exact path="blog-fullwidth" element={<BlogFullWidth />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
