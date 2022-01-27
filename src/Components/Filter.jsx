import React from "react";
import '../Styles/Filter.css'

export function Filter({ name, onChange, page }) {
  return (
    
       <>{page?<button className='buttonsFilter' onClick={onChange}>{name}</button>:null}</>
   
  );
}
