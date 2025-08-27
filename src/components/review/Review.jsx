import React from "react";

const Review = () => {
  return (
    <div>
      <div className="reviews layout">
        <div className="mhead">
          <div className="paragraph">Reviews</div>
          <button className="review-btn">
            <i class="fa-solid fa-plus"></i> Add Your Review
          </button>
        </div>
        <div className="reviews-box">
          <div className="review">
            <div className="user">
              <div className="user-info">
                <div className="name">Aniket Roy</div>
                <div className="from paragraph">From India</div>
              </div>
              <div className="user-rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span className="rating paragraph">4.5</span>
              </div>
            </div>
            <div className="user-review paragraph">
              This movie was recommended to me by a very dear friend who went
              for the movie by herself. I went to the cinemas to watch but had a
              houseful board so couldn’t watch it.
            </div>
          </div>

          <div className="review">
            <div className="user">
              <div className="user-info">
                <div className="name">Aniket Roy</div>
                <div className="from paragraph">From India</div>
              </div>
              <div className="user-rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span className="rating paragraph">5</span>
              </div>
            </div>
            <div className="user-review paragraph">
              A restless king promises his lands to the local tribals in
              exchange of a stone (Panjurli, a deity of Keradi Village) wherein
              he finds solace and peace of mind.
            </div>
          </div>
        </div>

        <div className="buttons-container" style={{display: "flex"}}>
          <button>
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <div className="order">
            <hr />
            <hr />
            <hr />
            <hr />
          </div>
          <button>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
