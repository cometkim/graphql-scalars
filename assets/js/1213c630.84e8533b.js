(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{134:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),c=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=c.a.createContext({}),l=function(e){var r=c.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return c.a.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},y=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),y=n,d=p["".concat(o,".").concat(y)]||p[y]||f[y]||a;return t?c.a.createElement(d,i(i({ref:r},s),{},{components:t})):c.a.createElement(d,i({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=y;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},66:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(3),c=t(7),a=(t(0),t(134)),o={id:"currency",title:"Currency",sidebar_label:"Currency"},i={unversionedId:"scalars/currency",id:"scalars/currency",isDocsHomePage:!1,title:"Currency",description:"A field whose value is an ISO-4217 currency.",source:"@site/docs/scalars/currency.md",slug:"/scalars/currency",permalink:"/docs/scalars/currency",editUrl:"https://github.com/urigo/graphql-scalars/edit/master/website/docs/scalars/currency.md",version:"current",sidebar_label:"Currency",sidebar:"sidebar",previous:{title:"Byte",permalink:"/docs/scalars/byte"},next:{title:"DateTime",permalink:"/docs/scalars/date-time"}},u=[],s={toc:u};function l(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A field whose value is an ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_4217"},"ISO-4217 currency"),"."))}l.isMDXComponent=!0}}]);