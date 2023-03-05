"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6424],{3905:(e,r,n)=>{n.r(r),n.d(r,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>b,useMDXComponents:()=>u,withMDXComponents:()=>c});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){return function(r){var n=u(r.components);return t.createElement(e,o({},r,{components:n}))}},u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},m=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},v=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,p=c["".concat(l,".").concat(m)]||c[m]||f[m]||o;return n?t.createElement(p,i(i({ref:r},s),{},{components:n})):t.createElement(p,i({ref:r},s))}));function b(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=v;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}v.displayName="MDXCreateElement"},14470:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=n(87462),a=(n(67294),n(3905));const o={},l="RunInfo",i={unversionedId:"generated/native/providers/RunInfo",id:"generated/native/providers/RunInfo",title:"RunInfo",description:"Provider that signals that a rule is runnable",source:"@site/../docs/generated/native/providers/RunInfo.md",sourceDirName:"generated/native/providers",slug:"/generated/native/providers/RunInfo",permalink:"/docs/generated/native/providers/RunInfo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"PlatformInfo",permalink:"/docs/generated/native/providers/PlatformInfo"},next:{title:"TemplatePlaceholderInfo",permalink:"/docs/generated/native/providers/TemplatePlaceholderInfo"}},d={},s=[{value:"Members",id:"members",level:3},{value:"args : <code>&quot;cmd_args&quot;</code>",id:"args--cmd_args",level:2}],c={toc:s};function u(e){let{components:r,...n}=e;return(0,a.mdx)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"runinfo"},"RunInfo"),(0,a.mdx)("p",null,"Provider that signals that a rule is runnable"),(0,a.mdx)("h3",{id:"members"},"Members"),(0,a.mdx)("table",{class:"starlark_table starlark_members_table"},(0,a.mdx)("thead",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"Member"),(0,a.mdx)("th",null,"Description"),(0,a.mdx)("th",null,"Type"))),(0,a.mdx)("tbody",null,(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("p",null,"args")),(0,a.mdx)("td",null,(0,a.mdx)("p",null,"The command to run, stored as CommandLine")),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'"cmd_args"\n')))))),(0,a.mdx)("h2",{id:"args--cmd_args"},"args : ",(0,a.mdx)("inlineCode",{parentName:"h2"},'"cmd_args"')),(0,a.mdx)("p",null,"The command to run, stored as CommandLine"))}u.isMDXComponent=!0}}]);