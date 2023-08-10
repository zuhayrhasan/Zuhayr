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

    const svh = document.documentElement.clientHeight;
    const fullHeight = document.documentElement.offsetHeight;
    const safety = svh/2;
    const footer = svh*0.4;

    const skillsPos = svh - safety;
    const projectsPos = skillsPos + svh;

    const contactPos = fullHeight - (svh*1.8 + footer + safety);
    const experiencePos = contactPos - svh;

    const glider = document.querySelector('.glider');
    const HomeIcon = document.querySelector('.home-icon');
    const SkillsIcon = document.querySelector('.skills-icon');
    const ProjectsIcon = document.querySelector('.projects-icon');
    const ExperienceIcon = document.querySelector('.experience-icon');
    const ContactIcon = document.querySelector('.contact-icon');

    function setActiveSection(sectionName, transformValue) {
      glider.style.transform = transformValue;
  
      const iconMapping = {
          'home': HomeIcon,
          'skills': SkillsIcon,
          'projects': ProjectsIcon,
          'experience': ExperienceIcon,
          'contact': ContactIcon,
      };
  
      Object.keys(iconMapping).forEach(icon => {
          if (icon === sectionName) {
              iconMapping[icon].classList.add('selected-icon');
          } else {
              iconMapping[icon].classList.remove('selected-icon');
          }
      });
  }

    if (isMobile && glider) {
      if (currentScrollY < skillsPos) {
          setActiveSection('home', 'translateX(-256%)');
      } else if (currentScrollY < projectsPos) {
          setActiveSection('skills', 'translateX(-132%)');
      } else if (currentScrollY < experiencePos) {
          setActiveSection('projects', 'translateX(-4%)');
      } else if (currentScrollY < contactPos) {
          setActiveSection('experience', 'translateX(126%)');
      } else {
          setActiveSection('contact', 'translateX(254%)');
      }
    }

  };

  render() {
    const { isNavHidden } = this.state;

    return (
      <nav id="navbar" class={"navbar" + (isNavHidden ? " hidden" : "")}>
        <ul class="nav-list section-tabs">
          <li><a id="home-icon" class="selected-icon home-icon option" href="#home"><span class="tab-text">Home</span></a></li>
          <li><a id="skills-icon" class="skills-icon option" href="#skills"n><span class="tab-text">Skills</span></a></li>
          <li><a id="projects-icon" class="projects-icon option" href="#projects"><span class="tab-text">Projects</span></a></li>
          <li><a id="experience-icon" class="experience-icon option" href="#experience"><span class="tab-text">Experience</span></a></li>
          <li><a id="contact-icon" class="contact-icon option" href="#contact"><span class="tab-text">Contact</span></a></li>
        </ul>
        <span class="glider"></span>
      </nav>
    );

  }
}

export default NavBar;