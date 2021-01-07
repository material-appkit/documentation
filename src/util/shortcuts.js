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

    const moduleMembers = result[relativeDirectory];

    if (childrenComponentMetadata.length) {
      childrenComponentMetadata.forEach((component) => {
        const isPublic = Boolean(component.doclets.find(
          (doclet) => doclet.tag === 'public' && doclet.value === true
        ));
        if (isPublic) {
          moduleMembers.components.push(component);
        }
      });
    } else {
      childrenDocumentationJs.forEach((member) => {
        switch (member.kind) {
          case 'class':
            moduleMembers.classes.push(member);
            break;
          case 'function':
            moduleMembers.functions.push(member);
            break;
          default:
            throw new Error('Unrecognized member kind');
        }
      });
    }
  });


  // Now that all the collections have been assembled,
  // sort components and classes alphabetically by name.

  // NOTE: Functions are already sorted in the order they
  // appear within their module, so best leave them alone.
  Object.values(result).forEach((moduleMembers) => {
    moduleMembers.components.sort((a, b) => (
      (a.displayName < b.displayName) ? -1 : 1
    ));

    moduleMembers.classes.sort((a, b) => (
      a.name < b.name ? -1 : 1
    ));
  });

  return result;
}
