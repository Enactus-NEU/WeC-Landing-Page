//components
import React, { useEffect, useContext } from "react";
import NavBar from "./components/NavBar"
import TermOfUse from "./components/policy/TermOfUse"
import PrivacyPolicy from "./components/policy/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";

import { LoadingContext } from "react-router-loading";
import removeFadeOut from "./components/removeFadeOut";

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
//set state child image loaded
let imagePrivacyLoaded = false
let imageTOULoaded = false

function addLoadingAndMoveToTop(WithComp, className) {

  return function(props) {
    const loadingContext = useContext(LoadingContext);
    
    const onDone = () => {

      //remove first loading screen
      if ((className === "PrivacyPolicy" && imagePrivacyLoaded === true) || (className === "TOUPolicy" && imageTOULoaded === true)) {
        loadingContext.done()
        return;
      }
      const loadingScreen = document.getElementById("loading")
      
      if (loadingScreen) {
        const removeLoadingScreen = () => {

          removeFadeOut(loadingScreen, 500)
          loadingContext.done()
          if (className === "PrivacyPolicy") {
            imagePrivacyLoaded = true
          } else if (className === "TOUPolicy") {
            imageTOULoaded = true
          }
          document.removeEventListener("readystatechange", removeLoadingScreen)
        }

        if (document.readyState === "complete") {
          removeLoadingScreen()
        }

        document.addEventListener('readystatechange', () => {
          document.readyState === "complete" && removeLoadingScreen()
        });
        
        return;
      } else { 
        // callback when images are loaded

        const imgs = document.querySelectorAll(`.${className} img`)
        
        let count = imgs.length;
        
        function loadImg() {
          count--
          if (count === 0) {
            loadingContext.done()

            if (className === "PrivacyPolicy") {
              imagePrivacyLoaded = true
            } else if (className === "TOUPolicy") {
              imageTOULoaded = true
            }
          }
        }

        if (count !== 0) {
          imgs.forEach((img) => {

            img.addEventListener("load", () => {
              loadImg()
            })

          })
        } else {
          loadingContext.done()
          if (className === "PrivacyPolicy") {
            imagePrivacyLoaded = true
          } else if (className === "TOUPolicy") {
            imageTOULoaded = true
          }
          return;
        }
      }
    }

    useEffect(() => {
      //move to top
      window.scrollTo(0, 0)

      //remove loading screen
      onDone()
    // eslint-disable-next-line
    }, [])
    
    return <WithComp {...props} />
  }
}

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
