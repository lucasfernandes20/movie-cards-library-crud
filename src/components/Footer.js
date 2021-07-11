import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-content">
        <h3 className="footer-message">
          Conteúdo de projeto da Trybe® com confecção e adições de <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/lucasfernandesreis/">Lucas Fernandes</a>
        </h3>
      </footer>
    );
  }
}

export default Footer;
