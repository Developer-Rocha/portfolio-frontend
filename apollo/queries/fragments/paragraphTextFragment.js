import { gql } from '@apollo/client';

export const PARAGRAPH_TEXT_FRAGMENTS = gql`
    fragment paragraphTextFragment on ParagraphText {
        id
        fieldText {
            value
        }
    }
`;
