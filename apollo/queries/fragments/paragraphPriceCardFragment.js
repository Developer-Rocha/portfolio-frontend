import { gql } from '@apollo/client';
import { PARAGRAPHS_PLAIN_TEXT_FRAGMENTS } from './paragraphPlainTextFragment';

export const PARAGRAPHS_PRICE_CARD_FRAGMENTS = gql`
    ${PARAGRAPHS_PLAIN_TEXT_FRAGMENTS}

    fragment paragraphPriceCardFragment on ParagraphPriceCard {
        id
        title: fieldTitle
        price: fieldPrice
        fieldList {
            entity {
                __typename
                ...paragraphPlainTextFragment
            }
        }
    }
`;
