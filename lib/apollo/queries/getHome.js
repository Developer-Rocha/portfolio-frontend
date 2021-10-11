import { gql } from "@apollo/client";

export const GET_HOME = gql`
	query page($language: LanguageId!, $id: String!) {
		page: nodeById(language: $language, id: $id) {
			title
			... on NodePage {
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
				fieldServiceDescription
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
