import { gql } from "@apollo/client";

export const GET_HOME = gql`
	query page($language: LanguageId!, $id: String!) {
		page: nodeById(language: $language, id: $id) {
			title
		}
	}
`;
