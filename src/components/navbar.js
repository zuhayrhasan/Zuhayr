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
    const footer = svh*0.6;
    const safety = svh*1;

    const photosPos = svh*1.5-safety;
    const cinemaPos = fullHeight-svh*2.4-footer-safety;
    const contactPos = fullHeight-svh*1.5-footer-safety;

    const glider = document.querySelector('.glider');
    const HomeIcon = document.querySelector('.home-icon');
    const PhotoIcon = document.querySelector('.photo-icon');
    const VideoIcon = document.querySelector('.video-icon');
    const ContactIcon = document.querySelector('.contact-icon');

    if (isMobile && glider) {
      if (currentScrollY < photosPos) {
        glider.style.transform = 'translateX(-240%)';
        HomeIcon.classList.add('selected-icon');
    
        // Remove the "selected-icon" class from other elements
        PhotoIcon.classList.remove('selected-icon');
        VideoIcon.classList.remove('selected-icon');
        ContactIcon.classList.remove('selected-icon');
      } else if (currentScrollY < cinemaPos) {
        glider.style.transform = 'translateX(-82%)';
        PhotoIcon.classList.add('selected-icon');
    
        // Remove the "selected-icon" class from other elements
        HomeIcon.classList.remove('selected-icon');
        VideoIcon.classList.remove('selected-icon');
        ContactIcon.classList.remove('selected-icon');
      } else if (currentScrollY < contactPos) {
        glider.style.transform = 'translateX(78%)';
        VideoIcon.classList.add('selected-icon');
    
        // Remove the "selected-icon" class from other elements
        HomeIcon.classList.remove('selected-icon');
        PhotoIcon.classList.remove('selected-icon');
        ContactIcon.classList.remove('selected-icon');
      } else {
        glider.style.transform = 'translateX(240%)';
        ContactIcon.classList.add('selected-icon');
    
        // Remove the "selected-icon" class from other elements
        HomeIcon.classList.remove('selected-icon');
        PhotoIcon.classList.remove('selected-icon');
        VideoIcon.classList.remove('selected-icon');
      }
    }
    

  };

  render() {
    const { isNavHidden } = this.state;

    return (
      <nav id="navbar" class={"navbar" + (isNavHidden ? " hidden" : "")}>
        <ul class="nav-list section-tabs">
          <li><a id="home-icon" class="selected-icon home-icon option" href="#landing-page"><span class="tab-text">Home</span></a></li>
          <li><a id="photos-icon" class="photo-icon option" href="#skills-page"n><span class="tab-text">Skills</span></a></li>
          <li><a id="video-icon" class="video-icon option" href="#projects-page"><span class="tab-text">Projects</span></a></li>
          <li><a id="contact-icon" class="contact-icon option" href="#experience-page"><span class="tab-text">Experience</span></a></li>
          <li><a id="contact-icon" class="contact-icon option" href="#contact-page"><span class="tab-text">Contact</span></a></li>
        </ul>
        <span class="glider"></span>
      </nav>
    );

  }
}

export default NavBar;