// src/components/HomePage.js
import React from "react";
import bruschettaImage from "../assets/bruchetta.svg";
import greekSaladImage from "../assets/greek_salad.jpg";
import lemonDessertImage from "../assets/lemon_dessert.jpg";
import heroImage from "../assets/restauranfood.jpg";

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <a href="/booking" className="button-primary">
            Reserve a Table
          </a>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Restaurant Food" />
        </div>
      </section>

      {/* Specials Section */}
      <section className="specials-section">
        <div className="specials-header">
          <h2>This week's specials!</h2>
          <a href="#" className="button-primary">
            Online Menu
          </a>
        </div>
        <div className="cards-container">
          {/* Card 1 */}
          <article className="card">
            <img src={greekSaladImage} alt="Greek Salad" />
            <div className="card-content">
              <div className="card-title">
                <h3>Greek Salad</h3>
                <p className="price">$12.99</p>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <a href="#">Order a delivery</a>
            </div>
          </article>
          {/* Card 2 */}
          <article className="card">
            <img src={bruschettaImage} alt="Bruschetta" />
            <div className="card-content">
              <div className="card-title">
                <h3>Bruschetta</h3>
                <p className="price">$5.99</p>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <a href="#">Order a delivery</a>
            </div>
          </article>
          {/* Card 3 */}
          <article className="card">
            <img src={lemonDessertImage} alt="Lemon Dessert" />
            <div className="card-content">
              <div className="card-title">
                <h3>Lemon Dessert</h3>
                <p className="price">$5.00</p>
              </div>
              <p>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <a href="#">Order a delivery</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
