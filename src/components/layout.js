import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Menu from "./menu"
import Footer from "./footer"
import "./layout.css"
import "../fonts/just-arrived-style-guide-icons/css/icons.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div id="outer-container" style={{ height: '100%' }}>
        <Menu siteTitle={data.site.siteMetadata.title} />
        <main id="page-wrap">
          {children}
        </main>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
