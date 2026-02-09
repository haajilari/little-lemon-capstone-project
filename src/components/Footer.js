// src/components/Footer.js
import React from "react";
import footerLogo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={footerLogo} alt="Little Lemon Logo" />
        </div>
        <div>
          <h3>Doormat Navigation</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
            <li>
              <Link to="/order">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address: 123 Town Street, Chicago</li>
            <li>Phone: +00 123 456 789</li>
            <li>Email: little@lemon.com</li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <Link to="/">Facebook</Link>
            </li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
            <li>
              <Link to="/">Twitter</Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
