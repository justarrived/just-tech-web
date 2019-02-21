import React from "react"
import { Parallax, Background } from "react-parallax"

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
import Upsell from "../components/upsell";
import Tech from "../components/tech";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`justtech`, `application`]} />
    <Parallax
      blur={1}
      style={{background: "#000"}}
      bgImage={landingImg}
      bgImageStyle={{opacity: ".2"}}
      bgImageAlt="tech"
      strength={400}
    >
      <div className="image-shadow text-center py-32 text-white" >
        <img src={logoIcon} alt="JustTech Logo Icon"/><br/>
        <img src={logoText} alt="JustTech Logo Text"/>

        <p className="m-4">
          Matchar utrikesfödda topptalanger<br/>
          inom IT med arbetsmarknaden
        </p>

        <div class="m-auto bg-white h-2 w-6"></div>
      </div>
    </Parallax>
    <PageBreaker />

    <Upsell/>

    <Parallax
      bgImage={engineers}
      bgImageStyle={{height: "500px"}}
      bgImageAlt="Engineers"
      strength={100}
    >
      <div style={{height: "400px"}}/>
    </Parallax>

    <Tech/>

    <Parallax
      bgImage={computer}
      bgImageStyle={{height: "500px"}}
      bgImageAlt="Laptop computer"
      strength={100}
    >
      <div style={{height: "400px"}}/>
    </Parallax>

    <ContactUsForm />
  </Layout>
)

export default IndexPage
