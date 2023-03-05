"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6942],{3905:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>x,useMDXComponents:()=>s,withMDXComponents:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},l.apply(this,arguments)}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),m=function(e){return function(n){var r=s(n.components);return t.createElement(e,l({},n,{components:r}))}},s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,c=m["".concat(o,".").concat(u)]||m[u]||v[u]||l;return r?t.createElement(c,i(i({ref:n},p),{},{components:r})):t.createElement(c,i({ref:n},p))}));function x(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},75002:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=r(87462),a=(r(67294),r(3905));const l={},o="TemplatePlaceholderInfo",i={unversionedId:"generated/native/providers/TemplatePlaceholderInfo",id:"generated/native/providers/TemplatePlaceholderInfo",title:"TemplatePlaceholderInfo",description:"A provider that is used for expansions in string attribute templates",source:"@site/../docs/generated/native/providers/TemplatePlaceholderInfo.md",sourceDirName:"generated/native/providers",slug:"/generated/native/providers/TemplatePlaceholderInfo",permalink:"/docs/generated/native/providers/TemplatePlaceholderInfo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"RunInfo",permalink:"/docs/generated/native/providers/RunInfo"},next:{title:"dict",permalink:"/docs/generated/native/standard/dict"}},d={},p=[{value:"Members",id:"members",level:3},{value:"keyed_variables : <code>UNKNOWN</code>",id:"keyed_variables--unknown",level:2},{value:"unkeyed_variables : <code>UNKNOWN</code>",id:"unkeyed_variables--unknown",level:2}],m={toc:p};function s(e){let{components:n,...r}=e;return(0,a.mdx)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"templateplaceholderinfo"},"TemplatePlaceholderInfo"),(0,a.mdx)("p",null,"A provider that is used for expansions in string attribute templates"),(0,a.mdx)("p",null,'String attribute templates allow two types of user-defined placeholders, "unkeyed placeholders"\nlike ',(0,a.mdx)("inlineCode",{parentName:"p"},"$(CXX)")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"$(aapt)"),' and "keyed placeholders"  that include a target key like\n',(0,a.mdx)("inlineCode",{parentName:"p"},"$(cxxppflags //some:target)"),". The expansion of each of these types is based on the\n",(0,a.mdx)("inlineCode",{parentName:"p"},"TemplatePlaceholderInfo")," providers."),(0,a.mdx)("p",null,'"keyed placeholders" are used for the form ',(0,a.mdx)("inlineCode",{parentName:"p"},"$(<key> <target>)")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"$(<key> <target> <arg>)"),". In both cases\nthe lookup will expect a ",(0,a.mdx)("inlineCode",{parentName:"p"},"TemplatePlaceholderInfo")," in the providers of ",(0,a.mdx)("inlineCode",{parentName:"p"},"<target>"),". It will then lookup\n",(0,a.mdx)("inlineCode",{parentName:"p"},"<key>")," in the keyed_variables (call this the ",(0,a.mdx)("inlineCode",{parentName:"p"},"value"),"). There are then four valid possibilities:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"no-arg placeholder, an arg-like ",(0,a.mdx)("inlineCode",{parentName:"li"},"value"),": resolve to ",(0,a.mdx)("inlineCode",{parentName:"li"},"value")),(0,a.mdx)("li",{parentName:"ol"},"no-arg placeholder, a dictionary ",(0,a.mdx)("inlineCode",{parentName:"li"},"value"),": resolve to ",(0,a.mdx)("inlineCode",{parentName:"li"},'value["DEFAULT"]')),(0,a.mdx)("li",{parentName:"ol"},"arg placeholder, a non-dictionary ",(0,a.mdx)("inlineCode",{parentName:"li"},"value"),": this is an error"),(0,a.mdx)("li",{parentName:"ol"},"arg placeholder, a dictionary ",(0,a.mdx)("inlineCode",{parentName:"li"},"value"),": resolve to ",(0,a.mdx)("inlineCode",{parentName:"li"},"value[<arg>]"))),(0,a.mdx)("p",null,'"unkeyed placeholders" are resolved by matching to any of the deps of the target. ',(0,a.mdx)("inlineCode",{parentName:"p"},"$(CXX)"),' will resolve\nto the "CXX" value in any dep\'s ',(0,a.mdx)("inlineCode",{parentName:"p"},"TemplateProviderInfo.unkeyed_variables")),(0,a.mdx)("p",null,"Fields:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},'unkeyed_variables: A mapping of names to arg-like values. These are used for "unkeyed placeholder" expansion.'),(0,a.mdx)("li",{parentName:"ul"},'keyed_variables: A mapping of names to arg-like values or dictionary of string to\narg-like values. These are used for "keyed placeholder" expansion.')),(0,a.mdx)("h3",{id:"members"},"Members"),(0,a.mdx)("table",{class:"starlark_table starlark_members_table"},(0,a.mdx)("thead",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"Member"),(0,a.mdx)("th",null,"Description"),(0,a.mdx)("th",null,"Type"))),(0,a.mdx)("tbody",null,(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("p",null,"keyed_variables")),(0,a.mdx)("td",null),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"UNKNOWN\n")))),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("p",null,"unkeyed_variables")),(0,a.mdx)("td",null),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"UNKNOWN\n")))))),(0,a.mdx)("h2",{id:"keyed_variables--unknown"},"keyed_variables : ",(0,a.mdx)("inlineCode",{parentName:"h2"},"UNKNOWN")),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"unkeyed_variables--unknown"},"unkeyed_variables : ",(0,a.mdx)("inlineCode",{parentName:"h2"},"UNKNOWN")))}s.isMDXComponent=!0}}]);