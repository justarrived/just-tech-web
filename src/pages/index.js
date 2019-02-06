import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

import landingImg from "../images/landing.png"
import logo from "../images/logo.png"
import fullLogo from "../images/full-logo.png"
import ContactUsForm from "../components/contactusForm"
import PageBreaker from "../components/pageBreaker";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`justtech`, `application`]} />
    <div className="image-shadow text-center py-32" style={{
       backgroundImage: `url(${landingImg})`,
       backgroundRepeat: "no-repeat",
       backgroundSize: "cover",
      }}>
    <img src={logo} />
    <h1 className="text-white"> Just Tech </h1>
    <p className="text-white"> Matchar utrikesfödda topptalanger </p>
    <p className="text-white"> inom IT med arbetsmarknaden </p>
    <p className="text-white"> Start Q1 2019 </p>
    </div>
    <PageBreaker />
    <ContactUsForm />
  </Layout>
)

export default IndexPage
