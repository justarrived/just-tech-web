import React from "react";

import Menu from "../menu";
import Footer from "../footer";
import logoIcon from "../../images/logo.png";

import './Default.css';

const Layout = ({ children }) => (
  <div id="outer-container" style={{ height: "100%" }}>
    <Menu siteTitle={{}} />

    <header>
      <div className="flex justify-center">
        <img src={logoIcon} className="h-8 m-4"/>
      </div>
    </header>

    <main className="layout-default">
        <div className="content">
            {children}
        </div>
    </main>

    <Footer />
  </div>
);

export default Layout;
