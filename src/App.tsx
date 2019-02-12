/* tslint:disable */
import * as React from 'react';
import './App.css';
import { Query } from 'react-apollo';
import { getMovies } from './movies/movie.queries';
import { MoviesContainer } from './movies/movies-container';
import { store } from './store';

class App extends React.Component {
	public render() {
		return (
			<div className="App">
				<Query query={getMovies()}>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...</p>;
						if (error) return <p>Error :(</p>;
						store.dispatch({ movies: data.movies });
						return <MoviesContainer />;
					}}
				</Query>
			</div>
		);
	}
}

export default App;
