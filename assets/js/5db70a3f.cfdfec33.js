"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([["269"],{545:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>p,assets:()=>t,toc:()=>i,frontMatter:()=>l});var s=JSON.parse('{"id":"basics/arrays","title":"Arrays","description":"You can use another way to define arrays:","source":"@site/docs/basics/arrays.md","sourceDirName":"basics","slug":"/basics/arrays","permalink":"/javascript/basics/arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/javascript/blob/main/docs/basics/arrays.md","tags":[],"version":"current","frontMatter":{"title":"Arrays"},"sidebar":"docs","previous":{"title":"Conditional Statement","permalink":"/javascript/basics/conditional-statement"},"next":{"title":"Loop","permalink":"/javascript/basics/loop"}}'),o=r("5893"),a=r("65");let l={title:"Arrays"},c=void 0,t={},i=[{value:"Properties and methods of array (object)",id:"properties-and-methods-of-array-object",level:3}];function d(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let colors\ncolors = ["red", "green", "blue", "orange"];\nconsole.log(colors)\n'})}),"\n",(0,o.jsx)(n.p,{children:"You can use another way to define arrays:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'colors = new Array("red", "green", "blue", "yellow");\nconsole.log(colors)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In javascript arrays an object like we saw the ",(0,o.jsx)(n.code,{children:"Date()"})," object before. Arrays\ncan hold mixed data types:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let mixVar = [45, "New York", true]\nconsole.log(mixVar)\n'})}),"\n",(0,o.jsx)(n.p,{children:"We can access specific item by array index, which starts from 0:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"console.log(mixVar[1])\n\nNew York\n"})}),"\n",(0,o.jsx)(n.h3,{id:"properties-and-methods-of-array-object",children:"Properties and methods of array (object)"}),"\n",(0,o.jsx)(n.p,{children:"Length of an array property:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"console.log(colors.length);\n\n4\n"})}),"\n",(0,o.jsx)(n.p,{children:"Methods: reverse the array:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'console.log(colors.reverse());\n\n["yellow", "blue", "green", "red"] (4)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Remove the first item:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'colors.shift();\nconsole.log(colors);\n\n["blue", "green", "red"] (3)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Add new items to the front of an array:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'colors.unshift("purple", "orange");\nconsole.log(colors);\n\n["purple", "orange", "blue", "green", "red"] (5)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Remove the last item of an array:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let removedItem;\nremovedItem = colors.pop();  // in this way you can use the removed item\nconsole.log(colors);\n\n\n["purple", "orange", "blue", "green"] (4)\n\nconsole.log(removedItem);\n\nred\n'})}),"\n",(0,o.jsx)(n.p,{children:"Add items to the end of the array:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'colors.push("pink")\nconsole.log(colors)\n\n["purple", "orange", "blue", "green", "pink"] (5)\n'})}),"\n",(0,o.jsx)(n.p,{children:"You can remove items from the middle of the array:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'colors.splice(2, 1) // .splice(position, number of item to remove)\nconsole.log(colors)\n\n["purple", "orange", "green", "pink"] (4)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Copy an array using ",(0,o.jsx)(n.code,{children:".slice()"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let themeColors = colors.slice()\nconsole.log(themeColors)\n\n["purple", "orange", "green", "pink"] (4)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Index of"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let pos = colors.indexOf("orange", 0); // give the position where to start the search, here 0.\nconsole.log(pos);\n\n1\n'})}),"\n",(0,o.jsx)(n.p,{children:"Join the array elements:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let stringArray = colors.join();\nconsole.log(stringArray)\n\npurple,orange,green,pink\n\nlet stringArray = colors.join(", "); // you can give the separator as argument\nconsole.log(stringArray)\n\npurple, orange, green, pink\n'})})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},65:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return l}});var s=r(7294);let o={},a=s.createContext(o);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);