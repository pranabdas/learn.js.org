"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([["914"],{2001:function(e,t,n){n.r(t),n.d(t,{default:()=>ec});var a=n("5893"),i=n("7294"),r=n("7026"),o=n("4713"),l=n("4681"),s=n("3413"),d=n("5609"),c=n("6025"),u=n("9599"),m=n("346");let b={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function h(){let{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e,[n,a]=(0,i.useState)(!1),r=(0,i.useRef)(!1),{startScroll:o,cancelScroll:l}=(0,u.Ct)();return(0,u.RF)((e,n)=>{let{scrollY:i}=e,o=null==n?void 0:n.scrollY;if(!!o)r.current?r.current=!1:i>=o?(l(),a(!1)):i<t?a(!1):i+window.innerHeight<document.documentElement.scrollHeight&&a(!0)}),(0,m.S)(e=>{e.location.hash&&(r.current=!0,a(!1))}),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return(0,a.jsx)("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",l.k.common.backToTopButton,b.backToTopButton,e&&b.backToTopButtonShow),type:"button",onClick:t})}var p=n("7504"),x=n("6550"),f=n("4704"),j=n("140"),k=n("4987");function _(e){return(0,a.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,a.jsxs)("g",{fill:"#7a7a7a",children:[(0,a.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,a.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}let v="collapseSidebarButton_PEFL",g="collapseSidebarButtonIcon_kv0_";function S(e){let{onClick:t}=e;return(0,a.jsx)("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",v),onClick:t,children:(0,a.jsx)(_,{className:g})})}var C=n("2093"),I=n("5346");let N=Symbol("EmptyContext"),T=i.createContext(N);function Z(e){let{children:t}=e,[n,r]=(0,i.useState)(null),o=(0,i.useMemo)(()=>({expandedItem:n,setExpandedItem:r}),[n]);return(0,a.jsx)(T.Provider,{value:o,children:t})}var L=n("7455"),y=n("9246"),B=n("3012"),A=n("7227");function w(e){let{collapsed:t,categoryLabel:n,onClick:i}=e;return(0,a.jsx)("button",{"aria-label":t?(0,c.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:i})}function H(e){let{item:t,onItemClick:n,activePath:o,level:d,index:c,...u}=e,{items:m,label:b,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,j.L)(),k=function(e){let t=(0,A.Z)();return(0,i.useMemo)(()=>{if(e.href&&!e.linkUnlisted)return e.href;if(!t&&!!e.collapsible)return(0,s.LM)(e)},[e,t])}(t),_=(0,s._F)(t,o),v=(0,y.Mg)(x,o),{collapsed:g,setCollapsed:S}=(0,L.u)({initialState:()=>!!h&&!_&&t.collapsed}),{expandedItem:C,setExpandedItem:Z}=function(){let e=(0,i.useContext)(T);if(e===N)throw new I.i6("DocSidebarItemsExpandedStateProvider");return e}(),H=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!g;Z(e?null:c),S(e)};return!function(e){let{isActive:t,collapsed:n,updateCollapsed:a}=e,r=(0,I.D9)(t);(0,i.useEffect)(()=>{t&&!r&&n&&a(!1)},[t,r,n,a])}({isActive:_,collapsed:g,updateCollapsed:H}),(0,i.useEffect)(()=>{h&&null!=C&&C!==c&&f&&S(!0)},[h,C,c,S,f]),(0,a.jsxs)("li",{className:(0,r.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(d),"menu__list-item",{"menu__list-item--collapsed":g},p),children:[(0,a.jsxs)("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v}),children:[(0,a.jsx)(B.Z,{className:(0,r.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":_}),onClick:h?e=>{null==n||n(t),x?H(!1):(e.preventDefault(),H())}:()=>{null==n||n(t)},"aria-current":v?"page":void 0,role:h&&!x?"button":void 0,"aria-expanded":h&&!x?!g:void 0,href:h?null!=k?k:"#":k,...u,children:b}),x&&h&&(0,a.jsx)(w,{collapsed:g,categoryLabel:b,onClick:e=>{e.preventDefault(),H()}})]}),(0,a.jsx)(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:g,children:(0,a.jsx)(V,{items:m,tabIndex:g?-1:0,onItemClick:n,activePath:o,level:d+1})})]})}var E=n("3150"),M=n("2425");let W={menuExternalLink:"menuExternalLink_NmtK"};function F(e){let{item:t,onItemClick:n,activePath:i,level:o,index:d,...c}=e,{href:u,label:m,className:b,autoAddBaseUrl:h}=t,p=(0,s._F)(t,i),x=(0,E.Z)(u);return(0,a.jsx)("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",b),children:(0,a.jsxs)(B.Z,{className:(0,r.Z)("menu__link",!x&&W.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:u,...x&&{onClick:n?()=>n(t):void 0},...c,children:[m,!x&&(0,a.jsx)(M.Z,{})]})},m)}let R={menuHtmlItem:"menuHtmlItem_M9Kj"};function D(e){let{item:t,level:n,index:i}=e,{value:o,defaultStyle:s,className:d}=t;return(0,a.jsx)("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(n),s&&[R.menuHtmlItem,"menu__list-item"],d),dangerouslySetInnerHTML:{__html:o}},i)}function P(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,a.jsx)(H,{item:t,...n});case"html":return(0,a.jsx)(D,{item:t,...n});default:return(0,a.jsx)(F,{item:t,...n})}}let V=(0,i.memo)(function(e){let{items:t,...n}=e,i=(0,s.f)(t,n.activePath);return(0,a.jsx)(Z,{children:i.map((e,t)=>(0,a.jsx)(P,{item:e,index:t,...n},t))})}),U={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function K(e){let{path:t,sidebar:n,className:o}=e,s=function(){let{isActive:e}=(0,C.n)(),[t,n]=(0,i.useState)(e);return(0,u.RF)(t=>{let{scrollY:a}=t;e&&n(0===a)},[e]),e&&t}();return(0,a.jsx)("nav",{"aria-label":(0,c.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.Z)("menu thin-scrollbar",U.menu,s&&U.menuWithAnnouncementBar,o),children:(0,a.jsx)("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list"),children:(0,a.jsx)(V,{items:n,activePath:t,level:1})})})}let z={sidebar:"sidebar_njMd",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_wUlq",sidebarHidden:"sidebarHidden_VK0M",sidebarLogo:"sidebarLogo_isFc"},G=i.memo(function(e){let{path:t,sidebar:n,onCollapse:i,isHidden:o}=e,{navbar:{hideOnScroll:l},docs:{sidebar:{hideable:s}}}=(0,j.L)();return(0,a.jsxs)("div",{className:(0,r.Z)(z.sidebar,l&&z.sidebarWithHideableNavbar,o&&z.sidebarHidden),children:[l&&(0,a.jsx)(k.Z,{tabIndex:-1,className:z.sidebarLogo}),(0,a.jsx)(K,{path:t,sidebar:n}),s&&(0,a.jsx)(S,{onClick:i})]})});var Y=n("1179"),q=n("3780");let J=e=>{let{sidebar:t,path:n}=e,i=(0,q.e)();return(0,a.jsx)("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list"),children:(0,a.jsx)(V,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&i.toggle(),"link"===e.type&&i.toggle()},level:1})})},O=i.memo(function(e){return(0,a.jsx)(Y.Zo,{component:J,props:e})});function Q(e){let t=(0,f.i)();return(0,a.jsxs)(a.Fragment,{children:[("desktop"===t||"ssr"===t)&&(0,a.jsx)(G,{...e}),"mobile"===t&&(0,a.jsx)(O,{...e})]})}let X="expandButton_TmdG",$="expandButtonIcon_i1dp";function ee(e){let{toggleSidebar:t}=e;return(0,a.jsx)("div",{className:X,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,a.jsx)(_,{className:$})})}let et={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function en(e){var t;let{children:n}=e,r=(0,d.V)();return(0,a.jsx)(i.Fragment,{children:n},null!==(t=null==r?void 0:r.name)&&void 0!==t?t:"noSidebar")}function ea(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e,{pathname:s}=(0,x.TH)(),[d,c]=(0,i.useState)(!1),u=(0,i.useCallback)(()=>{d&&c(!1),!d&&(0,p.n)()&&c(!0),o(e=>!e)},[o,d]);return(0,a.jsx)("aside",{className:(0,r.Z)(l.k.docs.docSidebarContainer,et.docSidebarContainer,n&&et.docSidebarContainerHidden),onTransitionEnd:e=>{if(!!e.currentTarget.classList.contains(et.docSidebarContainer))n&&c(!0)},children:(0,a.jsx)(en,{children:(0,a.jsxs)("div",{className:(0,r.Z)(et.sidebarViewport,d&&et.sidebarViewportHidden),children:[(0,a.jsx)(Q,{sidebar:t,path:s,onCollapse:u,isHidden:d}),d&&(0,a.jsx)(ee,{toggleSidebar:u})]})})})}let ei={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function er(e){let{hiddenSidebarContainer:t,children:n}=e,i=(0,d.V)();return(0,a.jsx)("main",{className:(0,r.Z)(ei.docMainContainer,(t||!i)&&ei.docMainContainerEnhanced),children:(0,a.jsx)("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",ei.docItemWrapper,t&&ei.docItemWrapperEnhanced),children:n})})}let eo="docRoot_UBD9",el="docsWrapper_hBAB";function es(e){let{children:t}=e,n=(0,d.V)(),[r,o]=(0,i.useState)(!1);return(0,a.jsxs)("div",{className:el,children:[(0,a.jsx)(h,{}),(0,a.jsxs)("div",{className:eo,children:[n&&(0,a.jsx)(ea,{sidebar:n.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:o}),(0,a.jsx)(er,{hiddenSidebarContainer:r,children:t})]})]})}var ed=n("4593");function ec(e){let t=(0,s.SN)(e);if(!t)return(0,a.jsx)(ed.Z,{});let{docElement:n,sidebarName:i,sidebarItems:c}=t;return(0,a.jsx)(o.FG,{className:(0,r.Z)(l.k.page.docsDocPage),children:(0,a.jsx)(d.b,{name:i,items:c,children:(0,a.jsx)(es,{children:n})})})}},4593:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(5893);n(7294);var i=n(7026),r=n(6025),o=n(4403);function l(e){let{className:t}=e;return(0,a.jsx)("main",{className:(0,i.Z)("container margin-vert--xl",t),children:(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,a.jsx)(o.Z,{as:"h1",className:"hero__title",children:(0,a.jsx)(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,a.jsx)("p",{children:(0,a.jsx)(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,a.jsx)("p",{children:(0,a.jsx)(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);