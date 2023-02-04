"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[920],{2027:function(e,t,r){r.r(t),r.d(t,{default:function(){return U}});var n=r(7855),a=r(4165),l=r(5861),u=r(7294),s=r(2263),c=r(3929),o=r(5742),i=r(9960),m=r(5999),h=["zero","one","two","few","many","other"];function p(e){return h.filter((function(t){return e.includes(t)}))}var f={locale:"en",pluralForms:p(["one","other"]),select:function(e){return 1===e?"one":"other"}};function g(){var e=(0,s.Z)().i18n.currentLocale;return(0,u.useMemo)((function(){try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:p(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),f}var t,r}),[e])}function d(){var e=g();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var a=r.select(t),l=r.pluralForms.indexOf(a);return n[Math.min(l,n.length-1)]}(r,t,e)}}}var v=r(6550),y=r(412),E="q",S="ctx",I="version";var R=function(){var e=(0,v.k6)(),t=(0,v.TH)(),r=(0,s.Z)().siteConfig.baseUrl,n=y.Z.canUseDOM?new URLSearchParams(t.search):null,a=(null==n?void 0:n.get(E))||"",l=(null==n?void 0:n.get(S))||"",u=(null==n?void 0:n.get(I))||"",c=function(e){var r=new URLSearchParams(t.search);return e?r.set(E,e):r.delete(E),r};return{searchValue:a,searchContext:l,searchVersion:u,updateSearchPath:function(t){var r=c(t);e.replace({search:r.toString()})},generateSearchPageLink:function(e){var t=c(e);return r+"search?"+t.toString()}}},w=r(22),P=r(8202),b=r(2539),x=r(726),F=r(1073),Z=r(311),k=r(3926),C=r(1029),_={searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};function T(){var e=(0,s.Z)().siteConfig.baseUrl,t=d().selectMessage,r=R(),n=r.searchValue,c=r.searchContext,i=r.searchVersion,h=r.updateSearchPath,p=(0,u.useState)(n),f=p[0],g=p[1],v=(0,u.useState)(),y=v[0],E=v[1],S=(0,u.useState)(),I=S[0],b=S[1],x=""+e+i,F=(0,u.useMemo)((function(){return f?(0,m.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:f}):(0,m.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[f]);(0,u.useEffect)((function(){h(f),y&&(f?y(f,(function(e){b(e)})):b(void 0))}),[f,y]);var k=(0,u.useCallback)((function(e){g(e.target.value)}),[]);return(0,u.useEffect)((function(){n&&n!==f&&g(n)}),[n]),(0,u.useEffect)((function(){function e(){return(e=(0,l.Z)((0,a.Z)().mark((function e(){var t,r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.w)(x,c);case 2:t=e.sent,r=t.wrappedIndexes,n=t.zhDictionary,E((function(){return(0,P.v)(r,n,100)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c,x]),u.createElement(u.Fragment,null,u.createElement(o.Z,null,u.createElement("meta",{property:"robots",content:"noindex, follow"}),u.createElement("title",null,F)),u.createElement("div",{className:"container margin-vert--lg"},u.createElement("h1",null,F),u.createElement("input",{type:"search",name:"q",className:_.searchQueryInput,"aria-label":"Search",onChange:k,value:f,autoComplete:"off",autoFocus:!0}),!y&&f&&u.createElement("div",null,u.createElement(Z.Z,null)),I&&(I.length>0?u.createElement("p",null,t(I.length,(0,m.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:I.length}))):u.createElement("p",null,(0,m.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),u.createElement("section",null,I&&I.map((function(e){return u.createElement(M,{key:e.document.i,searchResult:e})})))))}function M(e){var t=e.searchResult,r=t.document,a=t.type,l=t.page,s=t.tokens,c=t.metadata,o=0===a,m=2===a,h=(o?r.b:l.b).slice(),p=m?r.s:r.t;o||h.push(l.t);var f="";if(C.vc&&s.length>0){for(var g,d=new URLSearchParams,v=(0,n.Z)(s);!(g=v()).done;){var y=g.value;d.append("_highlight",y)}f="?"+d.toString()}return u.createElement("article",{className:_.searchResultItem},u.createElement("h2",null,u.createElement(i.Z,{to:r.u+f+(r.h||""),dangerouslySetInnerHTML:{__html:m?(0,b.C)(p,s):(0,x.o)(p,(0,F.m)(c,"t"),s,100)}})),h.length>0&&u.createElement("p",{className:_.searchResultItemPath},(0,k.e)(h)),m&&u.createElement("p",{className:_.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,x.o)(r.t,(0,F.m)(c,"t"),s,100)}}))}var U=function(){return u.createElement(c.Z,null,u.createElement(T,null))}}}]);