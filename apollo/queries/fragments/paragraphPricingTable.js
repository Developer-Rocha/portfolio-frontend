import { gql } from '@apollo/client';
import { PARAGRAPHS_PRICE_CARD_FRAGMENTS } from './paragraphPriceCardFragment';

export const PARAGRAPHS_PRICING_TABLE_FRAGMENTS = gql`
    ${PARAGRAPHS_PRICE_CARD_FRAGMENTS}

    fragment paragraphPricingTableFragment on ParagraphPricingTable {
        id
        pricingCards: fieldPricingCards {
            entity {
                ...paragraphPriceCardFragment
            }
        }
    }
`;
