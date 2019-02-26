import React from "react"

import Andreas from "../images/profile-pictures/andreas_konig.jpg";
import Jonas from "../images/profile-pictures/jonas_axelsson.jpg";
import Lova from "../images/profile-pictures/lova_westlund.jpg";
import Pontus from "../images/profile-pictures/pontus_persson.jpg";


const imageStyle = {filter: 'grayscale(100%)'};


const WhoWeAre = () => (
  <div className="comp-section-container text-white">
    <h1 className="comp-section-header">
      Vilka vi är
    </h1>

    <div className="flex flex-wrap">
      <div className="flex-1 sm:flex-2 p-4">
        <img className="rounded-full" src={Andreas} style={imageStyle} alt="Andreas König" />

        <h5>Andreas König</h5>
        <h6>VD & Grundare</h6>
      </div>
      <div className="flex-1 sm:flex-2 p-4">
        <img className="rounded-full" src={Lova} style={imageStyle} alt="Lova Westlund" />

        <h5>Lova Westlund</h5>
        <h6>Chief Operations Officer</h6>
      </div>
      <div className="flex-1 sm:flex-2 p-4">
        <img className="rounded-full" src={Jonas} style={imageStyle} alt="Jonas Axelsson" />

        <h5>Jonas Axelsson</h5>
        <h6>Chief Experience Officer</h6>
      </div>
      <div className="flex-1 sm:flex-2 p-4">
        <img className="rounded-full" src={Pontus} style={imageStyle} alt="Pontus Persson" />

        <h5>Pontus Persson</h5>
        <h6>Chief Technical Officer</h6>
      </div>
    </div>
  </div>
)

export default WhoWeAre
