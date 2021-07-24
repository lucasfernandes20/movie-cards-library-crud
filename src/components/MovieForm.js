import React from 'react';
import PropTypes from 'prop-types';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div className="input-container">
        <label htmlFor="movie_title">
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate"
            value={ title }
            onChange={ (event) => this.updateMovie('title', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div className="input-container">
        <label htmlFor="movie_subtitle">
          <input
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            className="validate"
            value={ subtitle }
            onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="input-container">
        <label htmlFor="movie_image">
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            value={ imagePath }
            className="validate"
            onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div className="input-container">
        <label htmlFor="movie_storyline">
          <textarea
            id="movie_storyline"
            value={ storyline }
            className="validate"
            placeholder="Insira a sinospe do filme"
            rows="4"
            maxLength="185"
            onChange={ (event) => this.updateMovie('storyline', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <div className="input-container">
        <label htmlFor="movie_genre">
          <select
            id="movie_genre"
            value={ genre }
            className="validate"
            onChange={ (event) => this.updateMovie('genre', event.target.value) }
          >
            <option className="validate-option" value="action">Ação</option>
            <option className="validate-option" value="comedy">Comédia</option>
            <option className="validate-option" value="thriller">Suspense</option>
            <option className="validate-option" value="fantasy">Fantasia</option>
          </select>
          Gênero
        </label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <div className="input-container">
        <label htmlFor="movie_rating">
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            step={ 0.1 }
            className="validate"
            min={ 0 }
            max={ 5 }
            value={ rating }
            onChange={ (event) => this.updateMovie('rating', event.target.value) }
          />
          Avaliação
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <button
          type="button"
          className="form-button"
          onClick={ this.handleSubmit }
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="form">
        <form autocomplete="off">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }),
};

MovieForm.defaultProps = {
  movie: undefined,
};

export default MovieForm;
