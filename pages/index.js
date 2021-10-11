import { useEffect, useState } from "react";
import styled from "styled-components";
import AOS from "aos";

// Components
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";

//API
import client from "../lib/apollo/apolloClient";
import { GET_HOME } from "../lib/apollo/queries/getHome";

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.primary};
`;

export default function Home(props) {
	const [state, setState] = useState(props.nodeInfo);

	useEffect(() => {
		// here you can add your aos options
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true,
			mirror: false,
		});
	}, []);

	return (
		<>
			<div>
				<Header />

				<Hero title={state.page.title} />

				<Services />
			</div>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: GET_HOME,
		variables: {
			language: "EN",
			id: 1,
		},
	});

	return {
		props: {
			nodeInfo: data,
		},
	};
}
