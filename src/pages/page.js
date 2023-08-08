import React, { useState, useEffect } from 'react';

import Header from '../components/header.js';
import Project from '../components/project.js';

import '../styles/landingpage.css';
import '../styles/projectspage.css';
import '../styles/experiencepage.css';
import '../styles/skillspage.css';
import '../styles/contactpage.css';
 

/* Skills */
import JavaScript from '../images/frontend/JavaScript.png';
import ReactLogo from '../images/frontend/React.png';
import HTML from '../images/frontend/HTML.png';
import CSS from '../images/frontend/CSS.png';

import Ruby from '../images/backend/Ruby.png';
import Python from '../images/backend/Python.png';
import CSharp from '../images/backend/C#.png';
import Firebase from '../images/backend/Firebase.png';
import MySQL from '../images/backend/MySQL.png';
import Postgres from '../images/backend/Postgres.png';

import Lloyd from '../images/projects/Lloyd.png';
import StudyNote from '../images/projects/StudyNote.png';
import VisualizeFootball from '../images/projects/VisualizeFootball.png';
import OddsOn from '../images/projects/OddsOn.png';
import SpotifAI from '../images/projects/SpotifAI.png';


const Page = () => {

    var projectLink = null;
    // On Load
    useEffect(() => {

        // Trigger lazy loading for each .column-image element
        // Query-select all headers with the class name "header"
        const headers = document.querySelectorAll('.header');

        // Do whatever you want with the headers
        headers.forEach((header) => {
            // For example, you can add a class to each header
            header.classList.add('header-loaded');
        });

        const mainText = document.querySelector(".main-text");
        const subText = document.querySelector(".sub-text");
        const boxText = document.querySelector(".box-text");
        const smallParagraph = document.querySelector(".small-paragraph");

        mainText.classList.add("main-text-loaded");
        subText.classList.add("sub-text-loaded");
        boxText.classList.add("box-text-loaded");
        smallParagraph.classList.add("small-paragraph-loaded");
    }, []);

    return (
      <>

        <section id="landing-page" class="landing-page">
            <div class="landing-cont">
                <h1 class="main-text">Zuhayr Hasan</h1>
                <div class="space"></div>
                <h2 class="sub-text">Software Engineer</h2>
                <div class="big-space"></div>
                <div class="box-text">
                    <Header id="header" HeaderName="About Me" delay="2500"></Header>
                    <p class="small-paragraph">As a recent <span class="underline-text">Software Engineering</span> graduate, I'm passionate about creating impactful solutions and bringing my ideas to life. My expertise lies in <span class="underline-text">JavaScript</span>, <span class="underline-text">React</span>, and <span class="underline-text">RESTful APIs</span>. With a track record of success during my internship and collaborative spirit, I <span class="underline-text">thrive</span> in team environments and eagerly embrace opportunities to expand my skillset and become a <span class="underline-text">better developer</span>.</p>
                </div>
               </div>
        </section>


        <section id="skills-page" class="skills-page">
            <Header id="header" HeaderName="Skills" delay="2500"></Header>
            <div class="skills-cont">
                <div class="skills-text-cont">
                    <p class="skills-text">
                        In my four-year <span class="underline-text">Software Engineering</span> undergrad, I delved into pivotal courses, including:
                    <div class="skills-list">
                        <ul>
                            <li>Algorithms and Data Structures</li>
                            <li>Database Management Systems</li>
                            <li>Web Technologies</li>
                            <li>Information Security</li>
                        </ul>
                    </div>
                        Through these classes, I acquired a <span class="underline-text">spectrum of skills</span> including JavaScript, React, HTML, CSS, Python, and SQL.
                        However, I want to continue to further <span class="underline-text">expand my horizons</span> in the realm of software development.
                    </p>
                </div>
                <div className="skills-display-cont">
                    <h3 className="image-row-title">Front-End Skills</h3>
                    <div className="image-row last">
                        <img src={JavaScript} alt="JavaScript Logo" />
                        <img src={ReactLogo} alt="React Logo" />
                        <img src={HTML} alt="HTML Logo" />
                        <img src={CSS} alt="CSS Logo" />
                    </div>
                    <h3 className="image-row-title">Back-End Skills</h3>
                    <div className="image-row">
                        <img src={Ruby} alt="Ruby Logo" />
                        <img src={Python} alt="Python Logo" />
                        <img src={CSharp} alt="C# Logo" />
                        <img src={Firebase} alt="Firebase Logo" />
                        <img src={MySQL} alt="MySQL Logo" />
                        <img src={Postgres} alt="PostgreSQL Logo" />
                    </div>
                </div>
            </div>
        </section>


        <section id="projects-page" class="projects-page">
            <Header id="header" HeaderName="Projects" delay="2500"></Header>
            <div class="display-projects">
                <Project
                    projectName="Lloyd Portfolio"
                    projectImage={Lloyd}
                    projectDesc="A mockup project for Photographer Lloyd Wakefield. Using strategies like lazy loading, I was able to create an efficient website with over 20 images and 8 videos."
                    projectTech= {["JavaScript", "React"]}
                    projectLink= {'https://lloydwakefield.netlify.app/'}
                />
                <Project
                    projectName="StudyNote"
                    projectImage={StudyNote}
                    projectDesc="Your one stop shop for school notes. Whether you are a professor wanting to create organized classes class as a professor or share your notes as a student, this is the website for you."
                    projectTech= {["JavaScript", "MySQL", "React"]}
                    projectLink= {'https://studynote.ca/'}
                />
                <Project
                    projectName="VisualizeFootball"
                    projectImage={VisualizeFootball}
                    projectDesc="Compare your favourite players using over 25 statistics, each cateogrized by different roles and positions. Fetch data from Europe's top 5 leagues dating all the way back to the 2010/11 season."
                    projectTech= {["JavaScript", "Football API", "React"]}
                />
                <Project
                    projectName="OddsOn"
                    projectImage={OddsOn}
                    projectDesc="Make informed decisions on Europe's top 5 leagues based off of real time football statistics. Compare players' ingame performances and see who has been the player on that day!"
                    projectTech= {["JavaScript", "React", "Football API", "HTML", "CSS"]}
                    projectLink= {null}
                />
                <Project
                    projectName="SpotifAI"
                    projectImage={SpotifAI}
                    projectDesc="Quickly create and save a Spotify playlist simply based off a phrase! Using OpenAI's API, you are able to generate a playlist given a mood, feeling, or even situation."
                    projectTech= {["JavaScript", "Spotify API", "OpenAI API", "React"]}
                    projectLink= {null}
                />
            </div>
        </section>


        <section id="experience-page" class="experience-page">
            <Header id="header" HeaderName="Experience" delay="2500"></Header>
            <div class="experience-cont">
                <h3 class="h3-underline-text">Equestrian Show Manager</h3>
                <h5>May 2022 — August 2022</h5>
                <div class="row-of-skills">
                    <h5 class="skill">Ruby</h5>
                    <h5 class="skill">Ruby on Rails</h5>
                    <h5 class="skill">PostgreSQL</h5>
                    <h5 class="skill">Ubuntu</h5>
                </div>
                <div class="experience-text-box">
                    <p>Demonstrated <span class="underline-text">quick learning skills</span> by acquiring proficiency in Ruby within a week and successfully applying it to
                        accomplish various tasks, such as  <span class="underline-text">fetching accurate data</span> from PostgreSQL, <span class="underline-text">authenticating user information</span>, and <span class="underline-text"> creating logical</span> search queries</p>
                    <p><span class="underline-text">Collaborated</span> with a team of 4 engineers to <span class="underline-text">review and troubleshoot work</span>, leading to enhanced learning and
                        improved outcomes through teamwork</p>
                    <p>Re-organized 8 web pages and re-factored PDF reports using Ruby on Rails to create a <span class="underline-text">better user experience</span></p>
                </div>
            </div>
        </section>


        <section id="contact-page" class="contact-page">
            <Header id="header" HeaderName="Contact Me" delay="2500"></Header>
        </section>
        
      </>
    );
}

export default Page;