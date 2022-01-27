import React from "react";
import "../Styles/Character.css";
import { useState, useEffect } from "react";
import { Pages } from "./Pages";
import { Search } from "./Search";
import { Filter } from "./Filter";

export function Character() {
  const [character, setCharacter] = useState([]);
  const [info, setInfo] = useState({});

  const url = "https://rickandmortyapi.com/api/character";

  const fetchApi = async (url) => {
    const res = await fetch(url);
    const characterJSON = await res.json();
    const { results, info } = characterJSON;
    if (results !== undefined) {
      setCharacter(results);
      setInfo(info);
    } else {
      alert("No existe");
    }
  };
  useEffect(() => {
    fetchApi(url);
  }, []);
  const onPrevious = () => {
    fetchApi(info.prev);
  };
  const onNext = () => {
    fetchApi(info.next);
  };
  const filterName = (name) => {
    fetchApi(`${url}/?name=${name}`);
  };
  const onMale = () => {
    fetchApi(`${url}/?gender=MALE`);
  };
  const onFemale = () => {
    fetchApi(`${url}/?gender=FEMALE`);
  };
  const onGenderless = () => {
    fetchApi(`${url}/?gender=GENDERLESS`);
  };
  const onUnknown = () => {
    fetchApi(`${url}?gender=UNKNOWN`);
  };
  const onAll = () => {
    fetchApi(`${url}`);
  };

  return (
    <>
    <div className='Filters'>
      <Search onChange={filterName} />
      <p className='textFilter'>Filter: </p>
      <div className='filters'>
        <Filter name="Male" onChange={onMale} page={true} />
        <Filter name="Female" onChange={onFemale} page={true} />
        <Filter name="Genderless" onChange={onGenderless} page={true} />
        <Filter name="Unknown" onChange={onUnknown} page={true} />
        <Filter name="All" onChange={onAll} page={true} />
        </div>
        </div>
      <Pages
        className="Pages"
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <div className="cards">
        {character.map((item) => (
          <div key={item.id} className="card">
            <img className="Image" src={item.image} width="150" />
            <span className="Name">{item.name}</span>
            <span>ID: #{item.id}</span>
            <span>Specie: ✰{item.species}</span>
            <span>Origin: {item.origin.name}</span>
          </div>
        ))}
      </div>
      <Pages
        className="Pages"
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </>
  );
}
