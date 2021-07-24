import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
          <Link className="nav-link" to="/"><i class="bi bi-house-fill"></i>Home</Link>
          <Link className="nav-link" to="/movies/new"><i class="bi bi-plus-square-fill"></i>Adicionar filme</Link>
          <Link className="nav-link" to="/user"><i class="bi bi-person-circle"></i>Minha Conta</Link>
      </nav>
    );
  }
}

export default Nav;