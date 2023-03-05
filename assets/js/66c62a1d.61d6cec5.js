"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6959],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>i,MDXProvider:()=>s,mdx:()=>y,useMDXComponents:()=>c,withMDXComponents:()=>p});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),p=function(e){return function(t){var r=c(t.components);return n.createElement(e,a({},t,{components:r}))}},c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},x=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=c(r),s=l,m=p["".concat(o,".").concat(s)]||p[s]||f[s]||a;return r?n.createElement(m,u(u({ref:t},i),{},{components:r})):n.createElement(m,u({ref:t},i))}));function y(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=x;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u[m]="string"==typeof e?e:l,o[1]=u;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}x.displayName="MDXCreateElement"},57737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var n=r(87462),l=(r(67294),r(3905));const a={},o="configured_attr_val",u={unversionedId:"generated/bxl/configured_attr_val",id:"generated/bxl/configured_attr_val",title:"configured_attr_val",description:"Methods on configured target node's attributes.",source:"@site/../docs/generated/bxl/configured_attr_val.md",sourceDirName:"generated/bxl",slug:"/generated/bxl/configured_attr_val",permalink:"/docs/generated/bxl/configured_attr_val",draft:!1,tags:[],version:"current",frontMatter:{}},d={},i=[{value:"Members",id:"members",level:3},{value:"type : <code>str.type</code>",id:"type--strtype",level:2},{value:"value",id:"value",level:2},{value:"Details",id:"details",level:3}],p={toc:i};function c(e){let{components:t,...r}=e;return(0,l.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"configured_attr_val"},"configured_attr_val"),(0,l.mdx)("p",null,"Methods on configured target node's attributes."),(0,l.mdx)("h3",{id:"members"},"Members"),(0,l.mdx)("table",{class:"starlark_table starlark_members_table"},(0,l.mdx)("thead",null,(0,l.mdx)("tr",null,(0,l.mdx)("th",null,"Member"),(0,l.mdx)("th",null,"Description"),(0,l.mdx)("th",null,"Type"))),(0,l.mdx)("tbody",null,(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"type")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"Returns the type name of the attribute")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"str.type\n")))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"value")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"Returns the value of this attribute. The value here is not fully resolved like in rules.")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'() -> ""\n')))))),(0,l.mdx)("h2",{id:"type--strtype"},"type : ",(0,l.mdx)("inlineCode",{parentName:"h2"},"str.type")),(0,l.mdx)("p",null,"Returns the type name of the attribute"),(0,l.mdx)("p",null,"Sample usage:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_type(ctx):\n    node = ctx.cquery().owner("bin/TARGETS")[0]\n    attrs = node.attrs_eager()\n    ctx.output.print(attrs.name.type)\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"value"},"value"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def value() -> ""\n')),(0,l.mdx)("p",null,"Returns the value of this attribute. The value here is not fully resolved like in rules."),(0,l.mdx)("h3",{id:"details"},"Details"),(0,l.mdx)("p",null,"Sample usage:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_value(ctx):\n    node = ctx.cquery().owner("bin/TARGETS")[0]\n    attrs = node.attrs_eager()\n    ctx.output.print(attrs.name.value())\n')))}c.isMDXComponent=!0}}]);