// This paragraphs file doesn't works...

import { gql } from '@apollo/client';
import { PARAGRAPH_PRICING_TABLE_FRAGMENTS } from './paragraphPricingTable';
import { PARAGRAPH_PRICE_CARD_FRAGMENTS } from './paragraphPriceCardFragment';
import { PARAGRAPH_PLAIN_TEXT_FRAGMENTS } from './paragraphPlainTextFragment';

export const PARAGRAPHS_FRAGMENTS = gql`
  ${PARAGRAPH_PRICING_TABLE_FRAGMENTS}
  ${PARAGRAPH_PRICE_CARD_FRAGMENTS}
  ${PARAGRAPH_PLAIN_TEXT_FRAGMENTS}

  fragment blockEntitiesFragment on Entity {
    __typename
    ... paragraphPricingTableFragment
    ... paragraphPriceCardFragment
    ... paragraphPlainTextFragment
  }
`;


