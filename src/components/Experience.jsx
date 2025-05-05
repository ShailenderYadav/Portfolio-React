import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="timeline">

        {/* FMI Project at Jellyfish */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Software Engineer - Frontend</h3>
            <p className="company">Jellyfish Technologies Pvt. Ltd., Noida, India</p>
            <p className="date">Nov 2022 - Feb 2025</p>
            <ul>
              <li>Developed FMI, a facility maintenance application for managing multi-property organizations with technician and subcontractor support.</li>
              <li>Implemented a recurring ticket feature UI using Cron for automating routine task scheduling.</li>
              <li>Built an interactive map-based feature using React Context API to visualize stores, work orders, and nearby vendors for faster task allocation.</li>
              <li>Designed reusable UI components and used Redux for scalable state management.</li>
              <li>Refactored filters using <code>useReducer</code> for improved state handling over multiple <code>useState</code> hooks.</li>
              <li>Wrote unit tests with Jest.js to maintain high code quality and reliability.</li>
              <li>Implemented a real-time form using Socket.IO that appears every 5 minutes for actionable data entry.</li>
              <li>Integrated API services using Axios to enable seamless backend communication.</li>
            </ul>
          </div>
        </div>

        {/* Visitor and Recruiter Management System */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Software Engineer - Full Stack</h3>
            <p className="company">Jellyfish Technologies Pvt. Ltd., Noida, India</p>
            <p className="date">Aug 2022 - Nov 2022</p>
            <ul>
              <li>Developed an intuitive HR management interface for creating job openings and managing candidate data.</li>
              <li>Implemented role-based authentication for secure and personalized user access.</li>
              <li>Built dynamic user interfaces to streamline HR workflows and improve efficiency.</li>
              <li>Integrated Google Meet and Zoom APIs for interview scheduling and automated email invitations.</li>
            </ul>
          </div>
        </div>

        {/* Initial Experience Summary (if you still want to include it) */}
        {/* <div className="timeline-item">
          <div className="timeline-content">
            <h3>Front-End Developer</h3>
            <p className="date">2021 - Present</p>
            <ul>
              <li>Developed responsive web applications using React.js</li>
              <li>Integrated RESTful APIs and optimized application performance</li>
              <li>Collaborated with clients to gather and implement requirements</li>
              <li>Wrote unit tests using Jest and maintained code quality</li>
            </ul>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default Experience;
