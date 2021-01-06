import { graphql } from 'gatsby';

export const JSDocFragments = graphql` 
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
  
  
  fragment DocumentationNode on File {
    childrenComponentMetadata {
      displayName
    }
      
    childrenDocumentationJs {
      ...DocumentationJsFragment,
      childrenDocumentationJs {
        ...DocumentationJsFragment,
      }
    }    
    
    relativeDirectory
    relativePath
  }  
`;

