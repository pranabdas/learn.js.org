"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[122],{3905:function(e,r,n){n.d(r,{Zo:function(){return i},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},i=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,d=u["".concat(c,".").concat(g)]||u[g]||m[g]||a;return n?t.createElement(d,l(l({ref:r},i),{},{components:n})):t.createElement(d,l({ref:r},i))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=g;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3245:function(e,r,n){n.r(r),n.d(r,{assets:function(){return i},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],s={title:"Arrays"},c=void 0,p={unversionedId:"basics/arrays",id:"basics/arrays",title:"Arrays",description:"You can use another way to define arrays:",source:"@site/docs/basics/arrays.md",sourceDirName:"basics",slug:"/basics/arrays",permalink:"/javascript/basics/arrays",draft:!1,editUrl:"https://github.com/pranabdas/javascript/blob/main/docs/basics/arrays.md",tags:[],version:"current",frontMatter:{title:"Arrays"},sidebar:"docs",previous:{title:"Conditional Statement",permalink:"/javascript/basics/conditional-statement"},next:{title:"Loop",permalink:"/javascript/basics/loop"}},i={},u=[{value:"Properties and methods of array (object)",id:"properties-and-methods-of-array-object",level:3}],m={toc:u},g="wrapper";function d(e){var r=e.components,n=(0,o.Z)(e,l);return(0,a.kt)(g,(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let colors\ncolors = ["red", "green", "blue", "orange"];\nconsole.log(colors)\n')),(0,a.kt)("p",null,"You can use another way to define arrays:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'colors = new Array("red", "green", "blue", "yellow");\nconsole.log(colors)\n')),(0,a.kt)("p",null,"In javascript arrays an object like we saw the ",(0,a.kt)("inlineCode",{parentName:"p"},"Date()")," object before. Arrays\ncan hold mixed data types:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let mixVar = [45, "New York", true]\nconsole.log(mixVar)\n')),(0,a.kt)("p",null,"We can access specific item by array index, which starts from 0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(mixVar[1])\n\nNew York\n")),(0,a.kt)("h3",{id:"properties-and-methods-of-array-object"},"Properties and methods of array (object)"),(0,a.kt)("p",null,"Length of an array property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(colors.length);\n\n4\n")),(0,a.kt)("p",null,"Methods: reverse the array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'console.log(colors.reverse());\n\n["yellow", "blue", "green", "red"] (4)\n')),(0,a.kt)("p",null,"Remove the first item:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'colors.shift();\nconsole.log(colors);\n\n["blue", "green", "red"] (3)\n')),(0,a.kt)("p",null,"Add new items to the front of an array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'colors.unshift("purple", "orange");\nconsole.log(colors);\n\n["purple", "orange", "blue", "green", "red"] (5)\n')),(0,a.kt)("p",null,"Remove the last item of an array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let removedItem;\nremovedItem = colors.pop();  // in this way you can use the removed item\nconsole.log(colors);\n\n\n["purple", "orange", "blue", "green"] (4)\n\nconsole.log(removedItem);\n\nred\n')),(0,a.kt)("p",null,"Add items to the end of the array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'colors.push("pink")\nconsole.log(colors)\n\n["purple", "orange", "blue", "green", "pink"] (5)\n')),(0,a.kt)("p",null,"You can remove items from the middle of the array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'colors.splice(2, 1) // .splice(position, number of item to remove)\nconsole.log(colors)\n\n["purple", "orange", "green", "pink"] (4)\n')),(0,a.kt)("p",null,"Copy an array using ",(0,a.kt)("inlineCode",{parentName:"p"},".slice()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let themeColors = colors.slice()\nconsole.log(themeColors)\n\n["purple", "orange", "green", "pink"] (4)\n')),(0,a.kt)("p",null,"Index of"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let pos = colors.indexOf("orange", 0); // give the position where to start the search, here 0.\nconsole.log(pos);\n\n1\n')),(0,a.kt)("p",null,"Join the array elements:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let stringArray = colors.join();\nconsole.log(stringArray)\n\npurple,orange,green,pink\n\nlet stringArray = colors.join(", "); // you can give the separator as argument\nconsole.log(stringArray)\n\npurple, orange, green, pink\n')))}d.isMDXComponent=!0}}]);