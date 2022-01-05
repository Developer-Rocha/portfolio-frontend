import { gql } from '@apollo/client';

export const PARAGRAPH_PORTFOLIO_FRAGMENTS = gql`
    fragment paragraphPortfolioFragment on ParagraphPortfolio {
        fieldPortfolio {
            entity {
            title
            ... on NodePortfolio {
                id: entityId
            title
            tech: fieldTechnologies
            url: entityUrl {
                path
            }
            client: fieldClient
            projectUrl: fieldProjectUrl {
                url {
                    path
                }
                title
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
`;
