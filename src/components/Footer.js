// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer>
      <section>
        <div>
          {/* لوگو یا عکس فوتر */}
          <img
            src={require("../assets/logo.svg").default}
            alt="Little Lemon Logo"
          />
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
            {/* ... بقیه لینک‌ها */}
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
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
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
