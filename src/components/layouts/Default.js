import React from "react";

import Menu from "../menu";
import Footer from "../footer";

const Layout = ({ children }) => (
  <div id="outer-container" style={{ height: "100%" }}>
    <Menu siteTitle={{}} />

    <header />

    <main id="page-wrap">{children}</main>

    <Footer />
  </div>
);

export default Layout;
