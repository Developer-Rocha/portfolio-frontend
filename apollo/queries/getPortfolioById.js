import { gql } from "@apollo/client";

export const GET_PORTFOLIO_BY_PATH = gql`
	query portfolio($path: String!) {
        portfolio: route(path: $path) {
            ... on EntityCanonicalUrl {
                entity {
                    ... on NodePortfolio {
                        id: entityId
                        title
                        url: entityUrl {
                            path
                        }
                        client: fieldClient
                        projectUrl: fieldProjectUrl {
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
        }
    }
`;

