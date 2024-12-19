"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([["2184"],{9759:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>o,assets:()=>c,toc:()=>s,contentTitle:()=>l});var o=JSON.parse('{"id":"electron/electron","title":"Creating your first Electron.js application","description":"We head over to our electron folder, and issue npm init command. It will ask","source":"@site/docs/electron/electron.md","sourceDirName":"electron","slug":"/electron/","permalink":"/javascript/electron/","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/javascript/blob/main/docs/electron/electron.md","tags":[],"version":"current","frontMatter":{"title":"Creating your first Electron.js application","sidebar_label":"Electron.js"},"sidebar":"docs","previous":{"title":"Electron","permalink":"/javascript/category/electron"},"next":{"title":"React","permalink":"/javascript/category/react"}}'),r=t("5893"),i=t("65");let a={title:"Creating your first Electron.js application",sidebar_label:"Electron.js"},l=void 0,c={},s=[];function d(e){let n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["We head over to our electron folder, and issue ",(0,r.jsx)(n.code,{children:"npm init"})," command. It will ask\nseveral questions, or you can ",(0,r.jsx)(n.code,{children:"npm init -y"})," which will say yes to all questions\nand fill the answers with defaults. It will create a ",(0,r.jsx)(n.code,{children:"package.json"})," file which\nyou can modify later. I have made a few modifications, and mine looks like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\n  "name": "electronapp",\n  "version": "1.0.0",\n  "description": "My first electron application.",\n  "main": "index.js",\n  "scripts": {\n    "start": "electron ."\n  },\n  "repository": {\n    "type": "git",\n    "url": "https://github.com/pranabdas/js-learning/"\n  },\n  "author": "Pranab Das",\n  "license": "ISC",\n  "dependencies": {\n    "electron": "^8.2.4"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now we need to install Electron. We will install it locally."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"npm install electron@latest\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create entry point of our application which is ",(0,r.jsx)(n.code,{children:"index.js"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const electron = require("electron");\n\nfunction createWindow() {\n    let appWindow = new electron.BrowserWindow({\n        height: 600,\n        width: 800\n    });\n    appWindow.loadURL("https://google.com");\n};\n\nelectron.app.on(\'ready\', createWindow);\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now we can start our application:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm start\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In some cases, this is all you need to have a wrapped web applications. You run\nyour webapp through a server. You don't need to update the app every time you\nmake changes to your app. But this app requires internet connection to function.\nAnd depending on the connection speed, the app may be sluggish. Here we are\ngoing to learn to create a local app. All we have to is to load a local file,\nsay ",(0,r.jsx)(n.code,{children:"index.html"})," instead of the external url."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const electron = require('electron');\n\nfunction createWindow() {\n\n  // Create the browser window.\n  let win = new electron.BrowserWindow({\n    width: 800,\n    height: 600,\n    minWidth: 300,\n    minHeight: 300,\n    webPreferences: {\n      // in case you need to use node methods in that window\n      nodeIntegration: true\n      }\n  });\n\n  // load file index.html\n  win.loadFile('index.html');\n\n  // clear the window once closed\n  win.on('closed', () => {\n    win = null;\n  });\n};\n\nelectron.app.on('ready', createWindow);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"index.html"})," is regular html file."]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},65:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var o=t(7294);let r={},i=o.createContext(r);function a(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);