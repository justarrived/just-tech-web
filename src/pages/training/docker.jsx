import React, { Component } from "react";

import SEO from "../../components/seo";
import Content from '../../content/Content';
import Layout from "../../components/layouts/Default";

class DockerTrainingPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Docker Training" keywords={[`justtech`, `application`]} />

        <Content name="docker"/>
      </Layout>
    );
  }
}

export default DockerTrainingPage;
