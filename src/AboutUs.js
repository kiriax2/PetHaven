import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      <img
        src="/images/andrew-s-ouo1hbizWwo-unsplash_99636e38-800b-49b4-b41e-df155c6b442a.webp"
        alt="Happy pets at Pet Haven"
        className="about-hero-image"
      />

      <div className="about-container">
        <section className="about-hero">
          <h1>About Pet Haven</h1>
          <p>
            At <strong>Pet Haven</strong>, we believe every pet deserves a loving home.
            Our mission is to connect abandoned, rescued, and homeless animals
            with people who are ready to open their hearts.
          </p>
        </section>

        <section className="about-story">
          <h2>Our Story</h2>
          <p>
            Founded in 2022, Pet Haven started as a small community effort to rehome stray pets
            in local neighborhoods. Today, we’ve helped over 1,000 animals find forever families.
            Our volunteers work tirelessly to provide medical care, shelter, and love
            until each pet finds a new beginning.
          </p>
        </section>

        <section className="about-values">
          <h2>What We Do</h2>
          <ul>
            <li>🏡 Provide safe shelters for abandoned pets</li>
            <li>💉 Ensure vaccinations and medical checkups</li>
            <li>🤝 Match pets with caring adopters</li>
            <li>📚 Educate communities about responsible pet ownership</li>
          </ul>
        </section>

        <section className="about-contact">
          <h2>Join Us</h2>
          <p>
            Want to make a difference? You can adopt, volunteer, or donate.
            Every small action helps us create a world where no pet is left behind.
          </p>
          <button className="adopt-btn"><Link to="/adoption">Adopt a Pet</Link></button>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
