import { gql } from '@apollo/client';

export const PARAGRAPH_PLAIN_TEXT_FRAGMENTS = gql`
    fragment paragraphPlainTextFragment on ParagraphPlainText {
        id
        text: fieldTextItem
    }
`;
