import React from "react";
import { useState } from "react";
import "../Styles/Search.css";

export function Search({ onChange }) {
  const [name, setName] = useState("");

  const onSearchValueChange = (event) => {
    event.preventDefault();
    onChange(name);
    setName("");
  };
  return (
    <form onSubmit={onSearchValueChange}>
      <input
        className="inputText"
        placeholder="Character..."
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input className="inputSearch" type="submit" value="Search" />
    </form>
  );
}
