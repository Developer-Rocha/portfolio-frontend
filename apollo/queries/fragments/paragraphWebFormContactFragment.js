import { gql } from '@apollo/client';

export const PARAGRAPH_WEBFORM_CONTACT_FRAGMENTS = gql`

    fragment paragraphWebformContactFragment on ParagraphWebformContact {
        email: fieldEmail
        phone: fieldPhone
    }
`;

