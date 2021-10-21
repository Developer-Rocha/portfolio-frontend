import { gql } from "@apollo/client";

export const GET_PORTFOLIO = gql`
	query portfolio($language: LanguageId!) {
        portfolio: nodeQuery(
            filter:{
                conjunction: AND
                conditions: [
                    {
                    field: "type"
                    value: ["portfolio"]
                    operator:EQUAL
                    },
                    {
                        field: "status"
                        value: ["1"]
                        operator: EQUAL
                    }
                ]
            }
        )
        {
            count
            entities(language: $language) {
            ...on NodePortfolio {
                id: entityId
                title
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
    }
`;

