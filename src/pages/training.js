import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layouts/Default";
import SEO from "../components/seo";

const TrainingPage = () => (
  <Layout>
    <SEO title="Training" keywords={[`justtech`, `application`]} />

    <div className="body">
      <h1>Training</h1>

      <p>Welcome to the training section of JustTech.</p>

      <ul>
        <li>
          <Link to="/training/docker">Docker</Link>
        </li>
      </ul>
    </div>
  </Layout>
);

export default TrainingPage;
