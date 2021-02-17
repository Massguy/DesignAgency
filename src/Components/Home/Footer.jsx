import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer className="footerContainer">
    
        <div className="orangeContainer">
          <h1>Let’s talk about your project</h1>
          <p>
            Ready to take it to the next level? Contact us today and find out how
            our expertise can help your business grow.
          </p>
          <div className="footerButton">
            <button>Get in Touch</button>
          </div>
        </div>
        <div className="blackContainer">
          <div className="aboveUnderline">
          <h1>Designo</h1>
          
          <ul>
            <li>OurCompany </li>
            <li>Locations </li>
            <li> Contact </li>
          </ul>
        </div>
          <div className="underline"></div>
          <div className="horizontalGrid">
             <div className="address">
          <p className="bold">Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
       <div className="address">
          <p className="bold">Contact Us (Central Office)</p>
          <p>P :
            +1 253-863-8967
          </p>
            <p>M : contact@designo.co</p>
          </div>
          <div className="address">
            <a href="https://en-gb.facebook.com" className="fa fa-facebook"> </a>
            <a href="https://en-gb.facebook.com" className="fa fa-twitter"> </a>
            <a href="https://en-gb.facebook.com" className="fa fa-instagram"> </a>
            <a href="https://en-gb.facebook.com" className="fa fa-youtube"> </a>
          </div>
        </div>
        </div>
    
    </footer>
      );
}
 
export default Footer;