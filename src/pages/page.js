import React, { useState, useEffect } from 'react';
import Header from '../components/header.js';
import '../styles/landingpage.css';
import '../styles/projectspage.css';

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
      </>
    );
}

export default Page;