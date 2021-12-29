import { gql } from '@apollo/client';

export const PARAGRAPH_SERVICE_ITEM_FRAGMENTS = gql`

    fragment paragraphServiceItemFragment on ParagraphServiceItem {
            fieldIcon
            fieldColor
            fieldTitle
            fieldDescription
    }
`;

