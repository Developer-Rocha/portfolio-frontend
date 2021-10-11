import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://portfolio.lndo.site/graphql",
	cache: new InMemoryCache(),
});

export default client;
