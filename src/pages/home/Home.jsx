import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import Faq from "../../components/faq/faq.jsx";
import Device from "../../components/devices/Devices.jsx";
import { useState } from "react";
import "../home/home.css";
import Play from "../../assets/play-solid.svg";
import fcimage1 from "../../assets/fc-img1.png";
import fcimage2 from "../../assets/fc-img2.png";
import fcimage3 from "../../assets/fc-img3.png";
import fcimage4 from "../../assets/fc-img4.png";
import fcimage5 from "../../assets/fc-img5.png";
import Phone from "../../assets/Phone.svg";
import Banner from "../../components/banner/Banner.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Home = () => {
  return (
    <div className="page-main home">
      <header>
        <div className="header-top">
          <div className="container">
     
          </div>
        </div>

        <div className="header-content">
          <div className="mhead">
            <h1>The Best Streaming Experience</h1>
            <p className="paragraph">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </p>
            <p className="paragraph p-390">
                StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.
            </p>
          </div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                fill="#ffffff"
                d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
              />
            </svg>
            <a href="">Start Watching Now</a>
          </button>
        </div>
      </header>

      <section className="sect1">
        <div className="container">
          <div className="mhead">
            <div className="fc-text">
              <h2 className="heading">
                Explore our wide variety of categories
              </h2>
              <p className="paragraph">
                Whether you're looking for a comedy to make you laugh, a drama
                to make you think, or a documentary to learn something new
              </p>
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
          <div className="fc-cards">
            <div className="fc-card">
              <div className="fc-img">
                <img src={fcimage1} alt="" />
              </div>
              <div className="fc-go">
                <h4>Action</h4>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#ffffff"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="fc-card">
              <div className="fc-img">
                <img src={fcimage2} alt="" />
              </div>
              <div className="fc-go">
                <h4>Adventure</h4>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#ffffff"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="fc-card">
              <div className="fc-img">
                <img src={fcimage3} alt="" />
              </div>
              <div className="fc-go">
                <h4>Comedy</h4>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#ffffff"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="fc-card">
              <div className="fc-img">
                <img src={fcimage4} alt="" />
              </div>
              <div className="fc-go">
                <h4>Drama</h4>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#ffffff"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="fc-card">
              <div className="fc-img">
                <img src={fcimage5} alt="" />
              </div>
              <div className="fc-go">
                <h4>Horror</h4>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#ffffff"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sect2">
        <div className="container">
          <div className="text-head">
            <h2 className="heading">
              We Provide you streaming experience across various devices.
            </h2>
            <p className="paragraph">
              With StreamVibe, you can enjoy your favorite movies and TV shows
              anytime, anywhere. Our platform is designed to be compatible with
              a wide range of devices, ensuring that you never miss a moment of
              entertainment.
            </p>
          </div>
          <div className="devices-card-cards">
            <Device
              title="Smartphones"
              svg={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path
                    fill="#ff0000"
                    d="M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zM192 400a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                  />
                </svg>
              }
            />

            <Device
              title="Tablet"
              svg={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="#ff0000"
                    d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 432l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                  />
                </svg>
              }
            />

            <Device
              title="Smart TV"
              svg={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path
                    fill="#ff0000"
                    d="M64 64l0 288 512 0 0-288L64 64zM0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zM128 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                  />
                </svg>
              }
            />

            <Device
              title="Laptops"
              svg={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path
                    fill="#ff0000"
                    d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z"
                  />
                </svg>
              }
            />

            <Device
              title="Gaming Consoles"
              svg={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path
                    fill="#ff0000"
                    d="M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z"
                  />
                </svg>
              }
            />

            <Device
              title="Smartphones"
              svg={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path
                    fill="#ff0000"
                    d="M576 64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l120.4 0c24.2 0 46.4-13.7 57.2-35.4l32-64c8.8-17.5 26.7-28.6 46.3-28.6s37.5 11.1 46.3 28.6l32 64c10.8 21.7 33 35.4 57.2 35.4L576 448c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64zM96 240a64 64 0 1 1 128 0A64 64 0 1 1 96 240zm384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      <section className="sect3">
        <div className="container">
          <div className="mhead">
            <div className="head-text">
              <h2 className="heading">Frequently Asked Questions</h2>
              <p className="paragraph">
                Got questions? We've got answers! Check out our FAQ section to
                find answers to the most common questions about StreamVibe.
              </p>
            </div>
            <div className="ask-btn">
              <a href="">Ask a Question</a>
            </div>
          </div>
          <div className="question-cards">
            <div className="question-column">
              <Faq
                number="01"
                question="What is StreamVibe?"
                answer="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
              />

              <Faq
                number="02"
                question="How much does StreamVibe cost?"
                answer="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
              />

              <Faq
                number="03"
                question="What content is available on StreamVibe?"
              />

              <Faq
                number="04"
                question="How can I watch StreamVibe?"
                answer="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
              />
            </div>

            <div className="question-column">
              <Faq
                number="05"
                question="How do I sign up for StreamVibe?"
                answer="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
              />

              <Faq
                number="06"
                question="What is the StreamVibe free trial?"
                answer="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
              />

              <Faq
                number="07"
                question="How do I contact StreamVibe customer support?"
                answer="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
              />

              <Faq
                number="08"
                question="What are the StreamVibe payment methods?"
                answer="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sect4">
        <div className="container">
          <div className="mhead">
            <div className="text-head">
              <h2 className="heading">Choose the plan that's right for you</h2>
              <p className="paragraph">
                Join StreamVibe and select from our flexible subscription
                options tailored to suit your viewing preferences. Get ready for
                non-stop entertainment!
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
                  Enjoy an extensive library of movies and shows, featuring a
                  range of content, including recently released titles.
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
                  Access to a wider selection of movies and shows, including
                  most new releases and exclusive content
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
                  Access to a widest selection of movies and shows, including
                  all new releases and Offline Viewing
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
      </section>

      <div className="container">
        <Banner />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
