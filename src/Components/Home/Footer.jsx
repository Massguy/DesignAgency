import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer class="footerContainer">
    
        <div class="orangeContainer">
          <h1>Let’s talk about your project</h1>
          <p>
            Ready to take it to the next level? Contact us today and find out how
            our expertise can help your business grow.
          </p>
          <div class="footerButton">
            <button>Get in Touch</button>
          </div>
        </div>
        <div class="blackContainer">
          <div class="aboveUnderline">
          <h1>Designo</h1>
          
          <ul>
            <li>OurCompany </li>
            <li>Locations </li>
            <li> Contact </li>
          </ul>
        </div>
          <div class="underline"></div>
          <div class="horizontalGrid">
             <div class="address">
          <p class="bold">Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
       <div class="address">
          <p class="bold">Contact Us (Central Office)</p>
          <p>P :
            +1 253-863-8967
          </p>
            <p>M : contact@designo.co</p>
          </div>
          <div class="address">
            <a href="https://en-gb.facebook.com" class="fa fa-facebook"> </a>
            <a href="https://en-gb.facebook.com" class="fa fa-twitter"> </a>
            <a href="https://en-gb.facebook.com" class="fa fa-instagram"> </a>
            <a href="https://en-gb.facebook.com" class="fa fa-youtube"> </a>
          </div>
        </div>
        </div>
    
    </footer>
      );
}
 
export default Footer;