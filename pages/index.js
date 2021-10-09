import styled from "styled-components";
import Header from "../components/Header";

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.primary};
`;

export default function Home(props) {
	return (
		<div>
			<Header />
			<section>
				<Title>My page</Title>
				<img src={props.avatar_url} />
			</section>
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
