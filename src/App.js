
//components
import NavBar from "./components/NavBar"
import TermOfUse from "./components/policy/TermOfUse"
import PrivacyPolicy from "./components/policy/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";

//css
import "./components/styles/App.css"
import "./components/styles/Policy.css"

//packages
import {
  Switch,
  Route
} from "react-router-dom";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div className="App">
        <ScrollToTop />

        <Switch>
          <Route exact path="/">
              <Helmet>
                  <title>WeCollect</title>
              </Helmet>
              <NavBar />
            <TermOfUse />
          </Route>
        </Switch>

        <Switch>
          <Route path="/about">
              <Helmet>
                  <title>Giới thiệu - WeCollect</title>
              </Helmet>
              <NavBar site="about"/>
            <TermOfUse />
          </Route>
        </Switch>

        <Switch>
          <Route path="/term-of-use">
              <Helmet>
                  <title>Điều khoản sử dụng - WeCollect</title>
              </Helmet>
              <NavBar site="termOfUse" />
            <TermOfUse />
          </Route>
        </Switch>

        <Switch>
          <Route path="/privacy-policy">
              <Helmet>
                  <title>Chính sách bảo mật - WeCollect</title>
              </Helmet>
              <NavBar site="privacyPolicy"/>
            <PrivacyPolicy />
          </Route>
        </Switch>

    </div>
  );
}

export default App;
