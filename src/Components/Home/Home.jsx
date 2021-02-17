import React from 'react'
import Footer from './Footer'
import './home.css'

const Home = () => {
    return (<div>
        <div className="container">
        <section className="homeTitleContainer">
      

      <div className="homeText">
       
        <h3>Award-winning custom designs and digital branding solutions</h3>
        <h5>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </h5>
        <div className="circle"></div>
        <div className="homeButton">
          <button>Learn more</button>
        </div>
      </div>
     
      <img src="./assets/home/desktop/image-hero-phone.png" alt="HomePhone"/>
        </section>
        <section className="homeThreeGrid">
      <div className="imgWrap">
        <h1 className="centered"> <a href="web-design.html">Web Design</a></h1>
        <p className="centered1">View Projects</p>
        <a href="/web-design">
          <picture>
            <source media="(min-width: 801px)" srcSet="./assets/home/desktop/image-web-design-large.jpg" />

            <source media="(min-width: 500px)" srcSet="./assets/home/tablet/image-web-design.jpg" />
          <img src="./assets/home/mobile/image-web-design.jpg" alt="webDesign"/>
          </picture>
        </a>
      </div>
      <div className="imgWrap2">
        <h1 className="centered">App Design</h1>
        <p className="centered1">View Projects</p>
        <a href="/graphic-design">
          <picture>
            <source media="(min-width: 801px)" srcSet="./assets/home/desktop/image-app-design.jpg" />

            <source media="(min-width:500px)" srcSet="./assets/home/tablet/image-app-design.jpg" />
              
              <img src="assets/home/mobile/image-graphic-design.jpg" alt="GraphicDesign"/>
        </picture>
        </a>
      </div>
      <div className="imgWrap3">
        <h1 className="centered">Graphic Design</h1>
        <p className="centered1">View Projects</p>
        <a href="/app-design">
          <picture>
            <source media="(min-width: 801px)" srcSet="./assets/home/desktop/image-graphic-design.jpg" />

            <source media="(min-width: 500px)" srcSet="./assets/home/tablet/image-graphic-design.jpg" />
           
          <img src="./assets/home/mobile/image-app-design.jpg" alt="appDesign"/>
        </picture>
        </a>
      </div>
        </section>
        <section className="homeCartoonSection">
      <div className="cartoonWrap">
        <img src="assets/home/desktop/illustration-passionate.svg" alt="passionate"/>
        <div className="cartoonText">
        <h1>Passionate</h1>
        <p>
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </p>
      </div>
      </div>
      <div className="cartoonWrap">
        <img src="assets/home/desktop/illustration-resourceful.svg" alt="resourceful" />
        <div className="cartoonText">
        <h1>Resourceful</h1>
        <p>
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs.
        </p>
      </div>
      </div>
      <div className="cartoonWrap">
        <img src="assets/home/desktop/illustration-friendly.svg" alt="friendly"/>
        <div className="cartoonText">
        <h1>Friendly</h1>
        <p>
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide.
        </p>
      </div>
      </div>
    </section>
        </div>
        <Footer />
    </div> );
}
 
export default Home;