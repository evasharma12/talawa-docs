"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[8658],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9911:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),o=["components"],l={id:"plugins-overview",title:"Overview"},s=void 0,p={unversionedId:"features/plugins/plugins-overview",id:"features/plugins/plugins-overview",isDocsHomePage:!1,title:"Overview",description:"This section is a work in progress.",source:"@site/docs/features/plugins/overview.md",sourceDirName:"features/plugins",slug:"/features/plugins/plugins-overview",permalink:"/talawa-docs/docs/features/plugins/plugins-overview",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/features/plugins/overview.md",tags:[],version:"current",frontMatter:{id:"plugins-overview",title:"Overview"},sidebar:"someSidebar",previous:{title:"Onboarding",permalink:"/talawa-docs/docs/features/organisations/organisations-onboarding"},next:{title:"Billing",permalink:"/talawa-docs/docs/features/plugins/plugins-billing"}},u=[{value:"Summary",id:"summary",children:[],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This section is a work in progress."))),(0,r.kt)("p",null,"Plugins are an intigral part of talawah that will allow the community to create and expand on its core functionallity wereby allowing talawah to grow exponentially. This section aims to give an outline of how plugins are expected to work and simmilar integrations found on the web."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In order for plugins to be immplemented effectivly, the application will need to meet these preconditions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"All features of the application should expose endpoints that allow features to monitor none private application data and manage the avaliability of core application features."),(0,r.kt)("li",{parentName:"ol"},"The application must implement secure authorization and authentication for third party applications such as the plugins."),(0,r.kt)("li",{parentName:"ol"},"The application must support webhooks where by the application notifies registerd plugins of activities on the application."),(0,r.kt)("li",{parentName:"ol"},"The application must allow for each plugin to be configured to recieved the only the notifications that the user of the organizarion has allowed to it. "),(0,r.kt)("li",{parentName:"ol"},"The application must allow only plugins authorized to complete actions like enabling and disabling a feature.")),(0,r.kt)("p",null,"See existing implementations of plugins and micro apps on websites such as:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Wordpress "),(0,r.kt)("li",{parentName:"ol"},"Shopify")))}m.isMDXComponent=!0}}]);