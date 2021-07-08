import React from 'react';
import Nav from './Nav';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="movie-card-header">
          <img className="header-image" src="images/CineSimbol.png" alt="Projetor" />
          <h1 className="page-title">Movie Card Library CRUD</h1>
        </header>
        <Nav />
      </>
    );
  }
}

export default Header;