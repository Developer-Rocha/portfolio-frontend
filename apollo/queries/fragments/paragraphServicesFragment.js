import { gql } from '@apollo/client';
import { PARAGRAPH_SERVICE_ITEM_FRAGMENTS } from './paragraphServiceItemFragment';

export const PARAGRAPH_SERVICES_FRAGMENTS = gql`
    ${PARAGRAPH_SERVICE_ITEM_FRAGMENTS}

    fragment paragraphServicesFragment on ParagraphServices {
        id
            description: fieldAboutDescription {
        value
                }
        services: fieldServiceItem {
            entity {
                ...paragraphServiceItemFragment
            }
        }
    }
`;

