"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6547],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>s,mdx:()=>b,useMDXComponents:()=>p,withMDXComponents:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){return function(t){var n=p(t.components);return r.createElement(e,o({},t,{components:n}))}},p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,m=d["".concat(u,".").concat(s)]||d[s]||f[s]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},u="audit_ctx",i={unversionedId:"generated/bxl/audit_ctx",id:"generated/bxl/audit_ctx",title:"audit_ctx",description:"The context for performing audit operations in bxl. The functions offered on this ctx are the same behaviour as the audit functions available within audit command.",source:"@site/../docs/generated/bxl/audit_ctx.md",sourceDirName:"generated/bxl",slug:"/generated/bxl/audit_ctx",permalink:"/docs/generated/bxl/audit_ctx",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Members",id:"members",level:3},{value:"output",id:"output",level:2},{value:"Details",id:"details",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"audit_ctx"},"audit_ctx"),(0,a.mdx)("p",null,"The context for performing ",(0,a.mdx)("inlineCode",{parentName:"p"},"audit")," operations in bxl. The functions offered on this ctx are the same behaviour as the audit functions available within audit command."),(0,a.mdx)("h3",{id:"members"},"Members"),(0,a.mdx)("table",{class:"starlark_table starlark_members_table"},(0,a.mdx)("thead",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"Member"),(0,a.mdx)("th",null,"Description"),(0,a.mdx)("th",null,"Type"))),(0,a.mdx)("tbody",null,(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("p",null,"output")),(0,a.mdx)("td",null,(0,a.mdx)("p",null,"Returns either: - The ",(0,a.mdx)("inlineCode",{parentName:"p"},"StarlarkAction")," which created the buck-out path, if exists. - The ",(0,a.mdx)("inlineCode",{parentName:"p"},"StarlarkTargetLabel")," (unconfigured target label) constructed from the buck-out path, if the configuration hashes do not match. - None, if the configuration hash of the buck-out path matches the one passed into this function, or the default target configuration, but no action could be found that generated the buck-out path.")),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'(\n    output_path: str.type,\n  target_platform: "" = None\n) -> [None, ""]\n')))))),(0,a.mdx)("h2",{id:"output"},"output"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def output(output_path: str.type, target_platform: "" = None) -> [None, ""]\n')),(0,a.mdx)("p",null,"Returns either: - The ",(0,a.mdx)("inlineCode",{parentName:"p"},"StarlarkAction")," which created the buck-out path, if exists. - The ",(0,a.mdx)("inlineCode",{parentName:"p"},"StarlarkTargetLabel")," (unconfigured target label) constructed from the buck-out path, if the configuration hashes do not match. - None, if the configuration hash of the buck-out path matches the one passed into this function, or the default target configuration, but no action could be found that generated the buck-out path."),(0,a.mdx)("h3",{id:"details"},"Details"),(0,a.mdx)("p",null,"Takes in an optional target platform, otherwise will use the default target platform."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_audit_output(ctx):\n    target_platform = "foo"\n    result = ctx.audit().output("buck-out/v2/gen/fbcode/some_cfg_hash/path/to/__target__/artifact", target_platform)\n    ctx.output.print(result)\n')))}p.isMDXComponent=!0}}]);