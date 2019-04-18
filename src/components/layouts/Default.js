import React from "react";

import Menu from "../menu";
import Footer from "../footer";

import './Default.css';

const Layout = ({ children }) => (
  <div id="outer-container" style={{ height: "100%" }}>
    <Menu siteTitle={{}} />

    <header>Hej</header>

    <main className="layout-default">
        <div className="content">
            {children}
        </div>
    </main>

    <Footer />
  </div>
);

export default Layout;
