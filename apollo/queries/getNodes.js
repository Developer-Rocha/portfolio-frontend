import { gql } from "@apollo/client";

export const GET_NODES = gql`
	query nodes($langcode: String!) {
        nodes: nodeQuery(
        filter: {
            conditions: [
                {
                field: "type",
                value: ["page"],
                operator: EQUAL,
                },
                {
                field: "status",
                value: "1",
                            operator: EQUAL
                },
                # The langcode needs to be converted to String and passed as a parameter $lang
                {
                field: "langcode",
                value: [$langcode],
                operator:EQUAL
                }
            ]
            }
        ){
            entities{
            url: entityUrl {
                path
            }

            ... on NodePage {
                translation: entityTranslation(language: PT_PT) {
                    url: entityUrl {
                    path
                }
                }
            }
            }
        }
    }
`;
