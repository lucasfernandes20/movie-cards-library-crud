import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div className="not-found" data-testid="404-error">
        <h2>Pagina não encontrada</h2>
        <img src="https://media2.giphy.com/media/3oKIPdF5sBePN9DYFG/giphy.gif?cid=790b7611f2391e0fa5abc377fbc3a14f51fe041d187ea69a&rid=giphy.gif&ct=s" alt='oi' />
      </div>
    )}
}

export default NotFound;
