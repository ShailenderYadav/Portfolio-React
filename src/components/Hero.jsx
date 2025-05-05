import React from 'react';
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm a <span className="highlight">Software Engineer</span></h1>
        <p>
          I specialize in crafting performant and accessible web applications using modern JavaScript frameworks like <strong>React.js</strong> and <strong>Nest.js</strong>. 
          With a strong focus on user experience and code quality, I turn complex problems into elegant, scalable solutions.
        </p>
        <p>
          Currently working at Jellyfish Technologies, I'm passionate about clean code, UI/UX best practices, and building tools that make a real impact.
        </p>
        <button className="cta-button" onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
