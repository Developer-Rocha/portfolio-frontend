import { gql } from '@apollo/client';
import { PARAGRAPH_PRICE_CARD_FRAGMENTS } from './paragraphPriceCardFragment';

export const PARAGRAPH_PRICING_TABLE_FRAGMENTS = gql`
    ${PARAGRAPH_PRICE_CARD_FRAGMENTS}

    fragment paragraphPricingTableFragment on ParagraphPricingTable {
        id
        pricingCards: fieldPricingCards {
            entity {
                ...paragraphPriceCardFragment
            }
        }
    }
`;
