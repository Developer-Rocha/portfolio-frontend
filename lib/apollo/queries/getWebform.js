import { gql } from "@apollo/client";

export const GET_WEBFORM = gql`
    query webform($webformId: String!) {
        webformById(webform_id: $webformId) {
            title
            description
            elements {
                ... on WebformElement {
                id
                type
                }
                ... on WebformElementActions {
                submitLabel
                title
                }
                ... on WebformElementTextBase {
                title
                defaultValue
                required {
                    message
                }
                size
                minLength
                maxLength
                pattern {
                    message
                    rule
                }
                placeholder
                multiple {
                    limit  # 0 means Unlimited config.
                    message
                }
                }
                ... on WebformElementMarkup {
                markup
                }
                ... on WebformElementTextarea {
                rows
                }
                ... on WebformElementHidden {
                defaultValue
                }
                ... on WebformElementDate {
                dateMin
                dateMax
                step
                defaultValue
                title
                multiple {
                    limit  # 0 means Unlimited config.
                    message
                }
                }
                ... on WebformElementOptionsBase {
                title
                defaultValue
                options {
                    title
                    value
                }
                required {
                    message
                }
                multiple {
                    limit  # 0 means Unlimited config.
                    message
                }
                }
                ... on WebformElementSelect {
                emptyOption {
                    title
                    value
                }
                }
                ... on WebformElementManagedFile {
                title
                fileExtensions
                required {
                    message
                }
                multiple {
                    limit  # 0 means Unlimited config.
                    message
                }
                }
                ... on WebformElementTermSelect {
                title
                termOptions(depth: 1) {
                    entityId
                    entityLabel
                }
                }
                ... on WebformElementComposite {
                elements {
                    id
                    type
                }
                }
                ... on WebformElementNumber{
                required {
                    message
                }
                min
                max
                size
                step
                }
            }
        }
    }
`;


