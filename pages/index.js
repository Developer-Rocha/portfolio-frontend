import styled from "styled-components";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.primary};
`;

export default function Home(props) {
	return (
		<div>
			<Header />
			<Hero />
			<Services />
		</div>
	);
}

export async function getStaticProps() {
	const gitHubResponse = await fetch(
		"https://api.github.com/users/Developer-Rocha"
	).then((res) => res.json());

	return {
		props: {
			avatar_url: gitHubResponse.avatar_url,
		},
	};
}
