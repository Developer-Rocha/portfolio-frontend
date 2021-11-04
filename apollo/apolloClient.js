import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	ssrMode: true,
	link: createHttpLink({
		uri: process.env.API_URL,
		credentials: 'same-origin',
	  }),
	cache: new InMemoryCache(),
});

export default client;
