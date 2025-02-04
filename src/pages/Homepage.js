import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  let [data, setData] = useState(null);
  let [input, setInput] = useState("");
  let [page, setPage] = useState(1);
  let [nowSearch, setNowSearch] = useState("");
  let authToken = "";
  const initUrl = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchUrl = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=15`;

  const morePage = async () => {
    let newUrl;
    if (input === "") {
      newUrl = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newUrl = `https://api.pexels.com/v1/search?query=${input}&page=${
        page + 1
      }&per_page=15`;
    }
    setPage(page + 1);
    let response = await fetch(newUrl, {
      method: "get",
      headers: {
        Authorization: authToken,
      },
    });

    const res = await response.json();
    console.log(res);

    setData(data.concat(res.photos));
  };

  const loadToken = async () => {
    const response = await fetch("./token.txt");
    authToken = await response.text();
  };

  const search = async (url) => {
    const response = await fetch(url, {
      method: "get",
      headers: {
        Authorization: authToken,
      },
    });

    const data = await response.json();
    console.log(data);

    setData(data.photos);
    setNowSearch(input);
  };

  loadToken();

  useEffect(() => {
    search(initUrl);
  }, []);

  return (
    <div>
      <Search
        search={() => {
          search(searchUrl);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="more">
        <button onClick={morePage}>載入更多</button>
      </div>
    </div>
  );
};

export default Homepage;
