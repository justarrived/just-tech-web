import React from "react";

import SEO from "../../components/seo";
import DockerTrainingContent from "../../content/learn-docker";
import Layout from "../../components/layouts/Default";

const DockerTrainingPage = () => (
  <Layout>
    <SEO title="Docker Training" keywords={[`justtech`, `application`]} />

    <div className="body">
      <DockerTrainingContent/>
    </div>
  </Layout>
);

export default DockerTrainingPage;
