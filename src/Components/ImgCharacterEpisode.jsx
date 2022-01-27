import React from "react";
import { useEffect, useState } from "react";
import "../Styles/Episodes.css";

export function ImgCharacterEpisode({ characters}) {
  console.log();
  const [character, setCharacter] = useState([{}]);

  useEffect(async () => {
    characters.map(async (items) => {
      const res = await fetch(items);
      const characterJSON = await res.json();
      const { image } = characterJSON;
      setCharacter((prevState) => [...prevState, image]);
    });
  }, []);
  return (
    <div className="cardImage">
      {character.map((item, index) => (
         <img
          key={index}
          className="imgCharacter"
          src={item}
          width="70"
          alt=""
        />
      ))}
    </div>
  );
}
