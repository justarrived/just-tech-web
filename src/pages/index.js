import React from "react"
import { Parallax } from "react-parallax"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

import landingImg from "../images/landing.png"
import computer from "../images/blake-connally-373084-unsplash-1280.jpg"
import engineers from "../images/alvaro-reyes-500044-unsplash-1280.jpg"
import logoIcon from "../images/logo.png"
import logoText from "../images/justtech-text-logo.svg"
import ContactUsForm from "../components/contactusForm"
import PageBreaker from "../components/pageBreaker";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`justtech`, `application`]} />
    <Parallax
      blur={1}
      style={{ background: "#000" }}
      bgImage={landingImg}
      bgImageStyle={{ opacity: ".2" }}
      bgImageAlt="tech"
      strength={400}
    >
      <div className="image-shadow text-center py-32 text-white" >
        <img src={logoIcon} alt="JustTech Logo Icon"/><br/>
        <img src={logoText} alt="JustTech Logo Text"/>

        <p className="m-4">
          Matchar utrikesfödda topptalanger<br />
          inom IT med arbetsmarknaden
        </p>

        <div class="m-auto bg-white h-2 w-6"></div>
      </div>
    </Parallax>
    <PageBreaker />

    <div className="comp-section-container">
        <h1 className="comp-section-header">
            Vi hjälper er<br />
            hitta topptalang och<br />
            diversifiera era team
        </h1>
    </div>

    <Parallax
      bgImage={engineers}
      bgImageStyle={{ height: "500px" }}
      bgImageAlt="Engineers"
      strength={100}
    >
      <div style={{ height: "400px" }} />
    </Parallax>

    <div className="comp-section-container">
        <h1 className="comp-section-header">
            Våra konsulter<br />
            är experter inom<br />
            Backend, Frontend, och Mobile
        </h1>
    </div>

    <Parallax
      bgImage={computer}
      bgImageStyle={{ height: "500px" }}
      bgImageAlt="Laptop computer"
      strength={100}
    >
      <div style={{ height: "400px" }} />
    </Parallax>

    <ContactUsForm />
  </Layout>
)

export default IndexPage
