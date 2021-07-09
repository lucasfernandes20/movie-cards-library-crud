import React from 'react';
import Nav from './Nav';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="movie-card-header">
          <Link to="/">
          <img className="header-image" src="../images/CineSimbol.png" alt="Projetor" />
          </Link>
          <h1 className="page-title">Movie Card Library CRUD</h1>
        </header>
        <Nav />
      </>
    );
  }
}

export default Header;
