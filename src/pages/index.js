import React from "react"
import { Parallax } from "react-parallax"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

import landingImg from "../images/landing.png"
import computer from "../images/blake-connally-373084-unsplash-1280.jpg"
import engineers from "../images/andrew-neel-237802-unsplash-1280.jpg"
import code from "../images/focused-female-engineer-working-at-laptop.jpg"
import logoIcon from "../images/logo.png"
import logoText from "../images/justtech-text-logo.svg"
import ContactUsForm from "../components/contactusForm"
import PageBreaker from "../components/pageBreaker";
import WhoWeAre from "../components/whoWeAre";

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
        <img src={logoText} alt="JustTech Logo Text" className="m-4"/>

        <p className="m-4">
          Matchar utrikesfödda topptalanger<br />
          inom IT med arbetsmarknaden
        </p>

        <div class="m-auto bg-white h-2 w-6"></div>
      </div>
    </Parallax>

    <div className="comp-section-container">
        <h1 className="comp-section-header">
            Vi hjälper er<br />
            hitta topptalang och<br />
            diversifiera era team
        </h1>
    </div>

    <Parallax
      bgImage={engineers}
      bgImageStyle={{ height: "600px" }}
      bgImageAlt="Engineers"
      strength={100}
    >
      <div className="image-shadow" style={{ height: "400px" }} />
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
      <div className="image-shadow" style={{ height: "400px" }} />
    </Parallax>

    <div className="comp-section-container">
        <h1 className="comp-section-header">
            Vi arbetar med<br />
            tekniker och språk som<br />
            C#, Java, JavaScript, PHP, Python, Ruby<br />
            <small>React, React Native, Angular, Vue, Spring</small>
        </h1>
    </div>

    <Parallax
      bgImage={code}
      bgImageStyle={{ height: "500px" }}
      bgImageAlt="Laptop computer"
      strength={100}
    >
      <div className="image-shadow" style={{ height: "400px" }} />
    </Parallax>

    <div className="comp-section-container">
        <h1 className="comp-section-header">
            Tryggt och säkert för alla!
        </h1>
    </div>

    <ContactUsForm />

    <WhoWeAre />
  </Layout>
)

export default IndexPage
