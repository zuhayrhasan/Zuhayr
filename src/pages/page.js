import React, { useState, useEffect } from 'react';
import Header from '../components/header.js';
import '../styles/landingpage.css';
import '../styles/projectspage.css';
import '../styles/experiencepage.css';
import '../styles/skillspage.css';
import '../styles/contactpage.css';

const Page = () => {

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
        <section id="projects-page" class="projects-page">
            <Header id="header" HeaderName="Projects" delay="2500"></Header>
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
        <section id="skills-page" class="skills-page">
            <Header id="header" HeaderName="Skills" delay="2500"></Header>
        </section>
        <section id="contact-page" class="contact-page">
            <Header id="header" HeaderName="Contact Me" delay="2500"></Header>
        </section>
        
      </>
    );
}

export default Page;