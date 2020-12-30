(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{V6s7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.include=function e(t,n){var a={toString:function(){return t}};return Object.keys(n).forEach((function(i){var r=n[i];"function"==typeof r&&"toString"===i?a.toString=function(){return t+n.toString()}:"object"===(void 0===r?"undefined":o(r))?a[i]=e(t,r):a[i]=[t,r].filter((function(e){return e})).join("/").replace("//","/")})),a},t.lastPathComponent=function(e){var t=e.split("/"),n=t.length;if(!n)return null;return t[n-1]};var o="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return void 0===e?"undefined":a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":a(e)}},hYGr:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),i=n("hlie"),r=n("ofer"),l=n("Wbzz"),c=n("5w8u"),u=n("+6pB"),s=n("8TZf"),m=(n("fqwK"),n("wqe2")),p={index:"/",gettingStarted:Object(m.include)("/getting-started/",{index:"",examples:"examples/"}),api:Object(m.include)("/api/",{index:""}),error:Object(m.include)("/",{critical:"500",nonCritical:"404"})},d=o.a.createElement(i.a,{component:l.Link,to:p.api.index},"API Reference"),f=o.a.createElement(i.a,{component:l.Link,to:p.gettingStarted.examples},"starter applications"),h=o.a.createElement(i.a,{href:"https://www.npmjs.com/package/@material-ui/core"},"@material-ui/core"),y=o.a.createElement(i.a,{href:"https://www.npmjs.com/package/@material-ui/icons"},"@material-ui/icons"),b=o.a.createElement(i.a,{href:"https://www.npmjs.com/package/@material-ui/lab"},"@material-ui/lab"),g=o.a.createElement(i.a,{href:"https://material-ui.com/components/snackbars/#snackbar"},"Snackbar"),w=o.a.createElement(i.a,{href:"https://iamhosseindhv.com/notistack/demos"},"notistack");t.default=function(e){return o.a.createElement(c.a,Object.assign({showBackButton:!1,title:"Getting Started"},e),o.a.createElement("main",null,o.a.createElement(s.b,null,o.a.createElement(s.c,null,"Getting started"),o.a.createElement(r.a,{gutterBottom:!0},"When considering the adoption of a third-party toolkit into your workflow, the first thing you should ask yourself is, ",o.a.createElement("em",null,'"Will my dependence on these tools ultimately help or hinder the long-term growth of my application?"'),". It is a heavyweight decision that will impact you, your team, and your company for years to come and should hence be made with a certain degree of caution."),o.a.createElement(r.a,{gutterBottom:!0},"A good way to begin this evaluation is with a cursory review of the ",d,"which details all of the available components and utilities. Try out the examples to see things in action, then fire up one of the ",f," to get an idea of how the various components may be used in concert."),o.a.createElement(r.a,{gutterBottom:!0},"Once you've completed this evaluation and are ready to take the plunge, fire your favorite editor and let's get started!")),o.a.createElement(s.b,null,o.a.createElement(s.a,{id:"installation"},"Installation"),o.a.createElement(r.a,null,"Material-AppKit is distributed via NPM. To integrate it with your existing Material-UI project, install it as you would any other npm package:"),o.a.createElement(u.a,{language:"bash",singleline:!0},"$ npm install @material-appkit/core")),o.a.createElement(s.b,null,o.a.createElement(s.a,{variant:"h3"},"Peer Dependencies"),o.a.createElement(r.a,null,"Naturally, ",h," must be installed as a peer dependency. In addition, ",y," and ",b," are relied upon by a number of components and so they too should be installed. Finally, if you wish to use the SnackbarManager to coveniently present ",g," notifications you must also include the excellent ",w," library."),o.a.createElement(u.a,{language:"bash",singleline:!0},"$ npm install @material-ui/core @material-ui/icons @material-ui/lab notistack")),o.a.createElement(s.b,null,o.a.createElement(s.a,{id:"usage"},"Usage"))))}},wqe2:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"include",{enumerable:!0,get:function(){return o.include}}),Object.defineProperty(t,"lastPathComponent",{enumerable:!0,get:function(){return o.lastPathComponent}});var o=a(n("V6s7"))}}]);