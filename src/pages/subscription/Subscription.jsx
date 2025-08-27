import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Plansubscription from "../../components/plan-subscription/Plansubscription";
import Compare from "../../components/Compare/Compare";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";

const Subscription = () => {
  return (
    <div className="page-main subscription-main">
      <div className="container">


        <Plansubscription />

        <div className="compare">
          <div className="text-head">
            <h2 className="heading">
              Compare our plans and find the right one for you
            </h2>
            <div className="paragraph">
              StreamVibe offers three different plans to fit your needs: Basic,
              Standard, and Premium. Compare the features of each plan and
              choose the one that's right for you.
            </div>
          </div>

          <Compare />
        </div>
        
        <Banner />
      </div>

      <Footer />
    </div>
  );
};

export default Subscription;
