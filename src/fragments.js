import { graphql } from 'gatsby';

export const JSDocFragment = graphql`
  fragment DocumentationJsFragment on DocumentationJs {
    description {
      childMarkdownRemark {
        html
      }
    }
    kind
    name
    params {
      name
      type {
        name
      }
    }
  }
`;

