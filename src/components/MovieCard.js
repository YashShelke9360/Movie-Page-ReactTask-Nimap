import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Image, Button } from 'react-bootstrap';
import '../App.css';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie }) => {
  return (
    <Col key={movie.id} className="d-flex flex-column align-items-center movie-col">
      <Image src={`${IMAGE_URL}${movie.poster_path}`} rounded className="mb-2 movie-poster" />
      <h3 className="movie-title">{movie.title}</h3>
      <p>Rating: {movie.vote_average}</p>
      <Link to={`/movie/${movie.id}`}>
        <Button variant="dark">View Details</Button>
      </Link>
    </Col>
  );
};

export default MovieCard;
