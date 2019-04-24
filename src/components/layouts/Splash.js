import React from "react";
import PropTypes from "prop-types";

import Menu from "../menu";
import Footer from "../footer";
import "./Splash.css";

const Layout = ({ children }) => (
  <div>
    <Menu/>
    <main id="page-wrap">
      {children}
    </main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
