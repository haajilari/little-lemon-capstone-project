// src/components/Footer.js
import React from "react";
import footerLogo from "../assets/Logo.svg"; // می‌توانید از لوگوی مخصوص فوتر استفاده کنید

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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
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
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
