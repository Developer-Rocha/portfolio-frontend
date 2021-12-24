import { gql } from "@apollo/client";
// import { PARAGRAPHS_FRAGMENTS } from "./fragments/paragraphs";
import { PARAGRAPHS_PRICING_TABLE_FRAGMENTS } from './fragments/paragraphPricingTable';
import { PARAGRAPHS_PRICE_CARD_FRAGMENTS } from './fragments/paragraphPriceCardFragment';
import { PARAGRAPHS_PLAIN_TEXT_FRAGMENTS } from './fragments/paragraphPlainTextFragment';

export const GET_NODE = gql`
	${PARAGRAPHS_PRICING_TABLE_FRAGMENTS}
	${PARAGRAPHS_PRICE_CARD_FRAGMENTS}
	${PARAGRAPHS_PLAIN_TEXT_FRAGMENTS}

	query page($language: LanguageId!, $id: String!) {
		page: nodeById(language: $language, id: $id) {
			id: nid
			title
			... on NodePage {
				fieldServiceDescription
				seoTitle: fieldSeoTitle
				fieldSeoDescription
				aboutTitle: fieldAboutTitle
				aboutDescription: fieldAboutDescription {
					value
				}
				fieldHeroImage {
					entity{
                        ...on MediaImage {
                            fieldMediaImage{
                                alt
                                lg: derivative(style: MAX2600X2600){
                                    url
                                }
                            }
                        }
                    }
				}
				fieldTypedAnimation {
					entity {
						... on ParagraphTypedAnimation {
							fieldStaticText
							fieldTypedItem {
								entity {
									... on ParagraphPlainText {
										fieldTextItem
									}
								}
							}
						}
					}
				}
				fieldServices {
					entity {
						... on ParagraphServiceItem {
							fieldIcon
							fieldColor
							fieldTitle
							fieldDescription
						}
					}
				}
				fieldModules{
					entity{
						# Insert here all paragraphs that we have enable on field Modules
						... paragraphPricingTableFragment
						... paragraphPriceCardFragment
						... paragraphPlainTextFragment
					}
				}
			}
		}
	}
`;
