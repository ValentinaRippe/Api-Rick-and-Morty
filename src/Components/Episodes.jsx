import React from "react";
import { useState, useEffect } from "react";
import { Pages } from "./Pages";
import { Search } from "./Search";
import { ImgCharacterEpisode } from "./ImgCharacterEpisode";
import "../Styles/Episodes.css";

export function Episodes() {
  const [episode, setEpisodes] = useState([]);
  const [info, setInfo] = useState([]);
  const url = "https://rickandmortyapi.com/api/episode";

  const fetchApi = async (url) => {
    const res = await fetch(url);
    const episodesJSON = await res.json();
    const { results, info } = episodesJSON;
    if(results !== undefined){
      setEpisodes(results);
      setInfo(info);
    }else{
      alert('No existe')
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
    fetchApi(`${url}/?name=${name}`)
  }
  return (
    <div>
      <div className='Filters'>
      <Search
    onChange={filterName}
     />  
      </div>
      <Pages
        className=""
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <div className="cards_episodes">
        {episode.map((item) => (
          <div key={item.id} className="card_episode">
            <div key={item.id}  className='cardEpisode_text'>
            <span className="name_title"> <p className='episode_text'> Episode:</p> {item.name}</span>
            <span className='numEpisode_text'> {item.episode}</span>
            <span className='date_text'>Date: ✰{item.air_date}</span>
            </div>
            <ImgCharacterEpisode index={item.id} characters={item.characters}/>
          </div>
        ))}
      </div>
      <Pages
        className=""
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
  );
}
