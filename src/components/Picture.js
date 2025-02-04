import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="img">
        <img src={data.src.large} alt="" />
      </div>
      <p>{data.photographer}</p>
      <p>
        <a target="_blank" href={data.src.large}>
          下載圖片
        </a>
      </p>
    </div>
  );
};

export default Picture;
