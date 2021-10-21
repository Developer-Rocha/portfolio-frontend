import { gql } from "@apollo/client";

export const GET_HOME = gql`
	query page($language: LanguageId!, $id: String!) {
		page: nodeById(language: $language, id: $id) {
			title
			... on NodePage {
				fieldServiceDescription
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

export const GET_SOCIAL = gql`
	query menuSocial($language: LanguageId!) {
		social: menuByName(name: "social", language: $language) {
			links: links {
				label
				url {
					path
				}
			}
		}
	}
`;
