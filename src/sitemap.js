export default {
 name: "Root", path: null, children: [
  { name: "Introduction", path: "" },

  { name: "Getting Started", path: "getting-started", children: [
    { name: "Installation", anchor: "installation" },
    { name: "Usage", anchor: "usage" },
  ]},

  { name: "API Reference",   path: "api", children: [
    { name: "Components",   anchor: "components" },
    { name: "Managers",   anchor: "managers" },
    { name: "Utilities",   anchor: "utilities" }
  ]},

  { name: "Project Templates", path: "templates", children: [
    { name: "Create React App", anchor: "cra-starter" },
    { name: "Gatsby", anchor: "gatsby-starter" }
  ]},

  { name: "About", path: "about", children: [
      { name: "Motivation", anchor: "motivation" },
      { name: "Design Philosphy", anchor: "philosophy" },
      { name: "The Author", anchor: "author" }
    ]}
]}
