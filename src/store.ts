import { BehaviorSubject, Observable } from 'rxjs';
import { AppState } from './state';
import { cloneDeep } from 'lodash';
import { Movie } from './movies/movie';

class AppStore {
	private stateSubject$ = new BehaviorSubject<AppState>(new AppState());
	public state$: Observable<AppState> = this.stateSubject$.asObservable();

	get() {
		return cloneDeep(this.stateSubject$.getValue());
	}

	addMovie(movie: Movie) {
		const state = this.stateSubject$.getValue();
		state.movies.push(movie);
		this.dispatch(state);
	}

	dispatch(data: AppState) {
		this.stateSubject$.next(cloneDeep(data));
	}

}

export const store = new AppStore();