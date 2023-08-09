import React, { Component } from 'react';
import '../styles/nav.css'

class NavBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isNavHidden: false,
      lastScrollY: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {

    // Hide Nav with Scroll
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      this.setState({ isNavHidden: true });
    } else if (currentScrollY < lastScrollY) {
      this.setState({ isNavHidden: false });
    }

    this.setState({ lastScrollY: currentScrollY });

    // Mobile Set buttons active
    const isMobile = window.innerWidth <= 768;

    const fullHeight = document.documentElement.offsetHeight;
    const svh = document.documentElement.clientHeight;

    const safety = svh/2;

    const skillsPos = svh - safety;
    const projectsPos = skillsPos + svh;
    const experiencePos = projectsPos + svh*1.8;
    const contactPos = experiencePos + svh;

    const glider = document.querySelector('.glider');
    const HomeIcon = document.querySelector('.home-icon');
    const SkillsIcon = document.querySelector('.skills-icon');
    const ProjectsIcon = document.querySelector('.projects-icon');
    const ExperienceIcon = document.querySelector('.experience-icon');
    const ContactIcon = document.querySelector('.contact-icon');

    if (isMobile && glider) {
      if (currentScrollY < skillsPos) {
        glider.style.transform = 'translateX(-256%)';
        HomeIcon.classList.add('selected-icon');
    
        // Remove the "selected-icon" class from other elements
        SkillsIcon.classList.remove('selected-icon');
        ProjectsIcon.classList.remove('selected-icon');
        ExperienceIcon.classList.remove('selected-icon');
        ContactIcon.classList.remove('selected-icon');
      } else if (currentScrollY < projectsPos) {
        glider.style.transform = 'translateX(-132%)';
        SkillsIcon.classList.add('selected-icon');
    
        // Remove the "selected-icon" class from other elements
        HomeIcon.classList.remove('selected-icon');
        ProjectsIcon.classList.remove('selected-icon');
        ExperienceIcon.classList.remove('selected-icon');
        ContactIcon.classList.remove('selected-icon');
      } else if (currentScrollY < experiencePos) {
        glider.style.transform = 'translateX(-4%)';
        ProjectsIcon.classList.add('selected-icon');
    
        // Remove the "selected-icon" class from other elements
        HomeIcon.classList.remove('selected-icon');
        SkillsIcon.classList.remove('selected-icon');
        ExperienceIcon.classList.remove('selected-icon');
        ContactIcon.classList.remove('selected-icon');
      } else if (currentScrollY < contactPos) {
        glider.style.transform = 'translateX(126%)';
        ExperienceIcon.classList.add('selected-icon');
    
        // Remove the "selected-icon" class from other elements
        HomeIcon.classList.remove('selected-icon');
        SkillsIcon.classList.remove('selected-icon');
        ProjectsIcon.classList.remove('selected-icon');
        ContactIcon.classList.remove('selected-icon');
      } else {
        glider.style.transform = 'translateX(254%)';
        ContactIcon.classList.add('selected-icon');
    
        // Remove the "selected-icon" class from other elements
        HomeIcon.classList.remove('selected-icon');
        SkillsIcon.classList.remove('selected-icon');
        ProjectsIcon.classList.remove('selected-icon');
        ExperienceIcon.classList.remove('selected-icon');
      }
    }
    

  };

  render() {
    const { isNavHidden } = this.state;

    return (
      <nav id="navbar" class={"navbar" + (isNavHidden ? " hidden" : "")}>
        <ul class="nav-list section-tabs">
          <li><a id="home-icon" class="selected-icon home-icon option" href="#landing-page"><span class="tab-text">Home</span></a></li>
          <li><a id="skills-icon" class="skills-icon option" href="#skills-page"n><span class="tab-text">Skills</span></a></li>
          <li><a id="projects-icon" class="projects-icon option" href="#projects-page"><span class="tab-text">Projects</span></a></li>
          <li><a id="experience-icon" class="experience-icon option" href="#experience-page"><span class="tab-text">Experience</span></a></li>
          <li><a id="contact-icon" class="contact-icon option" href="#contact-page"><span class="tab-text">Contact</span></a></li>
        </ul>
        <span class="glider"></span>
      </nav>
    );

  }
}

export default NavBar;