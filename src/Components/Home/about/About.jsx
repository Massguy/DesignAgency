import React from "react";
import Footer from "../Footer";
import "./about.css";
const About = () => {
  return (
      <>
    <div className="container">
        <section className="aboutUs">
      <img src="/assets/about/mobile/image-about-hero.jpg" alt="aboutPic" />
      
        <h3>About us</h3>
        <p>
          {" "}
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients' audiences.
        </p>
      </section>
      <section className="worldClassContainer">
      <img
        src="/assets/about/mobile/image-world-class-talent.jpg"
        alt="worldClass"
      />
     
        <h3>World-class talent</h3>
        <p>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p>
          {" "}
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </section>
      <section className="countriesContainer">
        <div className="backgroundCountries">
          <img
            src="assets/shared/desktop/illustration-canada.svg"
            alt="canada"
          />
        </div>
        <h3>Canada</h3>
        <div className="locationButton">
          <button>See Location</button>
        </div>
        <div className="backgroundCountries">
          <img
            src="assets/shared/desktop/illustration-australia.svg"
            alt="australia"
          />
        </div>
        <h3>Australia</h3>
        <div className="locationButton">
          <button>See Location</button>
        </div>
        <div className="backgroundCountries">
          <img
            src="assets/shared/desktop/illustration-united-kingdom.svg"
            alt="UK"
          />
        </div>
        <h3>United Kingdom</h3>
        <div className="locationButton">
          <button>See Location</button>
        </div>
      </section>
      <section className="realDealContainer">
      <img src="assets/about/mobile/image-real-deal.jpg" alt="realDeal" />
     
        <h3>The Real Deal</h3>
        <p>
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <p>
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
      </section>
      
    </div>
    <Footer />
    </>
  );
};

export default About;
