import React from "react";
import { useNavigate } from "react-router-dom";

const Mustcard = ({ heading, images, duration, star = [] }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="fc-head">
        <div className="fc-text">
          <h2 className="heading">{heading}</h2>
        </div>
        <div className="card-mover">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="#ffffff"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              />
            </svg>
          </button>
          <div className="order">
            <hr />
            <hr />
            <hr />
            <hr />
          </div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="#ffffff"
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="fc-cards fc-must">
        {images.map((img, index) => {
          const rating = star[index] || 0;
          const fullStars = Math.floor(rating);
          const hasHalfStar = rating % 1 >= 0.5;
          const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

          return (
            <div
              className="fc-card"
              key={index}
              onClick={() => navigate(`/movieopen`)}
              style={{ cursor: "pointer" }}
            >
              <div className="fc-img">
                <img src={img} alt={`Movie ${index}`} />
              </div>
              <div className="fc-go">
                <div className="duration">
                  <i className="fa-solid fa-clock"></i>
                  <span>{duration[index]}</span>
                </div>
                <div className="review">
                  {Array(fullStars)
                    .fill(0)
                    .map((_, i) => (
                      <i
                        key={`full-${i}`}
                        className="fa-solid fa-star"
                        style={{ color: "red" }}
                      ></i>
                    ))}
                  {hasHalfStar && (
                    <i
                      className="fa-solid fa-star-half-stroke"
                      style={{ color: "red" }}
                    ></i>
                  )}
                  {Array(emptyStars)
                    .fill(0)
                    .map((_, i) => (
                      <i
                        key={`empty-${i}`}
                        className="fa-regular fa-star"
                        style={{ color: "red" }}
                      ></i>
                    ))}
                  <span style={{ marginLeft: "5px", color: "red" }}>20K</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mustcard;
