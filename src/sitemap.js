export default {
 name: "Root", path: null, children: [
  { name: "Introduction", path: "" },

  { name: "Getting Started", path: "getting-started", children: [
    { name: "Quickstart", anchor: "quickstart" },
    { name: "Installation", anchor: "installation" },
    { name: "Usage", anchor: "usage" },
  ]},

  { name: "API Reference", path: "api", children: [] },
    // NOTE: The API reference links are constructed by the <Application>
    // by querying the filesystem for paths to all source modules.

  { name: "Project Templates", path: "projects", children: [
    { name: "Create React App", anchor: "cra-starter" },
    { name: "Gatsby", anchor: "gatsby-starter" }
  ]},

  { name: "About", path: "about", children: [
      { name: "Motivation", anchor: "motivation" },
      { name: "Philosphy", anchor: "philosophy" },
      { name: "The Author", anchor: "author" }
    ]}
]}
