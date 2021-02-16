import React, { Component } from 'react'
import './navbar.css'
class Navbar extends Component {
    state = {clicked: false  }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked});
        console.log(this.state)
      };
      
    render() { 
        return ( 
            <nav className="navbar">
      <h1 className="brand-title">Brand Name</h1>
      
       <div className={this.state.clicked === true ? "navLinks":'navHide'}>
        <ul>
          <li>OUR COMPANY</li>
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