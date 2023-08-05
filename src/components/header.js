import React, { useState, useEffect } from 'react';
import '../styles/header.css';

const Header = ({ HeaderName, delay }) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    const targetText = HeaderName;

    const typingTimeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (currentIndex < targetText.length) {
          currentText += targetText[currentIndex];
          setTypedText(currentText);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 250); // Adjust the typing speed by changing the interval (milliseconds)

      return () => clearInterval(typingInterval); // Cleanup the interval on unmount
    }, delay); // 5 seconds delay before starting the typewriting effect

    return () => clearTimeout(typingTimeout); // Cleanup the timeout on unmount
  }, [HeaderName]);

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
