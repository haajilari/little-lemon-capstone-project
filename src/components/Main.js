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
          <button aria-label="Reserve a Table">Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Delicious restaurant food" />
        </div>
      </section>

      {/* --- Specials Section --- */}
      <section className="specials-section">
        <div className="specials-header">
          <h2>This weeks specials!</h2>
          <button aria-label="Online Menu">Online Menu</button>
        </div>

        <div className="cards-container">
          {/* Card 1 */}
          <article className="card">
            <img src={greekSalad} alt="Greek Salad" />
            <div className="card-content">
              <div className="card-header">
                <h3>Greek salad</h3>
                <span>$12.99</span>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <div className="card-footer">
                <strong>Order a delivery</strong>
                {/* اینجا می‌توانید آیکون موتورسیکلت را اضافه کنید */}
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="card">
            <img src={bruchetta} alt="Bruchetta" />
            <div className="card-content">
              <div className="card-header">
                <h3>Bruchetta</h3>
                <span>$ 5.99</span>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <div className="card-footer">
                <strong>Order a delivery</strong>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="card">
            <img src={lemonDessert} alt="Lemon Dessert" />
            <div className="card-content">
              <div className="card-header">
                <h3>Lemon Dessert</h3>
                <span>$ 5.00</span>
              </div>
              <p>
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <div className="card-footer">
                <strong>Order a delivery</strong>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Main;
