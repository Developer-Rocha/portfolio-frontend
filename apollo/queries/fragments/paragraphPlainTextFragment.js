import { gql } from '@apollo/client';

export const PARAGRAPHS_PLAIN_TEXT_FRAGMENTS = gql`
    fragment paragraphPlainTextFragment on ParagraphPlainText {
        id
        text: fieldTextItem
    }
`;
