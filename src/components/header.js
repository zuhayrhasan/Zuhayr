import React, { useState, useEffect } from 'react';
import '../styles/header.css';

const Header = ({ HeaderName, delay, visible }) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (visible) {
      let currentText = '';
      let currentIndex = 0;
      const targetText = HeaderName;

      console.log('show');
  
      const typingTimeout = setTimeout(() => {
        const typingInterval = setInterval(() => {
          if (currentIndex < targetText.length) {
            currentText += targetText[currentIndex];
            setTypedText(currentText);
            currentIndex++;
          } else {
            clearInterval(typingInterval);
          }
        }, 250);
  
        return () => clearInterval(typingInterval);
      }, delay);
  
      return () => clearTimeout(typingTimeout);
    }

  }, [HeaderName, visible]);

  return (
    <h3 className="header">
      &lt;<span style={{ color: 'var(--div)' }}>h3 </span>
      <span style={{ color: 'var(--class)' }}>class</span>
      <span style={{ color: 'var(--equals)' }}>=</span>
      <span style={{ color: 'var(--quotes)' }}>"header"</span>&gt;
      <span class="header-name">{typedText}</span>&lt;
      <span style={{ color: 'var(--div)' }}>h3</span>&gt;
    </h3>
  );
};

export default Header;
