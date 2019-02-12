import { QueryClient } from '../query.util';

export const getMovies = () => {
	const moviesQuery =  QueryClient.createQuery(`{
			movies {
				id
				name
			}
		}`);
	return moviesQuery;
};


export const addMovie = (movie) => {
	const addMovieMutation = QueryClient.createQuery(`mutation {
  createMovie(data: {
    name: ${movie.name}
  }) {
    id
  }
}`);
	return QueryClient.get().mutate({mutation: addMovieMutation})
};


export const removeMovie = (movie) => {
	const removeMovieMutation = QueryClient.createQuery(`mutation {
  removeMovie(data: {
    id: ${movie.id}
  }) {
    id
  }
}`);
	return QueryClient.get().mutate({mutation: removeMovieMutation})
};