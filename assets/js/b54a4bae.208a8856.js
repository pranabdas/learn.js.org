"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[362],{8569:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var t=s(5893),o=s(1151);const r={title:"Core modules"},a=void 0,l={id:"node/core-modules",title:"Core modules",description:"These are the modules comes preinstalled with node.js like the path module we",source:"@site/docs/node/core-modules.md",sourceDirName:"node",slug:"/node/core-modules",permalink:"/javascript/node/core-modules",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/javascript/blob/main/docs/node/core-modules.md",tags:[],version:"current",frontMatter:{title:"Core modules"},sidebar:"docs",previous:{title:"Standar I/O",permalink:"/javascript/node/io"},next:{title:"File system",permalink:"/javascript/node/file-system"}},c={},i=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["These are the modules comes preinstalled with node.js like the ",(0,t.jsx)(n.code,{children:"path"})," module we\nused earlier."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const path = require("path");\n\nconst dirUpload = path.join(__dirname, "uploads");\n\nconsole.log(dirUpload);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"util"})," module:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const path = require("path");\nconst util = require("util");\n\nutil.log(path.basename(__filename));\n\nutil.log("  ^ the name of the current file.");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"28 Apr 22:37:34 - core.js\n28 Apr 22:37:34 -   ^ the name of the current file.\n"})}),"\n",(0,t.jsx)(n.p,{children:"We have dozens of such modules."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const v8 = require("v8");\n\nconsole.log(v8.getHeapStatistics());\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"{\n  total_heap_size: 4505600,\n  total_heap_size_executable: 524288,\n  total_physical_size: 3408264,\n  total_available_size: 2194589720,\n  used_heap_size: 2376352,\n  heap_size_limit: 2197815296,\n  malloced_memory: 8192,\n  peak_malloced_memory: 123200,\n  does_zap_garbage: 0,\n  number_of_native_contexts: 1,\n  number_of_detached_contexts: 0\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readline"})," module:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const readline = require("readline");\n\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nrl.question("What is you name? ", answer => {\n    console.log(`Hello ${answer}`);\n    process.exit();\n});\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var t=s(7294);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);