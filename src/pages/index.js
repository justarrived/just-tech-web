import React from "react"
// import { Parallax } from "react-parallax"
import { ParallaxSection as Section } from "../components/utility/parallax"

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
    <Section back={<img src={landingImg} alt="tech" />} zIndex={0}>
      <div className="image-shadow text-center py-32 text-white h-full" >
        <img src={logoIcon} alt="JustTech Logo Icon" /><br />
        <img src={logoText} alt="JustTech Logo Text" className="m-4" />
        <p className="m-4">
          Matchar utrikesfödda topptalanger<br />
          inom IT med arbetsmarknaden
        </p>
        <div class="m-auto bg-white h-2 w-6"></div>
      </div>
    </Section>

    <Section zIndex={1} height="4.5em" style={{ marginTop: "-4.5em" }}>
      <PageBreaker />
    </Section>

    <Section zIndex={1}>
      <div className="comp-section-container">
        <h1 className="comp-section-header">
          Vi hjälper er<br />
          hitta topptalang och<br />
          diversifiera era team
        </h1>
      </div>
    </Section>

    <Section back={<img src={engineers} alt="Engineers" />} />

    <Section zIndex={1}>
      <div className="comp-section-container">
        <h1 className="comp-section-header">
          Våra konsulter<br />
          är experter inom<br />
          Backend, Frontend, och Mobile
        </h1>
      </div>
    </Section>

    <Section back={<img src={computer} alt="Laptop Computer" />} />

    <Section zIndex={1}>
      <div className="comp-section-container">
        <h1 className="comp-section-header">
          Vi arbetar med<br />
          tekniker och språk som<br />
          C#, Java, JavaScript, PHP, Python, Ruby<br />
          <small>React, React Native, Angular, Vue, Spring</small>
        </h1>
      </div>
    </Section>

    <Section back={<img src={code} alt="Code" />} />

    <Section zIndex={1}>
      <div className="comp-section-container">
        <h1 className="comp-section-header">
          Tryggt och säkert för alla!
        </h1>
      </div>
    </Section>

    <Section zIndex={1}>
      <ContactUsForm />
    </Section>

    <Section zIndex={1}>
      <WhoWeAre />
    </Section>

  </Layout >
)

export default IndexPage
