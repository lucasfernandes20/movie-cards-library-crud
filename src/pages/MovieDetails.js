import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import './MovieDetails.css';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      load: true,
    };
  }

  componentDidMount() {
    this.findMovie();
  }

  findMovie = async () => {
    const { getMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    const filme = await getMovie(id);
    this.setState({
      movie: { ...filme },
      load: false,
    });
  }

  removeMovie = (title) => {
    const { deleteMovie } = movieAPI;
    deleteMovie(title);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { load } = this.state;

    if (load) {
      return <Loading />;
    }
    return (
      <div className="details-content" data-testid="movie-details">
        <div className="img-content">
          <img className="image-hero" alt="Movie Cover" src={imagePath} />
          <div className="fade-img"></div>
        </div>
        <div className="info-details">
          <h4 className="title-detail">{title}</h4>
          <p className="subtitle-detail">{subtitle}</p>
          <p className="storyline-detail">{ `Storyline: ${storyline}` }</p>
          <p className="genre-detail">{ `Genre: ${genre}` }</p>
          <p className="rating-detail">{ `Rating: ${rating}` }</p>
          <div className="buttons-detail">
            <Link className="edit-btn" to={ `/movies/${title}/edit` }>EDITAR</Link>
            <Link className="back-btn" to="/">VOLTAR</Link>
            <Link className="rm-btn" onClick={ () => this.removeMovie(title) } to="/">DELETAR</Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
};

export default MovieDetails;
