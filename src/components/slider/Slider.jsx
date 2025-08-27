import React from 'react'

const Slider = ({ img, title, description }) => {
  return (
    <div>
      <div className="slider" style={{backgroundImage: `url(${img})`}}>
            <div className="sub-container">
              <h2>{title}</h2>
              <p className="paragraph">
                {description}
              </p>
              <div className="sub-buttons">
                <button>Play Now</button>
                <button>
                  <i class="fa-solid fa-plus"></i>
                </button>
                <button>
                  <i class="fa-regular fa-thumbs-up"></i>
                </button>
                <button>
                  <i class="fa-solid fa-volume-high"></i>
                </button>
              </div>
            </div>

            <div className="buttons-container">
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
    </div>
  )
}

export default Slider;
