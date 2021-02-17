import React, { Component } from 'react'
import './navbar.css'
import {


  Link
} from "react-router-dom";
class Navbar extends Component {
    state = {clicked: false  }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked});
      };
      
    render() { 
        return ( 
       
            <nav className="navbar">
      
      <Link to="/" className="brand-title" style={{textDecoration:"none"}}>Brand Name</Link>
      
       <div className={this.state.clicked === true ? "navLinks":'navHide'}>
        <ul>
         
          <Link to="/about" style={{textDecoration:"none",color:"white"}}> <li>ABOUT</li></Link>
          
          <li>LOCATIONS</li>
          <li>CONTACT</li>
        </ul>
      </div> 
    
      <div className='btn' onClick={this.handleClick}><i className='fa fa-bars'></i></div>
    </nav>

         );
    }
}
 
export default Navbar;