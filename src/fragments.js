import { graphql } from 'gatsby';

export const JSDocFragment = graphql`
  fragment DocumentationJsFragment on DocumentationJs {
    description {
      internal {
        content
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
    tags {
      title
      description
    }
    returns {
      type {
        name
      }
    }    
  }
`;

