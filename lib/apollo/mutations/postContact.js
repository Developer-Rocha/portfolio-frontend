import { gql } from "@apollo/client";

export const POST_CONTACT = gql`
    mutation submit($values: String!) {
        submitForm(values: $values) {
            errors
            submission {
                id
            }
        }
    }
`;
