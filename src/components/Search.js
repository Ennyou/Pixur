import React from "react";

const Search = ({ search, setInput }) => {
  const input = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input className="input" onChange={input} type="text" />
      <button className="btnInput" onClick={search}>
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};

export default Search;
