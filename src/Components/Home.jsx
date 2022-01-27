import React from "react";
import "../Styles/Home.css";
import img from "../img/RickandMorty.png";

export function Home() {
  return (
    <div className="Home">
        <p className="welcome">
          Welcome to the <br></br>
          Rick and Morty page
          </p>
      <img className="imgHome" src={img} alt="" />
    </div>
  );
}
