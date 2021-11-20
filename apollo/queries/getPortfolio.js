import { gql } from "@apollo/client";

export const GET_PORTFOLIO = gql`
	query portfolio($language: LanguageId!, $langcode: [String!]) {
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
                    },
                    {
                        field: "langcode",
                        value: $langcode,
                        operator: EQUAL
                    }
                ]
            },
            sort: {
                field: "field_project_date"
                direction: DESC
            }
        )
        {
            count
            entities(language: $language) {
            ...on NodePortfolio {
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

