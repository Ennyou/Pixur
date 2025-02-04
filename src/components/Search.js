import React from "react";

const Search = ({ search, setInput }) => {
  const input = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <form>
        <input
          className="input"
          onChange={input}
          type="text"
          placeholder="要搜尋什麼圖片"
        />
        <button
          className="btnInput"
          onClick={(e) => {
            e.preventDefault(); // 防止表單提交
            search();
          }}
        >
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
