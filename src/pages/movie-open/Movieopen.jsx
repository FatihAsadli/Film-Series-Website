import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Kantara from "../../assets/Kantara.png";
import Director from "../../assets/Director.png";
import Music from "../../assets/Music.png";
import Aside from "../../components/aside/Aside";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import "../../pages/movie-open/movieopen.css";
import Cast1 from "../../assets/Cast1.png";
import Cast2 from "../../assets/Cast2.png";
import Cast3 from "../../assets/Cast3.png";
import Cast4 from "../../assets/Cast4.png";
import Cast5 from "../../assets/Cast5.png";
import Cast6 from "../../assets/Cast6.png";
import Cast7 from "../../assets/Cast7.png";
import Cast8 from "../../assets/Cast8.png";
import Cast from "../../components/cast/Cast";
import Description from "../../components/description/Description";
import Review from "../../components/Review/Review";

const Movieopen = () => {
  return (
    <div className="page-main">
      <div className="container">
        <header>
          <Slider
            img={Kantara}
            title={"Kantara"}
            description={`A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.`}
          />
        </header>

        <div className="movie-info">
          <div className="row">
            <Description
              text={`A fiery young man clashes with
        an unflinching forest officer in a south Indian village where
        spirituality, fate and folklore rule the lands.`}
            />

            <Cast
              castImages={[
                Cast1,
                Cast2,
                Cast3,
                Cast4,
                Cast5,
                Cast6,
                Cast7,
                Cast8,
              ]}
            />

            <Review />
          </div>

          <Aside
            director={Director}
            music={Music}
            genres={["Action", "Adventure"]}
          />
        </div>

        <Banner />
      </div>
      <Footer />
    </div>
  );
};

export default Movieopen;
