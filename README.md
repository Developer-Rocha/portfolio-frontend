# NextJS website

This is a simple landing page website.

## Preview

Preview the example live on [DevRocha](https://devrocha.space/):

## How to init

Execute the following steps:

Create the .env file in the project root with the following variable.

```bash
API_URL=https://fabricio-rocha.com/graphql
```

```bash
npm install
#
npm run dev
```

### Notes

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.
