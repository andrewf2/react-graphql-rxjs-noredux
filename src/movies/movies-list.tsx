import * as React from 'react';
import { MovieTools } from './movie-tools';

export const MovieList = ({ movies, onMovieEdited, onMovieRemoved }) => {
	return movies.map((movie: any) => (
		<div key={movie.id}>
			<span className="movie-name">{movie.name} </span>
			<MovieTools key={movie.id} movie={movie} onEdit={onMovieEdited} onRemove={onMovieRemoved} />
		</div>
	));
};
