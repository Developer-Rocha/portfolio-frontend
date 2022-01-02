import { gql } from "@apollo/client";
// import { PARAGRAPHS_FRAGMENTS } from "./fragments/paragraphs";
import { PARAGRAPH_PRICING_TABLE_FRAGMENTS } from './fragments/paragraphPricingTable';
import { PARAGRAPH_PRICE_CARD_FRAGMENTS } from './fragments/paragraphPriceCardFragment';
import { PARAGRAPH_PLAIN_TEXT_FRAGMENTS } from './fragments/paragraphPlainTextFragment';
import { PARAGRAPH_SERVICES_FRAGMENTS } from "./fragments/paragraphServicesFragment";
import { PARAGRAPH_ABOUT_FRAGMENTS } from "./fragments/paragraphAboutFragment";
import { PARAGRAPH_PORTFOLIO_FRAGMENTS } from "./fragments/paragraphPortfolioFragment";
import { PARAGRAPH_WEBFORM_CONTACT_FRAGMENTS } from "./fragments/paragraphWebFormContactFragment";
import { PARAGRAPH_TEXT_FRAGMENTS } from "./fragments/paragraphTextFragment";

export const GET_NODE = gql`
	${PARAGRAPH_PRICING_TABLE_FRAGMENTS}
	${PARAGRAPH_PRICE_CARD_FRAGMENTS}
	${PARAGRAPH_PLAIN_TEXT_FRAGMENTS}
	${PARAGRAPH_SERVICES_FRAGMENTS}
	${PARAGRAPH_ABOUT_FRAGMENTS}
	${PARAGRAPH_PORTFOLIO_FRAGMENTS}
	${PARAGRAPH_WEBFORM_CONTACT_FRAGMENTS}
	${PARAGRAPH_TEXT_FRAGMENTS}

	query portfolio($path: String!) {
        node: route(path: $path) {
            ... on EntityCanonicalUrl {
                entity {
                    ... on NodePage {
                        id: nid
                        title
                        urlPT: entityTranslation(language: PT_PT){
                            url: entityUrl{
                            path
                            }
                        }
                        urlEN: entityTranslation(language: EN){
                            url: entityUrl {
                            path
                            }
                        }
                        seoTitle: fieldSeoTitle
                        fieldSeoDescription
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
                        fieldModules{
                            entity{
                                # Insert here all paragraphs that we have enable on field Modules
                                ... paragraphPricingTableFragment
                                ... paragraphPriceCardFragment
                                ... paragraphPlainTextFragment
                                ... paragraphServicesFragment
                                ... paragraphAboutFragment
                                ... paragraphPortfolioFragment
                                ... paragraphWebformContactFragment
                                ... paragraphTextFragment
                            }
                        }
                    }
                }
            }
        }
    }
`;
