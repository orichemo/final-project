import './About.css';
import React from 'react';
import aboutAothor from '../../images/aboutAothor.png';

function About() {
  return (
    <section className='about'>
      <img src={aboutAothor} alt='profile author' className='about__image' />
      <div className='about__content'>
        <h2 className='about__header'>About me</h2>
        <p className='about__paragraph'>
          I'm Ori, a Math teacher by training and currently I'm engaged in
          photographing study materials for a well known website for students in
          Israel. I have always had passion for technology and I took the
          Practicum course in order to make my dream come true.
        </p>
        <p className='about__paragraph'>
          In Practicum Iv'e chieved many tools, learning skills, time
          management, and a wide variety of technologies, as well as familiarity
          with the marketing job nature. During the course, I've strongly felt
          that my self learning ability, my passion for challenges and
          curiosity, together with my very high work nature, make me the best
          candidate for the job.
        </p>
      </div>
    </section>
  );
}

export default About;
