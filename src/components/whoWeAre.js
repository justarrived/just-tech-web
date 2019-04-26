import React from "react";

import Andreas from "../images/profile-pictures/andreas_konig.jpg";
import Jonas from "../images/profile-pictures/jonas_axelsson.jpg";
import Lova from "../images/profile-pictures/lova_westlund.jpg";
import Pontus from "../images/profile-pictures/pontus_persson.jpg";

const imageStyle = { filter: "grayscale(100%)" };
const We = [
  {
    name: "Andreas König",
    image: Andreas,
    position: "Sälj & Partnerskap"
  },
  {
    name: "Lova Westlund",
    image: Lova,
    position: "Konsultansvarig"
  },
  {
    name: "Jonas Axelsson",
    image: Jonas,
    position: "Rekryteringsansvarig"
  },
  {
    name: "Pontus Persson",
    image: Pontus,
    position: "CTO"
  }
];

const WhoWeAre = () => (
  <div className="comp-section-container text-white">
    <h1 className="comp-section-header">Vilka vi är</h1>

    <div className="flex flex-wrap">
      {We.map(({ name, image, position }) => (
        <div className="w-100 sm:w-1/2 md:w-1/4 p-4">
          <img
            className="rounded-full"
            src={image}
            style={imageStyle}
            alt={name}
          />

          <h5>{name}</h5>
          <h6>{position}</h6>
        </div>
      ))}
    </div>
  </div>
);

export default WhoWeAre;
