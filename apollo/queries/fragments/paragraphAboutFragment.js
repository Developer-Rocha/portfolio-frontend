import { gql } from '@apollo/client';

export const PARAGRAPH_ABOUT_FRAGMENTS = gql`
    fragment paragraphAboutFragment on ParagraphAbout {
        title: fieldTitle
        description: fieldAboutDescription {
        value
        }
    }
`;
