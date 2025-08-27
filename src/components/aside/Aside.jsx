import React from "react";

const Aside = ({ director, music, genres = [] }) => {
  return (
    <div>
      <aside className="movie-aside layout">
        <div className="release aside-container">
          <div className="release-title aside-flex">
            <i class="fa-regular fa-calendar"></i>
            <span className="paragraph">Released Year</span>
          </div>
          <span className="release-year">2022</span>
        </div>

        <div className="languages aside-container">
          <div className="language-title aside-flex">
            <i class="fa-solid fa-language"></i>
            <span className="paragraph">Available Languages</span>
          </div>
          <div className="languages-box">
            <div className="language">English</div>
            <div className="language">Hindi</div>
            <div className="language">Tamil</div>
            <div className="language">Telegu</div>
            <div className="language">Kannada</div>
          </div>
        </div>

        <div className="ratings aside-container">
          <div className="ratings-title aside-flex">
            <i class="fa-regular fa-star"></i>
            <div className="paragraph">Ratings</div>
          </div>
          <div className="offical-ratings">
            <div className="imdb rating-box">
              <span className="source">IMDB</span>
              <div className="rating-count">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span className="rating-number">4.5</span>
              </div>
            </div>

            <div className="Streamvibe rating-box">
              <span className="source">Streamvibe</span>
              <div className="rating-count">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span className="rating-number">4</span>
              </div>
            </div>
          </div>
        </div>

        <div className="genres aside-container">
          <div className="genres-title aside-flex">
            <i class="fa-solid fa-grip-vertical"></i>
            <div className="paragraph">Genres</div>
          </div>
          <div className="genre-cards">
            {genres.map((genre, index) => (
              <div>{genre}</div>
            ))}
          </div>
        </div>

        <div className="director aside-container">
          <div className="paragraph">Director</div>
          <div className="director-box">
            <img src={director} alt="" />
            <div className="director-info">
              <div className="name">Rishab Shetty</div>
              <div className="from paragraph">From India</div>
            </div>
          </div>
        </div>

        <div className="music aside-container">
          <div className="paragraph">Director</div>
          <div className="music-box">
            <img src={music} alt="" />
            <div className="director-info">
              <div className="name">B. Ajaneesh Loknath</div>
              <div className="from paragraph">From India</div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
