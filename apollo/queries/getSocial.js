import { gql } from "@apollo/client";

export const GET_SOCIAL = gql`
	query menuSocial($language: LanguageId!) {
		social: menuByName(name: "social", language: $language) {
			id: name
			links: links {
				label
				url {
					path
				}
			}
		}
	}
`;
