//components
import React from "react";
import NavBar from "./components/functions/NavBar"
import TermOfUse from "./components/policy/TermOfUse"
import PrivacyPolicy from "./components/policy/PrivacyPolicy";
import ScrollToTop from "./components/functions/ScrollToTop";


//css
import "./components/styles/App.css"
import "./components/styles/Policy.css"

//packages
import {
  Switch,
  Route,
  topbar
} from "react-router-loading";
import { Helmet } from "react-helmet-async";

//addLoadingAndMoveToTop
import addLoadingAndMoveToTop from "./components/functions/addLoadingAndMoveToTop";

function App() {
  //define component with LoadingAndMoveToTop function
  const LMTermOfUse = addLoadingAndMoveToTop(TermOfUse, "TOUPolicy")
  const LMPrivacyPolicy =addLoadingAndMoveToTop(PrivacyPolicy, "PrivacyPolicy")
  
  return (
    <div className="App">
        <ScrollToTop />

        <Switch>
          <Route exact path="/" loading>
              <Helmet>
                  <title>WeCollect</title>
              </Helmet>
              <NavBar />
            <LMTermOfUse />
          </Route>

          <Route exact path="/about" loading>
              <Helmet>
                  <title>Giới thiệu - WeCollect</title>
              </Helmet>
              <NavBar site="about"/>
            <LMTermOfUse />
          </Route>

          <Route exact path="/term-of-use" loading>
              <Helmet>
                  <title>Điều khoản sử dụng - WeCollect</title>
              </Helmet>
              <NavBar site="termOfUse" />
            <LMTermOfUse />
          </Route>

          <Route exact path="/privacy-policy" loading>
              <Helmet>
                  <title>Chính sách bảo mật - WeCollect</title>
              </Helmet>
              <NavBar site="privacyPolicy"/>
            <LMPrivacyPolicy />
          </Route>
        </Switch>

    </div>
  );
}

topbar.config({
  autoRun: true,
  barThickness: 3,
  barColors: {
    "0": "rgba(1, 170, 110, .7)"
  },
  shadowBlur: 0
});

export default App;
