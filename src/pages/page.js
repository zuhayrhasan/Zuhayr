import React, { useState, useEffect } from 'react';


// Files
import ZHResume from '../files/Zuhayr Hasan Resume.pdf';

// Components
import Header from '../components/header.js';
import Project from '../components/project.js';

// CSS
import '../styles/page.css';
import '../styles/homepage.css';
import '../styles/projectspage.css';
import '../styles/experiencepage.css';
import '../styles/skillspage.css';
import '../styles/contactpage.css';
import '../styles/footer.css';
 

// Skills
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

// Icons
import OpenLink from '../images/icons/OpenLink.png';
import LinkedIn from '../images/socials/LinkedIn.png';
import GitHub from '../images/socials/GitHub.png';

const Page = () => {
    const [showLanding, setShowLanding] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const [showContact, setShowContact] = useState(false);

    useEffect(() => {

        const headers = document.querySelectorAll('.header');

        headers.forEach((header) => {
            header.classList.add('header-loaded');
        });

        const mainText = document.querySelector(".main-text");
        const subText = document.querySelector(".sub-text");
        const boxText = document.querySelector(".box-text");
        const resume = document.querySelector(".resume");
        const smallParagraph = document.querySelector(".small-paragraph");

        mainText.classList.add("main-text-loaded");
        subText.classList.add("sub-text-loaded");
        boxText.classList.add("box-text-loaded");
        resume.classList.add("resume-loaded");
        smallParagraph.classList.add("small-paragraph-loaded");
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('.section');

        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    if (sectionId == "home") { setShowLanding(true); }
                    if (sectionId == "skills") { setShowSkills(true); }
                    if (sectionId == "projects") { setShowProjects(true); }
                    if (sectionId == "experience") { setShowExperience(true); }
                    if (sectionId == "contact") { setShowContact(true); }
                
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 }); // Adjust the threshold

        sections.forEach(section => {
            sectionObserver.observe(section);
        });

        return () => {

            sections.forEach(section => {
                sectionObserver.unobserve(section);
            });
        };
    }, []);

    return (
      <>

        <section id="home" class="home-page section">
            <div class="home-cont">
                <h1 class="main-text">Zuhayr Hasan</h1>
                <div class="small-space"></div>
                <h2 class="sub-text">Software Engineer</h2>
                <div class="small-space"></div>
                <div class="resume">
                    <a href={ZHResume} target="_blank">
                        <button>
                            Resume
                        </button>
                    </a>
                </div>
                <div class="small-space"></div>
                <div class="box-text">
                    <Header id="header" HeaderName="About Me" delay="2500" visible={showLanding}></Header>
                    <p class="small-paragraph">As a recent <span class="underline-text">Software Engineering</span> graduate, I'm passionate about creating impactful solutions and bringing my ideas to life. My expertise lies in <span class="underline-text">JavaScript</span>, <span class="underline-text">React</span>, and <span class="underline-text">RESTful APIs</span>. With a track record of success during my internship and collaborative spirit, I <span class="underline-text">thrive</span> in team environments and eagerly embrace opportunities to expand my skillset and become a <span class="underline-text">better developer</span>.</p>
                </div>
               </div>
        </section>


        <section id="skills" class="skills-page section">
            <div class="big-space"></div>
            <Header id="header" HeaderName="Skills" delay="0" visible={showSkills}></Header>
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


        <section id="projects" class="projects-page section">
            <div class="big-space"></div>
            <Header id="header" HeaderName="Projects" delay="0" visible={showProjects}></Header>
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
                    projectDesc="Compare your favourite players using over 25 statistics, each categorized by different roles and positions. Fetch data from Europe's top 5 leagues dating all the way back to the 2010/11 season."
                    projectTech= {["JavaScript", "Football API", "ChartJS", "React"]}
                />
                <Project
                    projectName="OddsOn"
                    projectImage={OddsOn}
                    projectDesc="Make informed decisions on Europe's top 5 leagues based off of real time football statistics. Compare players' ingame performances and see who has been the player on that day!"
                    projectTech= {["JavaScript", "Football API", "React"]}
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

        <section id="experience" class="experience-page section">
            <div class="big-space"></div>
            <Header id="header" HeaderName="Experience" delay="0" visible={showExperience}></Header>
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


        <section id="contact" class="contact-page section">
            <div class="big-space"></div>
            <Header id="header" HeaderName="Contact Me" delay="0" visible={showContact}></Header>
            <div class="contact-cont">
                <div class="contact-text-cont">
                    <div class="contact-text">
                        <p>
                            With an unwavering commitment to my craft, I'm <span class="underline-text">actively pursuing full-time opportunities</span> to contribute my skills and enthusiasm to a dynamic team.
                        </p>
                        <p>
                            Don't hesitate to reach out; <span class="underline-text">let's connect</span> and make things happen!
                        </p>
                    </div>
                    <div class="socials">
                        <div class="socials-square socials-linkedin">
                            <img src={LinkedIn} alt="Zuhayr's LinkedIn"></img>
                            <a class="custom-link" href="https://www.linkedin.com/in/zuhayrhasan/" target="_blank" rel="noopener noreferrer">
                                <h4 class="socials-text">Connect</h4>
                            </a>
                        </div>
                        <div class="socials-square socials-github">
                            <img src={GitHub} alt="Zuhayr's GitHub"></img>
                            <a class="custom-link" href="https://github.com/zuhayrhasan/" target="_blank" rel="noopener noreferrer">
                                <h4 class="socials-text">Projects</h4>
                            </a>
                        </div>

                    </div>
                </div>
                <div class="contact-form-cont">
                    <div class="contact-me-container">
                        <h3 class="contact-underline-text" style={{ color: 'var(--primary)', fontSize: '25px', marginBottom: '5px'}}>
                            Send me a Message
                        </h3>

                        <form target="_blank" action="https://formsubmit.co/zuhayrshasan@gmail.com" method="POST" class="contact-me-form darkgrey-text">
                        <label photos_section="to">To:</label>
                        <input type="text" id="to" name="to" value="zuhayrshasan@gmail.com" readOnly/>

                        <label photos_section="name">From:</label>
                        <input type="text" id="from" name="name" pattern="[A-Za-z ]{2,}" placeholder="First Last" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="example@gmail.com" required />

                        <label photos_section="message">Message:</label>
                        <textarea id="message" name="message" pattern=".{3,}" placeholder="I would like to hire you!" required></textarea>

                        <div>
                            <button type="submit">
                                Send Message
                            </button>
                        </div>


                        </form>

                    </div>
                </div>
            </div>
        </section>

        <footer>
            <div class="footer-text">
                <h2>Zuhayr Hasan</h2>
                <div class="small-space"></div>
                <ul class="footer-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <p>© 2023 Zuhayr Hasan. All rights reserved.</p>
            </div>
        </footer>
        
      </>
    );
}

export default Page;