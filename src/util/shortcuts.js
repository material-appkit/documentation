import { E_REQUEST_ABORTED } from 'variables';

export function handleException(error, errorInfo) {
  if (error.name === E_REQUEST_ABORTED) {
    return;
  }

  console.log(error, errorInfo);
}


export const pathnameForUrl = (url) => {
  let pathname = url;
  const hashIndex = pathname.lastIndexOf('#');
  if (hashIndex !== -1) {
    pathname = pathname.substring(0, hashIndex);
  }
  return pathname;
};


export const fileContent = (nodes, filename) => {
  for (const node of nodes) {
    if (node.base === filename) {
      return node.internal.content;
    }
  }

  return null;
};


export function extractMembers(nodes) {
  const result = {};

  nodes.forEach((node) => {
    const {
      childrenDocumentationJs,
      childrenComponentMetadata,
      relativeDirectory,
    } = node;
    
    if (!result[relativeDirectory]) {
      result[relativeDirectory] = {
        components: [],
        classes: [],
        functions: [],
      };
    }

    if (childrenComponentMetadata.length) {
      result[relativeDirectory].components.splice(0, 0, ...childrenComponentMetadata);
    } else {
      childrenDocumentationJs.forEach((member) => {
        switch (member.kind) {
          case 'class':
            result[relativeDirectory].classes.push(member);
            break;
          case 'function':
            result[relativeDirectory].functions.push(member);
            break;
          default:
            throw new Error('Unrecognized member kind');
        }
      });
    }
  });

  return result;
}
