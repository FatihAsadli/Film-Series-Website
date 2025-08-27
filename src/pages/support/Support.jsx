import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "../support/support.css";
import Img1 from "../../assets/welcome.png";
import Faq from "../../components/faq/faq.jsx";
import Banner from "../../components/banner/Banner.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Support = () => {
  return (
    <div className="page-main">
      <div className="container">

        <div className="support-contact">
          <div className="welcome">
            <div className="head">
              <h1>Welcome to our support page!</h1>
              <p className="paragraph">
                We're here to help you with any problems you may be having with
                our product.
              </p>
            </div>
            <div className="welcome-img">
              <img src={Img1} alt="" />
            </div>
          </div>

          <form action="" className="welcome-form">
            <div className="fname inp-div">
              <label htmlFor="">First Name</label>
              <input type="text" name="" id="" placeholder="Enter First Name" />
            </div>

            <div className="lname inp-div">
              <label htmlFor="">Last Name</label>
              <input type="text" name="" id="" placeholder="Enter Last Name" />
            </div>

            <div className="emai inp-div">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your Email"
              />
            </div>

            <div className="number inp-div">
              <label htmlFor="">Phone Number</label>
              <input
                type="number"
                name=""
                id=""
                placeholder="Enter Phone Number"
              />
            </div>

            <div className="message inp-div">
              <label htmlFor="">Message</label>
              <textarea
                type="message"
                name=""
                id=""
                placeholder="Enter your Message"
              />
            </div>

            <div className="check-box">
              <div className="checkbox-div">
                <input type="checkbox" name="" id="check" className="check" />
                <label htmlFor="">
                  I agree with Terms of Use and Privacy Policy
                </label>
              </div>
              <button className="btn">Send Message</button>
            </div>
          </form>
        </div>

        <div className="Faq">
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
      

      <Banner />
      </div>
      <Footer />
    </div>
  );
};

export default Support;
