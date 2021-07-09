import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import './NewMovie.css'

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldReturn: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    const { createMovie } = movieAPI;
    createMovie(newMovie);
    this.setState({
      shouldReturn: true,
    });
  }

  render() {
    const { shouldReturn } = this.state;

    if (shouldReturn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="form-new-movie" data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
