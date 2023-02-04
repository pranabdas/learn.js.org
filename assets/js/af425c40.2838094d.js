"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[715],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3014:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],i={title:"Understanding callbacks",sidebar_label:"Callbacks"},s=void 0,l={unversionedId:"node/callbacks",id:"node/callbacks",title:"Understanding callbacks",description:"As we have seen we are using many asynchronous functions. These functions can",source:"@site/docs/node/callbacks.md",sourceDirName:"node",slug:"/node/callbacks",permalink:"/javascript/node/callbacks",draft:!1,editUrl:"https://github.com/pranabdas/javascript/blob/main/docs/node/callbacks.md",tags:[],version:"current",frontMatter:{title:"Understanding callbacks",sidebar_label:"Callbacks"},sidebar:"docs",previous:{title:"File system",permalink:"/javascript/node/file-system"},next:{title:"Module Exports",permalink:"/javascript/node/module-exports"}},u={},p=[],f={toc:p},d="wrapper";function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)(d,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As we have seen we are using many asynchronous functions. These functions can\nexecute simultaneously alongside the main function. The main function does not\nwait for the asynchronous function to finish. In other words, async function\ndoes not block the main block execution."),(0,o.kt)("p",null,"In case of async function, we can pass another function as second argument. This\nis the callback function. Once the async function has finished, it can invoke\nour callback function. We can define what to do once the async task has finished\ninside this callback function."),(0,o.kt)("p",null,"For example async ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout()")," function takes two arguments: ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout(callback, delay)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let delay = 5000;\nconsole.log(`Waiting for ${delay/1000} sec.`);\n\nsetTimeout(() => {\n    console.log("The waiting is over!");\n}, delay);\n\nconsole.log("This is in the main program.");\n')))}m.isMDXComponent=!0}}]);