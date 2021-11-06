import { gql } from "@apollo/client";

export const GET_PORTFOLIO_BY_ID = gql`
	query portfolio($language: LanguageId!, $id: String!) {
        portfolio: nodeById(language: $language, id: $id){
            title
            bundle: entityBundle
                    ...on NodePortfolio {
                id: entityId
                title
                entityUrl {
                    path
                }
                client: fieldClient
                url: fieldProjectUrl {
                    url {
                        path
                    }
                }
                description: body {
                    value
                }
                date: fieldProjectDate {
                    value
                }
                category: fieldCategories{
                    entity {
                        ...on TaxonomyTermCategory {
                        name
                        }
                    }
                }
                fieldThumbnail{
                    entity{
                        ...on MediaImage {
                            fieldMediaImage{
                                alt
                                sm: derivative(style: MAX650X650){
                                    url
                                }
                            }
                        }
                    }
                }
                fieldGallery{
                    entity{
                        ...on MediaImage {
                            fieldMediaImage{
                                alt
                                sm: derivative(style: THUMBNAIL){
                                    url
                                }
                                lg: derivative(style: MAX1300X1300) {
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

