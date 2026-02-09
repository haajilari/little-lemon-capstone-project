// src/components/Main.js
import React from "react";
import heroImage from "../assets/restauranfood.jpg";
import greekSalad from "../assets/greek_salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon_dessert.jpg";

function Main() {
  return (
    <main>
      {/* --- Hero Section --- */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <a
            href="/reservations"
            className="button-primary"
            role="button"
            aria-label="Reserve a Table"
          >
            Reserve a Table
          </a>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Delicious restaurant food" />
        </div>
      </section>

      {/* --- Specials Section --- */}
      <section className="specials-section">
        <div className="specials-header">
          <h2>This weeks specials!</h2>
          <a
            href="/menu"
            className="button-primary"
            role="button"
            aria-label="Online Menu"
          >
            Online Menu
          </a>
        </div>

        <div className="cards-container">
          {/* Card 1: Greek Salad */}
          <article className="card">
            <img src={greekSalad} alt="Greek Salad" />
            <div className="card-content">
              <div className="card-title">
                <h3>Greek Salad</h3>
                <span className="price">$12.99</span>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <a href="/order" role="button">
                Order a delivery
              </a>
            </div>
          </article>

          {/* Card 2: Bruchetta */}
          <article className="card">
            <img src={bruchetta} alt="Bruchetta" />
            <div className="card-content">
              <div className="card-title">
                <h3>Bruchetta</h3>
                <span className="price">$5.99</span>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <a href="/order" role="button">
                Order a delivery
              </a>
            </div>
          </article>

          {/* Card 3: Lemon Dessert */}
          <article className="card">
            <img src={lemonDessert} alt="Lemon Dessert" />
            <div className="card-content">
              <div className="card-title">
                <h3>Lemon Dessert</h3>
                <span className="price">$5.00</span>
              </div>
              <p>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <a href="/order" role="button">
                Order a delivery
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Main;
