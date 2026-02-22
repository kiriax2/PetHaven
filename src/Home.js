import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">

      {/* 🐶 Hero Section */}
      <section className="hero">
        <img
          src="/images/6.jpg"
          alt="Happy pets"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Find Your Forever Friend 🐾</h1>
          <p>
            Thousands of loving pets are waiting for their forever homes.
            Adopt today and make a difference in a furry friend’s life.
          </p>
          <Link to="/adoption" className="adopt-btn">Adopt Now</Link>
        </div>
      </section>

      {/* 🗣️ Member Feedback */}
      <section className="feedback">
        <h2>What Our Members Say ❤️</h2>
        <div className="feedback-cards">
          <div className="feedback-card">
            <p>“Adopting from Pet Haven changed my life — Luna is the best thing that’s ever happened to me!”</p>
            <h4>- Sarah L.</h4>
          </div>
          <div className="feedback-card">
            <p>“The process was so easy and the staff were amazing. Max is now part of our family!”</p>
            <h4>- Jason T.</h4>
          </div>
          <div className="feedback-card">
            <p>“Thank you Pet Haven for helping me find Bella — she’s the sweetest companion I could ask for.”</p>
            <h4>- Amanda K.</h4>
          </div>
        </div>
      </section>

      {/* 🎥 YouTube Pet Care Section */}
      <section className="videos">
        <h2>Learn How to Care for Your Pets 🐕🐈</h2>
        <div className="video-grid">
          <iframe width="1396" height="785" src="https://www.youtube.com/embed/iLrW05LHMzI" title="Learn How To Care For Pets! | Caitie&#39;s Classroom Field Trip | Animal Video for Kids" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

          <iframe width="1396" height="785" src="https://www.youtube.com/embed/Zb3Wzs2FcFE" title="Basic Pet Care: Dogs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

          <iframe width="1396" height="785" src="https://www.youtube.com/embed/zPOAaDUzVDY" title="The Ultimate Guide for First-Time Cat Owners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>
      {/* 🐾 Footer */}
      <footer className="footer">
        <p>© 2026 Pet Haven. All rights reserved.</p>
        <p>
          Follow us on 
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer"> Instagram</a> • 
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer"> Facebook</a> • 
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer"> YouTube</a>
        </p>
      </footer>
    </div>

    
  );
  
};



export default Home;
