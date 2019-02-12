import { MovieList } from './movies-list';
import * as React from 'react';
import { store } from '../store';
import { Subscription } from 'rxjs';
import { AppState } from '../state';
import { addMovie, removeMovie } from './movie.queries';
import { Movie } from './movie';
export class MoviesContainer extends React.Component {
	state: AppState = {
		movies: [],
	};
	subscription = new Subscription();

	componentDidMount(): void {
		this.subscription.add(
			store.state$.subscribe(state => {
				this.setState(state);
			})
		);
	}

	componentWillUnmount(): void {
		this.subscription.unsubscribe();
	}

	createMovie(movie: Movie) {
		//store.addMovie(movie);
		addMovie(movie).then(res => {
			console.log(res);
		});
	}

	editMovie(movie: Movie) {
		removeMovie(movie).then(res => console.log(res));
	}

	deleteMovie(movie: Movie) {
		removeMovie(movie).then(res => console.log(res));
	}

	render() {
		return (
			<div className="movieList">
				<MovieList
					movies={this.state.movies}
					onMovieEdited={this.editMovie}
					onMovieRemoved={this.deleteMovie}
				/>
				<button> Add new </button>
			</div>
		);
	}
}
