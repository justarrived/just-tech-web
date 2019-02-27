import React from "react"

import Andreas from "../images/profile-pictures/andreas_konig.jpg";
import Jonas from "../images/profile-pictures/jonas_axelsson.jpg";
import Lova from "../images/profile-pictures/lova_westlund.jpg";
import Pontus from "../images/profile-pictures/pontus_persson.jpg";


const we = [{
  name: "Andreas König", position: "VD & Grundare", image: Andreas
}, {
  name: "Lova Westlund", position: "Chief Operations Officer", image: Lova
}, {
  name: "Jonas Axelsson", position: "Chief Experience Officer", image: Jonas
}, {
  name: "Pontus Persson", position: "Chief Technical Officer", image: Pontus
}]

const imageStyle = { filter: 'grayscale(100%)' };

const Person = ({ name, position, image }) => (
  <div className="flex-1 sm:flex-2 p-4 text-center">
    <img className="rounded-full" src={image} style={imageStyle} alt={name} />

    <h5>{name}</h5>
    <h6>{position}</h6>
  </div>
)


const WhoWeAre = () => (
  <div className="comp-section-container text-white block">
    <h1 className="comp-section-header">
      Vilka vi är
    </h1>
    <div className="flex flex-wrap">
      {we.map(person => <Person {...person} />)}
    </div>
  </div>
)

export default WhoWeAre
