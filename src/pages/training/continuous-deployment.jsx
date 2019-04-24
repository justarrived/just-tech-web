import React, { Component } from "react";

import SEO from "../../components/seo";
import Content from '../../content/Content';
import Layout from "../../components/layouts/Default";

class CDTrainingPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Continous Deployment Training" keywords={[`justtech`, `application`]} />

        <Content name="continuous-deployment"/>
      </Layout>
    );
  }
}

export default CDTrainingPage;
