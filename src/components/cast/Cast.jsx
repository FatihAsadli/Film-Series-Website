import React from "react";

const Cast = ({ castImages = [] }) => {
  return (
    <div>
      <div className="cast layout">
        <div className="mhead">
          <p className="paragraph">Cast</p>
          <div className="move-btns">
            <button>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="cast-img">
          {castImages.map((imgSrc, index) => (
            <img src={imgSrc} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cast;
