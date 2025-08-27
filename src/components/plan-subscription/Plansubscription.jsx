import React from "react";

const Plansubscription = () => {
  return (
    <div className="plansubscription-main">
      <div className="mhead">
        <div className="text-head" style={{ marginBottom: 0 }}>
          <h2 className="heading">Choose the plan that's right for you</h2>
          <p className="paragraph">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <div className="plan-btn">
          <button>
            <a href="">Monthly</a>
          </button>
          <button>
            <a href="">Yearly</a>
          </button>
        </div>
      </div>
      <div className="plans">
        <div className="plan">
          <div className="plan-head">
            <h5>Basic Plan</h5>
            <p>
              Enjoy an extensive library of movies and shows, featuring a range
              of content, including recently released titles.
            </p>
          </div>
          <div className="plan-price">
            $9.99<span>/month</span>
          </div>
          <div className="plan-choose">
            <button>
              <a href="">Start Free Trial</a>
            </button>
            <button>
              <a href="">Choose Plan</a>
            </button>
          </div>
        </div>

        <div className="plan">
          <div className="plan-head">
            <h5>Standart Plan</h5>
            <p>
              Access to a wider selection of movies and shows, including most
              new releases and exclusive content
            </p>
          </div>
          <div className="plan-price">
            $12.99<span>/month</span>
          </div>
          <div className="plan-choose">
            <button>
              <a href="">Start Free Trial</a>
            </button>
            <button>
              <a href="">Choose Plan</a>
            </button>
          </div>
        </div>

        <div className="plan">
          <div className="plan-head">
            <h5>Premium Plan</h5>
            <p>
              Access to a widest selection of movies and shows, including all
              new releases and Offline Viewing
            </p>
          </div>
          <div className="plan-price">
            $14.99<span>/month</span>
          </div>
          <div className="plan-choose">
            <button>
              <a href="">Start Free Trial</a>
            </button>
            <button>
              <a href="">Choose Plan</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plansubscription;
