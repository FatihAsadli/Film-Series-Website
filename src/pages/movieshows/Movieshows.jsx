import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Image from "../../assets/img.png"
import fcimage1 from "../../assets/fc-img1.png";
import fcimage2 from "../../assets/fc-img2.png";
import fcimage3 from "../../assets/fc-img3.png";
import fcimage4 from "../../assets/fc-img4.png";
import fcimage5 from "../../assets/fc-img5.png";
import fcimage6 from "../../assets/fc-img6.png";
import fcimage7 from "../../assets/fc-img7.png";
import fcimage8 from "../../assets/fc-img8.png";
import fcimage9 from "../../assets/fc-img9.png";
import fcimage10 from "../../assets/fc-img10.png";
import fcimage11 from "../../assets/fc-img11.png";
import fcimage12 from "../../assets/fc-img12.png";
import fcimage13 from "../../assets/fc-img13.png";
import fcimage14 from "../../assets/fc-img14.png";
import fcimage15 from "../../assets/fc-img15.png";
import fcimage16 from "../../assets/fc-img16.png";
import fcimage17 from "../../assets/fc-img17.png";
import fcimage18 from "../../assets/fc-img18.png";
import fcimage19 from "../../assets/fc-img19.png";
import fcimage20 from "../../assets/fc-img20.png";
import fcimage21 from "../../assets/fc-img21.png";
import fcimage22 from "../../assets/fc-img22.png";
import fcimage23 from "../../assets/fc-img23.png";
import fcimage24 from "../../assets/fc-img24.png";
import fcimage25 from "../../assets/fc-img25.png";
import fcimage26 from "../../assets/fc-img26.png";
import fcimage27 from "../../assets/fc-img27.png";
import fcimage28 from "../../assets/fc-img28.png";
import fcimage29 from "../../assets/fc-img29.png";
import fcimage30 from "../../assets/fc-img30.png";
import fcimage31 from "../../assets/fc-img31.png";
import fcimage32 from "../../assets/fc-img32.png";
import fcimage33 from "../../assets/fc-img33.png";
import fcimage34 from "../../assets/fc-img34.png";
import fcimage35 from "../../assets/fc-img35.png";
import fcimage36 from "../../assets/fc-img36.png";
import Filmcard from "../../components/film-card/Filmcard";
import Topfilmcard from "../../components/top-fc/Topfilmcard";
import Trendcard from "../../components/trend-card/Trendcard";
import Newcard from "../../components/new-card/Newcard";
import Mustcard from "../../components/must-card/Mustcard";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import "../../pages/movieshows/movieshows.css";

const Movieshows = () => {
  return (
    <div className="page-main">
      <header>
        <div className="container">

          <Slider img={Image} title={"Avengers : Endgame"} 
          description={`With the help of remaining allies, the Avengers must assemble
                once more in order to undo Thanos's actions and undo the chaos
                to the universe, no matter what consequences may be in store,
                and no matter who they face... Avenge the fallen.`}
          />
        </div>
      </header>

      <section className="sect2">
        <div className="container">
          <button className="sticky-btn">Movies</button>
          <div className="fc-general">
            <Filmcard
              heading="Our Genres"
              images={[fcimage1, fcimage2, fcimage3, fcimage4, fcimage5]}
              genres={["Action", "Adventure", "Comedy", "Drama", "Horror"]}
            />
          </div>
          <div className="fc-top fc-div">
            <Topfilmcard
              heading="Popular Top 10 In Genres"
              images={[fcimage6, fcimage7, fcimage8, fcimage9]}
              genres={["Action", "Adventure", "Comedy", "Drama"]}
            />
          </div>
          <div className="fc-trend fc-div">
            <Trendcard
              heading={"Trending Now"}
              images={[fcimage10, fcimage11, fcimage12, fcimage13, fcimage14]}
              duration={[
                "1h 30min",
                "1h 57min",
                "2h 10min",
                "2h 20min",
                "1h 42min",
              ]}
              view={["2K", "1.5K", "1.8K", "3K", "5K"]}
            />
            <div className="fc-new fc-div">
              <Newcard
                heading={"New Releases"}
                images={[fcimage15, fcimage16, fcimage17, fcimage18, fcimage19]}
                date={[
                  "14 April 2023",
                  "22 April 2023",
                  "13 April 2023",
                  "19 April 2023",
                  "11 April 2023",
                ]}
              />
            </div>
            <div className="fc-must fc-div">
              <Mustcard
                heading="Must - Watch Movies"
                images={[fcimage20, fcimage21, fcimage22, fcimage23]}
                duration={["1h 57min", "1h 30min", "1h 42min", "2h 10min"]}
                star={[4.5, 4, 3, 5]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sect2 sect3">
        <div className="container">
          <button className="sticky-btn">Movies</button>
          <div className="fc-general">
            <Filmcard
              heading="Our Genres"
              images={[fcimage1, fcimage2, fcimage3, fcimage4, fcimage5]}
              genres={["Action", "Adventure", "Comedy", "Drama", "Horror"]}
            />
          </div>
          <div className="fc-top fc-div">
            <Topfilmcard
              heading="Popular Top 10 In Genres"
              images={[fcimage24, fcimage7, fcimage8, fcimage9]}
              genres={["Action", "Adventure", "Comedy", "Drama"]}
            />
          </div>
          <div className="fc-trend fc-div">
            <Trendcard
              heading={"Trending Now"}
              images={[fcimage25, fcimage26, fcimage27, fcimage28]}
              duration={["8h 20min", "12h 23min", "14h 30min", "7h 40min"]}
              view={["4 Season", "5 Season", "3 Season", "2 Season"]}
              svg={<i class="fa-solid fa-layer-group"></i>}
            />
            <div className="fc-new fc-div">
              <Trendcard
                heading={"New Releases"}
                images={[fcimage29, fcimage30, fcimage31, fcimage32]}
                duration={["12h 23min", "7h 40min", "8h 20min", "10h 30min"]}
                view={["5 Season", "2 Season", "4 Season", "3 Season", "5K"]}
              />
            </div>
            <div className="fc-must fc-div">
              <Mustcard
                heading="Must - Watch Movies"
                images={[fcimage33, fcimage34, fcimage35, fcimage36]}
                duration={["7h 40min", "12h 23min", "10h 30min", "8h 20min"]}
                star={[4.5, 4, 3, 5]}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <Banner />
      </div>

      <Footer />
    </div>
  );
};

export default Movieshows;
