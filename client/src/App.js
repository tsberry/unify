import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import tab from "./components/rankingTab";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/join" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/tab" component={tab} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
