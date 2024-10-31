"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["47749"],{70531:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>u,toc:()=>p,frontMatter:()=>a});var s=JSON.parse('{"id":"typescript-support","title":"TypeScript Support","description":"Docusaurus is written in TypeScript and provides first-class TypeScript support.","source":"@site/docs/typescript-support.mdx","sourceDirName":".","slug":"/typescript-support","permalink":"/docs/typescript-support","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/typescript-support.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1730375676000,"frontMatter":{"description":"Docusaurus is written in TypeScript and provides first-class TypeScript support."},"sidebar":"docs","previous":{"title":"Playground","permalink":"/docs/playground"},"next":{"title":"Guides","permalink":"/docs/category/guides"}}'),r=n("24246"),i=n("80980"),o=n("15398"),c=n("58636");let a={description:"Docusaurus is written in TypeScript and provides first-class TypeScript support."},l="TypeScript Support",u={},p=[{value:"Initialization",id:"initialization",level:2},{value:"Setup",id:"setup",level:2},{value:"Typing the config file",id:"typing-config",level:2},{value:"Swizzling TypeScript theme components",id:"swizzling-typescript-theme-components",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{Details:n}=t;return!n&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"typescript-support",children:"TypeScript Support"})}),"\n",(0,r.jsx)(t.p,{children:"Docusaurus is written in TypeScript and provides first-class TypeScript support."}),"\n",(0,r.jsxs)(t.p,{children:["The minimum required version is ",(0,r.jsx)(t.strong,{children:"TypeScript 5.1"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"initialization",children:"Initialization"}),"\n",(0,r.jsxs)(t.p,{children:["Docusaurus supports writing and using TypeScript theme components. If the init template provides a TypeScript variant, you can directly initialize a site with full TypeScript support by using the ",(0,r.jsx)(t.code,{children:"--typescript"})," flag."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx create-docusaurus@latest my-website classic --typescript\n"})}),"\n",(0,r.jsx)(t.p,{children:"Below are some guides on how to migrate an existing project to TypeScript."}),"\n",(0,r.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(t.p,{children:"Add the following packages to your project:"}),"\n",(0,r.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(c.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev typescript @docusaurus/module-type-aliases @docusaurus/tsconfig @docusaurus/types\n"})})}),(0,r.jsx)(c.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add --dev typescript @docusaurus/module-type-aliases @docusaurus/tsconfig @docusaurus/types\n"})})}),(0,r.jsx)(c.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add --save-dev typescript @docusaurus/module-type-aliases @docusaurus/tsconfig @docusaurus/types\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["Then add ",(0,r.jsx)(t.code,{children:"tsconfig.json"})," to your project root with the following content:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n  "extends": "@docusaurus/tsconfig",\n  "compilerOptions": {\n    "baseUrl": "."\n  }\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Docusaurus doesn't use this ",(0,r.jsx)(t.code,{children:"tsconfig.json"})," to compile your project. It is added just for a nicer Editor experience, although you can choose to run ",(0,r.jsx)(t.code,{children:"tsc"})," to type check your code for yourself or on CI."]}),"\n",(0,r.jsx)(t.p,{children:"Now you can start writing TypeScript theme components."}),"\n",(0,r.jsx)(t.h2,{id:"typing-config",children:"Typing the config file"}),"\n",(0,r.jsx)(t.p,{children:"It is possible to use a TypeScript config file in Docusaurus."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="docusaurus.config.ts"',children:"import type {Config} from '@docusaurus/types';\nimport type * as Preset from '@docusaurus/preset-classic';\n\n// highlight-next-line\nconst config: Config = {\n  title: 'My Site',\n  favicon: 'img/favicon.ico',\n\n  /* Your site config here */\n\n  presets: [\n    [\n      'classic',\n      {\n        /* Your preset config here */\n        // highlight-next-line\n      } satisfies Preset.Options,\n    ],\n  ],\n\n  themeConfig: {\n    /* Your theme config here */\n    // highlight-next-line\n  } satisfies Preset.ThemeConfig,\n};\n\nexport default config;\n"})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsxs)("summary",{children:["It is also possible to use ",(0,r.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html",children:"JSDoc type annotations"})," within a ",(0,r.jsx)(t.code,{children:".js"})," file:"]}),(0,r.jsx)(t.p,{children:"By default, the Docusaurus TypeScript config does not type-check JavaScript files."}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"// @ts-check"})," comment ensures the config file is properly type-checked when running ",(0,r.jsx)(t.code,{children:"npx tsc"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// highlight-next-line\n// @ts-check\n\n// highlight-next-line\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  tagline: 'Dinosaurs are cool',\n  favicon: 'img/favicon.ico',\n\n  /* Your site config here */\n\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      // highlight-next-line\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      (\n        {\n          /* Your preset config here */\n        }\n      ),\n    ],\n  ],\n  themeConfig:\n    // highlight-next-line\n    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */\n    (\n      {\n        /* Your theme config here */\n      }\n    ),\n};\n\nexport default config;\n"})})]}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.p,{children:"Type annotations are very useful and help your IDE understand the type of config objects!"}),(0,r.jsx)(t.p,{children:"The best IDEs (VS Code, WebStorm, IntelliJ...) will provide a nice auto-completion experience."})]}),"\n",(0,r.jsx)(t.h2,{id:"swizzling-typescript-theme-components",children:"Swizzling TypeScript theme components"}),"\n",(0,r.jsxs)(t.p,{children:["For themes that support TypeScript theme components, you can add the ",(0,r.jsx)(t.code,{children:"--typescript"})," flag to the end of the ",(0,r.jsx)(t.code,{children:"swizzle"})," command to get TypeScript source code. For example, the following command will generate ",(0,r.jsx)(t.code,{children:"index.tsx"})," and ",(0,r.jsx)(t.code,{children:"styles.module.css"})," into ",(0,r.jsx)(t.code,{children:"src/theme/Footer"}),"."]}),"\n",(0,r.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(c.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm run swizzle @docusaurus/theme-classic Footer -- --typescript\n"})})}),(0,r.jsx)(c.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn swizzle @docusaurus/theme-classic Footer --typescript\n"})})}),(0,r.jsx)(c.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm run swizzle @docusaurus/theme-classic Footer --typescript\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["All official Docusaurus themes support TypeScript theme components, including ",(0,r.jsx)(t.a,{href:"/docs/api/themes/@docusaurus/theme-classic",children:(0,r.jsx)(t.code,{children:"theme-classic"})}),", ",(0,r.jsx)(t.a,{href:"/docs/api/themes/@docusaurus/theme-live-codeblock",children:(0,r.jsx)(t.code,{children:"theme-live-codeblock"})}),", and ",(0,r.jsx)(t.a,{href:"/docs/api/themes/@docusaurus/theme-search-algolia",children:(0,r.jsx)(t.code,{children:"theme-search-algolia"})}),". If you are a Docusaurus theme package author who wants to add TypeScript support, see the ",(0,r.jsx)(t.a,{href:"/docs/api/plugin-methods/extend-infrastructure#getTypeScriptThemePath",children:"Lifecycle APIs docs"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},58636:function(e,t,n){n.d(t,{Z:()=>o});var s=n("24246");n("27378");var r=n("90496");let i="tabItem_pnkT";function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n,children:t})}},15398:function(e,t,n){n.d(t,{Z:()=>v});var s=n("24246"),r=n("27378"),i=n("90496"),o=n("54947"),c=n("3620"),a=n("844"),l=n("97486"),u=n("32263"),p=n("16971");function d(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var m=n("71607");let f="tabList_Qoir",g="tabItem_AQgk";function y(e){let{className:t,block:n,selectedValue:r,selectValue:c,tabValues:a}=e,l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),p=e=>{let t=e.currentTarget,n=a[l.indexOf(t)].value;n!==r&&(u(t),c(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{let n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{let n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1]}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:a.map(e=>{let{value:t,label:n,attributes:o}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:p,...o,className:(0,i.Z)("tabs__item",g,o?.className,{"tabs__item--active":r===t}),children:n??t},t)})})}function x(e){let{lazy:t,children:n,selectedValue:o}=e,c=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=c.find(e=>e.props.value===o);return e?(0,r.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:c.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))})}function j(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:s}=e,i=function(e){let{values:t,children:n}=e;return(0,r.useMemo)(()=>{let e=t??d(n).map(e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}});return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[o,m]=(0,r.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let s=n.find(e=>e.default)??n[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:t,tabValues:i})),[f,g]=function(e){let{queryString:t=!1,groupId:n}=e,s=(0,c.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n}),o=(0,l._X)(i);return[o,(0,r.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})},[i,s])]}({queryString:n,groupId:s}),[y,x]=function(e){var t;let{groupId:n}=e;let s=(t=n)?`docusaurus.tab.${t}`:null,[i,o]=(0,p.Nk)(s);return[i,(0,r.useCallback)(e=>{if(!!s)o.set(e)},[s,o])]}({groupId:s}),j=(()=>{let e=f??y;return h({value:e,tabValues:i})?e:null})();return(0,a.Z)(()=>{j&&m(j)},[j]),{selectedValue:o,selectValue:(0,r.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),x(e)},[g,x,i]),tabValues:i}}(e);return(0,s.jsxs)("div",{className:(0,i.Z)("tabs-container",f),children:[(0,s.jsx)(y,{...t,...e}),(0,s.jsx)(x,{...t,...e})]})}function v(e){let t=(0,m.Z)();return(0,s.jsx)(j,{...e,children:d(e.children)},String(t))}},80980:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return o}});var s=n(27378);let r={},i=s.createContext(r);function o(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);