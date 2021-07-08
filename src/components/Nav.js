import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/movies/new">Adicionar filme</Link>
          <Link className="nav-link" to="/user">Minha Conta</Link>
      </nav>
    );
  }
}

export default Nav;