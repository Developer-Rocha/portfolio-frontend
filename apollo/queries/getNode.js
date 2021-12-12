import { gql } from "@apollo/client";

export const GET_NODE = gql`
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
			}
		}
	}
`;
