(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=(n("E9XD"),n("Ff2n")),c=n("wx14"),o=n("iuhU"),s=n("H2TA"),l=[0,1,2,3,4,5,6,7,8,9,10],m=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=a.forwardRef((function(e,t){var n=e.alignContent,i=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,m=e.classes,p=e.className,d=e.component,g=void 0===d?"div":d,u=e.container,x=void 0!==u&&u,f=e.direction,w=void 0===f?"row":f,v=e.item,h=void 0!==v&&v,y=e.justify,b=void 0===y?"flex-start":y,E=e.lg,j=void 0!==E&&E,S=e.md,C=void 0!==S&&S,N=e.sm,I=void 0!==N&&N,A=e.spacing,W=void 0===A?0:A,k=e.wrap,M=void 0===k?"wrap":k,z=e.xl,O=void 0!==z&&z,B=e.xs,R=void 0!==B&&B,T=e.zeroMinWidth,D=void 0!==T&&T,G=Object(r.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),K=Object(o.a)(m.root,p,x&&[m.container,0!==W&&m["spacing-xs-".concat(String(W))]],h&&m.item,D&&m.zeroMinWidth,"row"!==w&&m["direction-xs-".concat(String(w))],"wrap"!==M&&m["wrap-xs-".concat(String(M))],"stretch"!==l&&m["align-items-xs-".concat(String(l))],"stretch"!==i&&m["align-content-xs-".concat(String(i))],"flex-start"!==b&&m["justify-xs-".concat(String(b))],!1!==R&&m["grid-xs-".concat(String(R))],!1!==I&&m["grid-sm-".concat(String(I))],!1!==C&&m["grid-md-".concat(String(C))],!1!==j&&m["grid-lg-".concat(String(j))],!1!==O&&m["grid-xl-".concat(String(O))]);return a.createElement(g,Object(c.a)({className:K,ref:t},G))})),g=Object(s.a)((function(e){return Object(c.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(p(i,2)),width:"calc(100% + ".concat(p(i),")"),"& > $item":{padding:p(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};m.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(c.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d),u=n("eD//"),x=n("ofer"),f=n("R/WZ"),w=n("5w8u"),v=n("+6pB"),h=n("+WXd"),y=n("8TZf"),b=(n("fqwK"),n("xF/5")),E=n("H+dS"),j=n.n(E),S=Object(f.a)((function(e){var t,n;return{contentContainer:{padding:e.spacing(4,2,2)},header:{marginBottom:e.spacing(4),textAlign:"center"},logo:{display:"inline-block",height:286,width:300},title:(t={fontSize:e.typography.pxToRem(28),letterSpacing:"0.38rem",lineHeight:1.2,textAlign:"center",textTransform:"uppercase"},t[e.breakpoints.up("md")]={fontSize:e.typography.pxToRem(40)},t),version:{fontSize:e.typography.pxToRem(20),letterSpacing:"0.2rem"},introductionCell:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},introduction:(n={marginTop:e.spacing(2)},n[e.breakpoints.up("md")]={textAlign:"justify"},n),instructionSection:{backgroundColor:"#f5f5f5",height:"100%",padding:e.spacing(0,2)},instructionArticle:{padding:e.spacing(2,0,1)}}}));t.default=function(e){var t=S(),n=e.data.samples.nodes;return i.a.createElement(w.a,Object.assign({contentContainerClassName:t.contentContainer,title:"Introduction"},e),i.a.createElement("main",null,i.a.createElement(g,{className:t.header,container:!0,component:"header",spacing:2},i.a.createElement(g,{item:!0,xs:12,md:6,className:t.introductionCell},i.a.createElement("img",{alt:"Material-AppKit Logo",className:t.logo,src:j.a})),i.a.createElement(g,{item:!0,xs:12,md:6,className:t.introductionCell},i.a.createElement(x.a,{component:"h1",color:"primary",className:t.title},"Material-AppKit"),i.a.createElement(x.a,{component:"h2",className:t.version},"v","2.9.9"),i.a.createElement(x.a,{className:t.introduction},"An easy-to-use library of essential components and utilities proven to simplify and supercharge web apps built upon ",i.a.createElement(y.c,{href:"https://www.material-ui.com"},"Material-UI"),"."))),i.a.createElement(g,{container:!0,spacing:2},i.a.createElement(g,{item:!0,xs:12,md:6},i.a.createElement("section",{className:t.instructionSection},i.a.createElement("article",{className:t.instructionArticle},i.a.createElement(y.a,null,"Installation"),i.a.createElement(x.a,null,"Install Material-AppKit via npm:"),i.a.createElement(v.a,{language:"bash",singleline:!0},"$ npm install @material-appkit/core")),i.a.createElement("article",{className:t.instructionArticle},i.a.createElement(y.a,null,"Quickstart"),i.a.createElement(x.a,{gutterBottom:!0},"Start coding immediately using one of the following project templates:"),i.a.createElement(u.a,{disablePadding:!0},i.a.createElement(h.a,{type:"CRA"}),i.a.createElement(h.a,{type:"Gatsby"}))))),i.a.createElement(g,{item:!0,xs:12,md:6},i.a.createElement("section",{className:t.instructionSection},i.a.createElement("article",{className:t.instructionArticle},i.a.createElement(y.a,null,"Usage"),i.a.createElement(x.a,null,"Import components and utilities as you would any other Material-UI component or function."),i.a.createElement(v.a,{language:"jsx"},Object(b.a)(n,"usage-example.jsx"))))))))}}}]);