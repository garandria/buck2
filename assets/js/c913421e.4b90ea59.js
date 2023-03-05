"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9170],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>b,useMDXComponents:()=>s,withMDXComponents:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){return function(t){var n=s(t.components);return r.createElement(e,o({},t,{components:n}))}},s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},39395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"getting_started",title:"Getting Started"},i="Getting Started <FbInternalOnly> - Open Source </FbInternalOnly>",l={unversionedId:"getting_started",id:"getting_started",title:"Getting Started",description:"* Download the binary",source:"@site/../docs/getting_started.md",sourceDirName:".",slug:"/getting_started",permalink:"/docs/getting_started",draft:!1,tags:[],version:"current",frontMatter:{id:"getting_started",title:"Getting Started"},sidebar:"manualSidebar",previous:{title:"Why Buck2",permalink:"/docs/why"},next:{title:"Benefits When Compared to Buck1",permalink:"/docs/benefits"}},u={},c=[{value:"Bootstrapping Buck2",id:"bootstrapping-buck2",level:2},{value:"Communication channels",id:"communication-channels",level:2}],p=(s="FbInternalOnly",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)});var s;const d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"getting-started----open-source-"},"Getting Started ",(0,a.mdx)(p,{mdxType:"FbInternalOnly"}," - Open Source ")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Download the binary"),(0,a.mdx)("li",{parentName:"ul"},"Create a git repo"),(0,a.mdx)("li",{parentName:"ul"},"Add the Prelude with submodule"),(0,a.mdx)("li",{parentName:"ul"},"Create some targets"),(0,a.mdx)("li",{parentName:"ul"},"Type build")),(0,a.mdx)("h2",{id:"bootstrapping-buck2"},"Bootstrapping Buck2"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install Reindeer"),(0,a.mdx)("li",{parentName:"ul"},"Generate the BUCK files with Reindeer"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"buck2 build cli:buck2"))),(0,a.mdx)(p,{mdxType:"FbInternalOnly"},(0,a.mdx)("h2",{id:"communication-channels"},"Communication channels"),(0,a.mdx)("p",null,"The following channels provide an insight into Buck2:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://fb.workplace.com/groups/buck2prototyping"},"Buck2 Engineering")," - Workplace group for discussions about what features Buck2 should have, how it's going, status updates, and much more."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://fb.workplace.com/groups/buck2users"},"Buck2 Users")," - Workplace group featuring questions from users and reports of bugs."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://fb.workplace.com/groups/347532827186692"},"Buck2 Rule Authors")," - Workplace group for discussions about language-specific rules."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.internalfb.com/intern/monitor/oncall_profile?oncall=buck2"},"Buck2 Oncall Hub")," - urgent tasks and escalation."))))}m.isMDXComponent=!0}}]);