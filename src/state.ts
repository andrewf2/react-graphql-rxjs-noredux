import { Movie } from './movies/movie';

export class AppState {
	movies: Movie[];
	constructor() {
		this.movies = [];
	}
}