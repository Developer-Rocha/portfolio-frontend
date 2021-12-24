// This paragraphs file doesn't works...

import { gql } from '@apollo/client';
import { PARAGRAPHS_PRICING_TABLE_FRAGMENTS } from './paragraphPricingTable';
import { PARAGRAPHS_PRICE_CARD_FRAGMENTS } from './paragraphPriceCardFragment';
import { PARAGRAPHS_PLAIN_TEXT_FRAGMENTS } from './paragraphPlainTextFragment';

export const PARAGRAPHS_FRAGMENTS = gql`
  ${PARAGRAPHS_PRICING_TABLE_FRAGMENTS}
  ${PARAGRAPHS_PRICE_CARD_FRAGMENTS}
  ${PARAGRAPHS_PLAIN_TEXT_FRAGMENTS}

  fragment blockEntitiesFragment on Entity {
    __typename
    ... paragraphPricingTableFragment
    ... paragraphPriceCardFragment
    ... paragraphPlainTextFragment
  }
`;


