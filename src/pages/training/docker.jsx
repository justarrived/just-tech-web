import React from "react";

import Layout from "../../components/layouts/Default";
import DockerTrainingContent from "../../content/learn-docker";
import SEO from "../../components/seo";

const DockerTrainingPage = () => (
  <Layout>
    <SEO title="Docker Training" keywords={[`justtech`, `application`]} />

    <div className="body">
      <DockerTrainingContent/>
    </div>
  </Layout>
);

export default DockerTrainingPage;
