import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Meet the team</h2>
            <Link to='/'>Christopher Roddy</Link>
            <Link to='/'>Eshan Sharma</Link>
            <Link to='/'>Lauren Ingrahm</Link>
            <Link to='/'>Nicholas Ciraulo</Link>
            <Link to='/'>Rishabh Dhadda</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
