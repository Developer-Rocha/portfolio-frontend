import { gql } from '@apollo/client';
import { PARAGRAPH_PLAIN_TEXT_FRAGMENTS } from './paragraphPlainTextFragment';

export const PARAGRAPH_PRICE_CARD_FRAGMENTS = gql`
    ${PARAGRAPH_PLAIN_TEXT_FRAGMENTS}

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
