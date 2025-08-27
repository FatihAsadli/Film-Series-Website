import Play from "../../assets/Play.svg";
import React from "react";

const Episode = ({number, img, episodeName, duration, episodeDescription }) => {
  return (
    <div>
      <div className="episode-box">
        <hr />
        <div className="episode">
          <div className="number paragraph" style={{ fontSize: 30 }}>
            {number}
          </div>
          <div className="episode-img-div">
            <img src={img} alt="" className="episode-img"/>
            <img src={Play} alt="" className="svg" />
          </div>
          <div className="episode-info">
            <div className="episode-title title flex">
              {episodeName}
              <div className="duration">
                <i class="fa-regular fa-clock"></i>
                <span className="paragraph" style={{ fontSize: 16 }}>
                  {duration} min
                </span>
              </div>
            </div>
            <div className="episode-description paragraph">
              {episodeDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode;
