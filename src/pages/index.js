import React from "react"
import { Parallax } from "react-parallax"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

import landingImg from "../images/landing.png"
import logo from "../images/logo.png"
import ContactUsForm from "../components/contactusForm"
import PageBreaker from "../components/pageBreaker";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`justtech`, `application`]} />
    <Parallax
            blur={1}
            bgImage={landingImg}
            bgImageAlt="tech"
            strength={400} 
        >
      <div className="image-shadow text-center py-32 text-white font-sans" >
        <img src={logo} />
        <h1 className="m-0 font-bold"> Just Tech </h1>
        <p className="m-0"> Matchar utrikesfödda topptalanger </p>
        <p className="m-0"> inom IT med arbetsmarknaden </p>
        <p className="m-0"> Start Q1 2019 </p>
      </div>
    {/* </div> */}
    </Parallax>
    <PageBreaker />
    <ContactUsForm />
  </Layout>
)

export default IndexPage
