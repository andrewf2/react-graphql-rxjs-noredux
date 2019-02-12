import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

export namespace QueryClient {
	let client: ApolloClient<any>;

	export const get = (): ApolloClient<any> => {
		if(client) {
			return client;
		}

		const link = createHttpLink({
			uri: 'https://eu1.prisma.sh/andrew-ferguson-c15c4b/movies/dev',
		});

		client = new ApolloClient({
			cache: new InMemoryCache(),
			link,
		});

		return client;
	};

	export const createQuery = (query:string) => {
		return gql`${query}`
	};
}

