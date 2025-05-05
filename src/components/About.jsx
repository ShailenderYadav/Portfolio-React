import React from 'react';
import '../styles/About.css';


const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate <strong>Front-End Developer</strong> with over <strong>2.8 years</strong> of experience in building
            modern, responsive, and interactive web applications. My core expertise lies in <strong>React.js</strong>, 
            <strong> Next.js</strong>, <strong>TypeScript</strong>, <strong>HTML</strong>, and <strong>CSS</strong>, where I focus 
            on delivering seamless and accessible user experiences.
          </p>
          <p>
            I have hands-on experience integrating RESTful APIs, managing complex application states using <strong>Redux </strong> 
             and <strong>React Context</strong>, and writing maintainable, testable code with <strong>Jest.js</strong>. 
            On the backend, I’ve worked with <strong>Nest.js</strong> to build scalable APIs and microservices, and I actively use 
            <strong> TypeScript</strong> across projects for type safety and improved developer experience.
          </p>
          <p>
            I’m a strong believer in clean code, collaboration, and continuous learning. I thrive in fast-paced environments 
            where I work closely with designers, developers, and stakeholders to transform ideas into impactful digital products. 
            Whether it’s optimizing performance, designing reusable components, or architecting new features from scratch, I bring 
            focus, creativity, and quality to every line of code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;