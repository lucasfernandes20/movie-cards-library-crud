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

  renderRatingIcon = (rating) => {
    console.log(rating)
    if(rating <= 2) {
      return <i class="bi bi-thermometer-low">Baixa</i> 
    } else if (rating > 2 && rating <= 4) {
      return <i class="bi bi-thermometer-half">Media</i>
    } else {
      return <i class="bi bi-thermometer-high">Em Alta</i>
    }
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
          <p className="storyline-detail">{ `Sinopse: ${storyline}` }</p>
          <p className="genre-detail">{ `Gênero: ${genre}` }</p>
          <p className="rating-detail">Relevância: { this.renderRatingIcon(rating) }</p>
          <div className="buttons-detail">
            <Link className="back-btn" to="/"><i class="bi bi-chevron-double-left"></i>VOLTAR</Link>
            <Link className="edit-btn" to={ `/movies/${title}/edit` }><i class="bi bi-pen-fill"></i>EDITAR</Link>
            <Link className="rm-btn" onClick={ () => this.removeMovie(title) } to="/"><i class="bi bi-trash-fill"></i>DELETAR</Link>
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
