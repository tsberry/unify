import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
//import Search from "./pages/Join";
//import Search from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        {/* <Route exact path="/join" component={Join} />
        <Route exact path="/login" component={Login} /> */}
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
