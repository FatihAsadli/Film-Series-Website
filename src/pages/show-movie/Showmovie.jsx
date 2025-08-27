import React from "react";
import Slider from "../../components/Slider/Slider";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Bgi from "../../assets/bgi.png";
import Bgi2 from "../../assets/bgi2.png";
import Bgi3 from "../../assets/bgi3.png";
import Bgi4 from "../../assets/bgi4.png";
import Bgi5 from "../../assets/bgi5.png";
import Cast1 from "../../assets/2Cast1.png";
import Cast2 from "../../assets/2Cast2.png";
import Cast3 from "../../assets/2Cast3.png";
import Cast4 from "../../assets/2Cast4.png";
import Cast5 from "../../assets/2Cast5.png";
import Cast6 from "../../assets/2Cast6.png";
import Cast7 from "../../assets/2Cast7.png";
import Cast8 from "../../assets/2Cast8.png";
import Director from "../../assets/2Director.png";
import Music from "../../assets/2Music.png";
import "../../pages/show-movie/showmovie.css";
import Description from "../../components/description/Description";
import Cast from "../../components/cast/Cast";
import Review from "../../components/Review/Review";
import Episode from "../../components/episode/Episode";
import Aside from "../../components/aside/Aside";

const Showmovie = () => {
  return (
    <div className="page-main">
      <div className="container">
        <header>

          <Slider
            img={Bgi}
            title={"Stranger Things"}
            description={
              "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
            }
          />
        </header>

        <main>
          <div className="row">
            <div className="movie-all layout">
              <h2 className="title">Seasons and Episodes</h2>
              <div className="seasons-episodes">
                <div className="first-season bg flex">
                  <div className="title title-flex">
                    Season 01 <span className="paragraph">9 Episodes</span>
                  </div>
                  <button className="arrow-button">
                    <i class="fa-solid fa-arrow-down"></i>
                  </button>
                </div>
                <div className="current-season bg">
                  <div className="season-head flex">
                    <div className="title title-flex">
                      Season 01 <span className="paragraph">9 Episodes</span>
                    </div>
                    <button className="arrow-button">
                      <i class="fa-solid fa-arrow-down"></i>
                    </button>
                  </div>
                  <div className="episodes">
                    <Episode
                      number={"01"}
                      img={Bgi}
                      episodeName={"Chapter One : The Vanishing of Will Byers"}
                      duration={"49"}
                      episodeDescription={
                        "On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab."
                      }
                    />

                    <Episode
                      number={"02"}
                      img={Bgi2}
                      episodeName={"Chapter Two: The Weirdo on Maple Street"}
                      duration={"56"}
                      episodeDescription={
                        "Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call."
                      }
                    />

                    <Episode
                      number={"03"}
                      img={Bgi3}
                      episodeName={"Chapter Three: Holly, Jolly"}
                      duration={"52"}
                      episodeDescription={
                        "An increasingly concerned Nancy looks for Barb and finds out what Jonathan's been up to. Joyce is convinced Will is trying to talk to her."
                      }
                    />

                    <Episode
                      number={"04"}
                      img={Bgi4}
                      episodeName={"Chapter Four: The Body"}
                      duration={"51"}
                      episodeDescription={
                        "Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover.."
                      }
                    />

                    <Episode
                      number={"05"}
                      img={Bgi5}
                      episodeName={"Chapter Five: The Flea and the Acrobat"}
                      duration={"53"}
                      episodeDescription={
                        "Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension."
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <Description
              text={`When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.`}
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
            genres={["Sci-Fi TV", "Teen TV Shows", "US TV Shows"]}
          />
        </main>

        <Banner />
      </div>
      <Footer />
    </div>
  );
};

export default Showmovie;
