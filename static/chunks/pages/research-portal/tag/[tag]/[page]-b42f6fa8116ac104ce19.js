_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"+lMf":function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Ff2n"),o=function(t){var e=t.level,a=t.children,r=Object(l.a)(t,["level","children"]);return Object(n.createElement)("h".concat(e),r,a)},c=r.a.createElement,i=function(t){return c("div",{className:"bg-graphite-900 bg-image-grid bg-top text-white"},c("div",{className:"container-1400 mx-auto px-5 py-20 text-center"},c(o,{level:t.hLevel||1,className:"h1 text-shadow-glow"},t.title)))};i.defaultProps={hLevel:1};e.a=i},AwvZ:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/research-portal/tag/[tag]/[page]",function(){return a("vVMj")}])},DNLs:function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n).a.createElement,l=function(t){var e=new Date(t.timestamp);return r("time",{dateTime:e.toISOString()},e.toLocaleDateString(t.locale,t.format))};l.defaultProps={format:{weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"},locale:"en-us",offset:-216e5},e.a=l},Ff2n:function(t,e,a){"use strict";function n(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}a.d(e,"a",(function(){return n}))},OoXJ:function(t,e,a){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],n=!0,r=!1,l=void 0;try{for(var o,c=t[Symbol.iterator]();!(n=(o=c.next()).done)&&(a.push(o.value),!e||a.length!==e);n=!0);}catch(i){r=!0,l=i}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return a}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=a("q1tI"),o=a.n(l),c=a("YFqc"),i=a.n(c),s=o.a.createElement;e.a=function(t){return s("div",null,s("h3",{className:"fluid-text-lg font-bold bg-black text-white px-5 py-1 mb-3"},"Tags"),s("ul",{className:"px-5 py-1 space-y-2"},Object.entries(t.tags).map((function(e){var a=r(e,2),n=a[0],l=a[1];return s("li",{key:n},s(i.a,{href:"".concat(t.path,"/[tag]/[page]"),as:"".concat(t.path,"/").concat(n,"/1")},s("a",null,l)))}))))}},"YQ+D":function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("YFqc"),o=a.n(l),c=a("DNLs"),i=a("xY5u"),s=r.a.createElement;e.a=function(t){var e,a,n,r,l;return s(o.a,{href:"".concat(t.path,"/post/[slug]"),as:"".concat(t.path,"/post/").concat(t.slug),key:t.slug},s("a",{className:"flex flex-col bg-white text-black shadow ".concat(t.containerClasses)},s("div",{className:"relative aspect-ratio-16:9"},s(i.a,{src:t.cover,sizes:"(min-width: 1920px) 460px, (min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw",alt:t.title,className:"absolute inset-0 w-full h-full object-cover"})),s("div",{className:"p-6 flex-1 flex flex-col"},s("p",{className:"text-teal-700 font-bold fluid-text-xs uppercase"},t.tags.length?t.tags[0]:s("span",null,"\xa0")),s("h2",{className:"fluid-text-lg mb-1 font-bold"},t.title),t.date_published&&s("p",{className:"text-gray-700 fluid-text-xs mb-5"},s(c.a,{timestamp:t.date_published,format:{year:"numeric",month:"long",day:"numeric"}})),s("div",{className:"mt-auto flex items-center fluid-text-xs text-gray-700"},(null===(e=t.author)||void 0===e?void 0:e.avatar)&&(null===(a=t.author)||void 0===a?void 0:a.name)&&s(i.a,{src:null===(n=t.author)||void 0===n?void 0:n.avatar,sizes:"32px",alt:null===(r=t.author)||void 0===r?void 0:r.name,className:"h-8 w-8 object-cover rounded-full mr-3"}),null===(l=t.author)||void 0===l?void 0:l.name))))}},"t+4z":function(t,e,a){"use strict";var n=a("wx14"),r=a("q1tI"),l=a.n(r),o=a("+lMf"),c=a("YQ+D"),i=a("OoXJ"),s=a("YFqc"),u=a.n(s),p=a("IP2g"),g=a("wHSu"),f=l.a.createElement,m=function(t){for(var e=[],a=1;a<=t.totalPages;a++)e.push(f("li",{key:"page-".concat(a)},a===t.currentPage?f("span",{className:"inline-block bg-gray-500 py-1 px-3"},a):f(u.a,{href:"".concat(t.path,"/[page]"),as:"".concat(t.path,"/").concat(a)},f("a",{className:"inline-block py-1 px-3 hover:bg-gray-400"},a))));return f("ul",{className:"flex justify-center space-x-2 font-bold"},t.currentPage>1&&f("li",null,f(u.a,{href:"".concat(t.path,"/[page]"),as:"".concat(t.path,"/").concat(t.currentPage-1)},f("a",{className:"inline-block py-1 px-3 hover:bg-gray-400",title:"previous page"},f(p.a,{icon:g.b})))),t.totalPages>1&&e,t.currentPage<t.totalPages&&f("li",null,f(u.a,{href:"".concat(t.path,"/[page]"),as:"".concat(t.path,"/").concat(t.currentPage+1)},f("a",{className:"inline-block py-1 px-3 hover:bg-gray-400",title:"next page"},f(p.a,{icon:g.c})))))},h=l.a.createElement;e.a=function(t){var e;return h(l.a.Fragment,null,h(o.a,{title:t.heroTitle}),h("div",{className:"bg-gray-200"},h("div",{className:"container-1400 mx-auto px-5 py-20 lg:flex"},h("div",{className:"lg:w-3/4"},h("h2",{className:"h4 mb-10"},t.title),h("div",{className:"grid md:grid-cols-2 xl:grid-cols-6 gap-6"},t.posts.map((function(e,a){return h(c.a,Object(n.a)({},e,{containerClasses:a%5<2?"xl:col-span-3":"xl:col-span-2",key:e.slug,path:t.path}))}))),(null===(e=t.pagination)||void 0===e?void 0:e.totalPages)>1&&h("div",{className:"mt-10"},h(m,Object(n.a)({path:t.paginationPath},t.pagination)))),h("aside",{className:"lg:order-first lg:w-1/4 mt-20 lg:mt-0 lg:mr-10 xl:mr-20"},h(i.a,{tags:t.allTags,path:"".concat(t.path,"/tag")})))))}},vVMj:function(t,e,a){"use strict";a.r(e),a.d(e,"__N_SSG",(function(){return u}));var n=a("q1tI"),r=a.n(n),l=a("JwBy"),o=a("t+4z"),c=a("TDWf"),i=a("nOHt"),s=r.a.createElement,u=!0;e.default=function(t){var e=Object(i.useRouter)();return s(l.a,null,s(c.a,{title:"Research Portal: ".concat(t.allTags[e.query.tag]),description:"Read our research articles, stories, biohacking, reverse engineering, how-to videos, and more!"}),s(o.a,{allTags:t.allTags,heroTitle:"801 Labs Research Portal",pagination:t.pagination,paginationPath:"/research-portal/tag/".concat(e.query.tag),path:"/research-portal",posts:t.posts,title:t.allTags[e.query.tag]}))}},wx14:function(t,e,a){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}a.d(e,"a",(function(){return n}))}},[["AwvZ",0,2,4,3,1,5,6]]]);