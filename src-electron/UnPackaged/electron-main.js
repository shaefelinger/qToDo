module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=50)}([function(t,e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof global&&global)||function(){return this}()||Function("return this")()},function(t,e){t.exports=require("electron")},function(t,e,n){var r=n(0),o=n(31),i=n(4),c=n(34),u=n(35),a=n(57),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)&&(u||"string"==typeof f[t])||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var r=n(8),o=n(9),i=n(21);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},function(t,e,n){var r=n(5);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(8),o=n(32),i=n(3),c=n(33),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(56),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e){t.exports={}},function(t,e,n){var r=n(54),o=n(30);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=!1},function(t,e,n){var r=n(17),o=n(0);t.exports="process"==r(o.process)},function(t,e,n){var r=n(0),o=n(6),i=n(4),c=n(19),u=n(27),a=n(26),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,e,n,u){var a,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),a=s(n),a.source||(a.source=l.join("string"==typeof e?e:""))),t!==r?(f?!v&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(0),o=n(19),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},function(t,e,n){var r=n(0),o=n(6);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(0),o=n(7),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(10);t.exports=r("navigator","userAgent")||""},function(t,e){t.exports={}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(31),o=n(34),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r,o,i,c=n(62),u=n(0),a=n(7),f=n(6),s=n(4),l=n(18),p=n(25),v=n(23),d=u.WeakMap,h=function(t){return i(t)?o(t):r(t,{})},y=function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(c){var m=l.state||(l.state=new d),g=m.get,x=m.has,b=m.set;r=function(t,e){return e.facade=t,b.call(m,t,e),e},o=function(t){return g.call(m,t)||{}},i=function(t){return x.call(m,t)}}else{var w=p("state");v[w]=!0,r=function(t,e){return e.facade=t,f(t,w,e),e},o=function(t){return s(t,w)?t[w]:{}},i=function(t){return s(t,w)}}t.exports={set:r,get:o,has:i,enforce:h,getterFor:y}},function(t,e,n){var r=n(18),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(8),o=n(64),i=n(21),c=n(12),u=n(33),a=n(4),f=n(32),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=u(e,!0),f)try{return s(t,e)}catch(n){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(9).f,o=n(4),i=n(2),c=i("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,c)&&r(t,c,{configurable:!0,value:e})}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(13),o=n(18);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.10.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(8),o=n(5),i=n(20);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(14),o=n(36),i=n(5);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(r?38===o:o>37&&o<41)}))},function(t,e,n){var r,o,i=n(0),c=n(22),u=i.process,a=u&&u.versions,f=a&&a.v8;f?(r=f.split("."),o=r[0]+r[1]):c&&(r=c.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/),r&&(o=r[1]))),t.exports=o&&+o},function(t,e,n){var r,o=n(3),i=n(58),c=n(24),u=n(23),a=n(41),f=n(20),s=n(25),l=">",p="<",v="prototype",d="script",h=s("IE_PROTO"),y=function(){},m=function(t){return p+d+l+t+p+"/"+d+l},g=function(t){t.write(m("")),t.close();var e=t.parentWindow.Object;return t=null,e},x=function(){var t,e=f("iframe"),n="java"+d+":";return e.style.display="none",a.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(m("document.F=Object")),t.close(),t.F},b=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(e){}b=r?g(r):x();var t=c.length;while(t--)delete b[v][c[t]];return b()};u[h]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(y[v]=o(t),n=new y,y[v]=null,n[h]=t):n=b(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(4),o=n(12),i=n(60).indexOf,c=n(23);t.exports=function(t,e){var n,u=o(t),a=0,f=[];for(n in u)!r(c,n)&&r(u,n)&&f.push(n);while(e.length>a)r(u,n=e[a++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(40),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(10);t.exports=r("document","documentElement")},function(t,e,n){var r=n(0),o=n(28).f,i=n(6),c=n(15),u=n(19),a=n(65),f=n(43);t.exports=function(t,e){var n,s,l,p,v,d,h=t.target,y=t.global,m=t.stat;if(s=y?r:m?r[h]||u(h,{}):(r[h]||{}).prototype,s)for(l in e){if(v=e[l],t.noTargetGet?(d=o(s,l),p=d&&d.value):p=s[l],n=f(y?l:h+(m?".":"#")+l,t.forced),!n&&void 0!==p){if(typeof v===typeof p)continue;a(v,p)}(t.sham||p&&p.sham)&&i(v,"sham",!0),c(s,l,v,t)}}},function(t,e,n){var r=n(5),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==f||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r,o,i,c=n(5),u=n(45),a=n(6),f=n(4),s=n(2),l=n(13),p=s("iterator"),v=!1,d=function(){return this};[].keys&&(i=[].keys(),"next"in i?(o=u(u(i)),o!==Object.prototype&&(r=o)):v=!0);var h=void 0==r||c((function(){var t={};return r[p].call(t)!==t}));h&&(r={}),l&&!h||f(r,p)||a(r,p,d),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:v}},function(t,e,n){var r=n(4),o=n(70),i=n(25),c=n(71),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var r=n(16);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r,o,i,c=n(0),u=n(5),a=n(46),f=n(41),s=n(20),l=n(48),p=n(14),v=c.location,d=c.setImmediate,h=c.clearImmediate,y=c.process,m=c.MessageChannel,g=c.Dispatch,x=0,b={},w="onreadystatechange",S=function(t){if(b.hasOwnProperty(t)){var e=b[t];delete b[t],e()}},j=function(t){return function(){S(t)}},O=function(t){S(t.data)},T=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};d&&h||(d=function(t){var e=[],n=1;while(arguments.length>n)e.push(arguments[n++]);return b[++x]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(x),x},h=function(t){delete b[t]},p?r=function(t){y.nextTick(j(t))}:g&&g.now?r=function(t){g.now(j(t))}:m&&!l?(o=new m,i=o.port2,o.port1.onmessage=O,r=a(i.postMessage,i,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts&&v&&"file:"!==v.protocol&&!u(T)?(r=T,c.addEventListener("message",O,!1)):r=w in s("script")?function(t){f.appendChild(s("script"))[w]=function(){f.removeChild(this),S(t)}}:function(t){setTimeout(j(t),0)}),t.exports={set:d,clear:h}},function(t,e,n){var r=n(22);t.exports=/(?:iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,e,n){"use strict";var r=n(16),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){t.exports=n(94)},function(t,e,n){var r=n(0),o=n(52),i=n(53),c=n(6),u=n(2),a=u("iterator"),f=u("toStringTag"),s=i.values;for(var l in o){var p=r[l],v=p&&p.prototype;if(v){if(v[a]!==s)try{c(v,a,s)}catch(h){v[a]=s}if(v[f]||c(v,f,l),o[l])for(var d in i)if(v[d]!==i[d])try{c(v,d,i[d])}catch(h){v[d]=i[d]}}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(12),o=n(55),i=n(11),c=n(26),u=n(63),a="Array Iterator",f=c.set,s=c.getterFor(a);t.exports=u(Array,"Array",(function(t,e){f(this,{type:a,target:r(t),index:0,kind:e})}),(function(){var t=s(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){var r=n(5),o=n(17),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(2),o=n(37),i=n(9),c=r("unscopables"),u=Array.prototype;void 0==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(35);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(8),o=n(9),i=n(3),c=n(59);t.exports=r?Object.defineProperties:function(t,e){i(t);var n,r=c(e),u=r.length,a=0;while(u>a)o.f(t,n=r[a++],e[n]);return t}},function(t,e,n){var r=n(38),o=n(24);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(12),o=n(39),i=n(61),c=function(t){return function(e,n,c){var u,a=r(e),f=o(a.length),s=i(c,f);if(t&&n!=n){while(f>s)if(u=a[s++],u!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(40),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(0),o=n(27),i=r.WeakMap;t.exports="function"===typeof i&&/native code/.test(o(i))},function(t,e,n){"use strict";var r=n(42),o=n(69),i=n(45),c=n(72),u=n(29),a=n(6),f=n(15),s=n(2),l=n(13),p=n(11),v=n(44),d=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,y=s("iterator"),m="keys",g="values",x="entries",b=function(){return this};t.exports=function(t,e,n,s,v,w,S){o(n,e,s);var j,O,T,P=function(t){if(t===v&&A)return A;if(!h&&t in M)return M[t];switch(t){case m:return function(){return new n(this,t)};case g:return function(){return new n(this,t)};case x:return function(){return new n(this,t)}}return function(){return new n(this)}},E=e+" Iterator",_=!1,M=t.prototype,L=M[y]||M["@@iterator"]||v&&M[v],A=!h&&L||P(v),k="Array"==e&&M.entries||L;if(k&&(j=i(k.call(new t)),d!==Object.prototype&&j.next&&(l||i(j)===d||(c?c(j,d):"function"!=typeof j[y]&&a(j,y,b)),u(j,E,!0,!0),l&&(p[E]=b))),v==g&&L&&L.name!==g&&(_=!0,A=function(){return L.call(this)}),l&&!S||M[y]===A||a(M,y,A),p[e]=A,v)if(O={values:P(g),keys:w?A:P(m),entries:P(x)},S)for(T in O)(h||_||!(T in M))&&f(M,T,O[T]);else r({target:e,proto:!0,forced:h||_},O);return O}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(4),o=n(66),i=n(28),c=n(9);t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||u(t,s,a(e,s))}}},function(t,e,n){var r=n(10),o=n(67),i=n(68),c=n(3);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(38),o=n(24),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){"use strict";var r=n(44).IteratorPrototype,o=n(37),i=n(21),c=n(29),u=n(11),a=function(){return this};t.exports=function(t,e,n){var f=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),c(t,f,!1,!0),u[f]=a,t}},function(t,e,n){var r=n(30);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(5);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){var r=n(3),o=n(73);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(i){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){"use strict";var r,o,i,c,u=n(42),a=n(13),f=n(0),s=n(10),l=n(75),p=n(15),v=n(76),d=n(29),h=n(77),y=n(7),m=n(16),g=n(78),x=n(27),b=n(79),w=n(85),S=n(86),j=n(47).set,O=n(87),T=n(89),P=n(90),E=n(49),_=n(91),M=n(26),L=n(43),A=n(2),k=n(14),I=n(36),R=A("species"),C="Promise",D=M.get,F=M.set,N=M.getterFor(C),G=l,q=f.TypeError,W=f.document,z=f.process,V=s("fetch"),U=E.f,H=U,B=!!(W&&W.createEvent&&f.dispatchEvent),Y="function"==typeof PromiseRejectionEvent,K="unhandledrejection",X="rejectionhandled",Z=0,J=1,Q=2,$=1,tt=2,et=L(C,(function(){var t=x(G)!==String(G);if(!t){if(66===I)return!0;if(!k&&!Y)return!0}if(a&&!G.prototype["finally"])return!0;if(I>=51&&/native code/.test(G))return!1;var e=G.resolve(1),n=function(t){t((function(){}),(function(){}))},r=e.constructor={};return r[R]=n,!(e.then((function(){}))instanceof n)})),nt=et||!w((function(t){G.all(t)["catch"]((function(){}))})),rt=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},ot=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;O((function(){var r=t.value,o=t.state==J,i=0;while(n.length>i){var c,u,a,f=n[i++],s=o?f.ok:f.fail,l=f.resolve,p=f.reject,v=f.domain;try{s?(o||(t.rejection===tt&&at(t),t.rejection=$),!0===s?c=r:(v&&v.enter(),c=s(r),v&&(v.exit(),a=!0)),c===f.promise?p(q("Promise-chain cycle")):(u=rt(c))?u.call(c,l,p):l(c)):p(r)}catch(d){v&&!a&&v.exit(),p(d)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&ct(t)}))}},it=function(t,e,n){var r,o;B?(r=W.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:e,reason:n},!Y&&(o=f["on"+t])?o(r):t===K&&P("Unhandled promise rejection",n)},ct=function(t){j.call(f,(function(){var e,n=t.facade,r=t.value,o=ut(t);if(o&&(e=_((function(){k?z.emit("unhandledRejection",r,n):it(K,n,r)})),t.rejection=k||ut(t)?tt:$,e.error))throw e.value}))},ut=function(t){return t.rejection!==$&&!t.parent},at=function(t){j.call(f,(function(){var e=t.facade;k?z.emit("rejectionHandled",e):it(X,e,t.value)}))},ft=function(t,e,n){return function(r){t(e,r,n)}},st=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=Q,ot(t,!0))},lt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw q("Promise can't be resolved itself");var r=rt(e);r?O((function(){var n={done:!1};try{r.call(e,ft(lt,n,t),ft(st,n,t))}catch(o){st(n,o,t)}})):(t.value=e,t.state=J,ot(t,!1))}catch(o){st({done:!1},o,t)}}};et&&(G=function(t){g(this,G,C),m(t),r.call(this);var e=D(this);try{t(ft(lt,e),ft(st,e))}catch(n){st(e,n)}},r=function(t){F(this,{type:C,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:Z,value:void 0})},r.prototype=v(G.prototype,{then:function(t,e){var n=N(this),r=U(S(this,G));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=k?z.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=Z&&ot(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=D(t);this.promise=t,this.resolve=ft(lt,e),this.reject=ft(st,e)},E.f=U=function(t){return t===G||t===i?new o(t):H(t)},a||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,e){var n=this;return new G((function(t,e){c.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof V&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return T(G,V.apply(f,arguments))}}))),u({global:!0,wrap:!0,forced:et},{Promise:G}),d(G,C,!1,!0),h(C),i=s(C),u({target:C,stat:!0,forced:et},{reject:function(t){var e=U(this);return e.reject.call(void 0,t),e.promise}}),u({target:C,stat:!0,forced:a||et},{resolve:function(t){return T(a&&this===i?G:this,t)}}),u({target:C,stat:!0,forced:nt},{all:function(t){var e=this,n=U(e),r=n.resolve,o=n.reject,i=_((function(){var n=m(e.resolve),i=[],c=0,u=1;b(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,n.call(e,t).then((function(t){f||(f=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=U(e),r=n.reject,o=_((function(){var o=m(e.resolve);b(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e,n){var r=n(0);t.exports=r.Promise},function(t,e,n){var r=n(15);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){"use strict";var r=n(10),o=n(9),i=n(2),c=n(8),u=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[u]&&n(e,u,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(3),o=n(80),i=n(39),c=n(46),u=n(81),a=n(84),f=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var s,l,p,v,d,h,y,m=n&&n.that,g=!(!n||!n.AS_ENTRIES),x=!(!n||!n.IS_ITERATOR),b=!(!n||!n.INTERRUPTED),w=c(e,m,1+g+b),S=function(t){return s&&a(s),new f(!0,t)},j=function(t){return g?(r(t),b?w(t[0],t[1],S):w(t[0],t[1])):b?w(t,S):w(t)};if(x)s=t;else{if(l=u(t),"function"!=typeof l)throw TypeError("Target is not iterable");if(o(l)){for(p=0,v=i(t.length);v>p;p++)if(d=j(t[p]),d&&d instanceof f)return d;return new f(!1)}s=l.call(t)}h=s.next;while(!(y=h.call(s)).done){try{d=j(y.value)}catch(O){throw a(s),O}if("object"==typeof d&&d&&d instanceof f)return d}return new f(!1)}},function(t,e,n){var r=n(2),o=n(11),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,e,n){var r=n(82),o=n(11),i=n(2),c=i("iterator");t.exports=function(t){if(void 0!=t)return t[c]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(83),o=n(17),i=n(2),c=i("toStringTag"),u="Arguments"==o(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),c))?n:u?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){var r=n(2),o=r("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},function(t,e,n){var r=n(3);t.exports=function(t){var e=t["return"];if(void 0!==e)return r(e.call(t)).value}},function(t,e,n){var r=n(2),o=r("iterator"),i=!1;try{var c=0,u={next:function(){return{done:!!c++}},return:function(){i=!0}};u[o]=function(){return this},Array.from(u,(function(){throw 2}))}catch(a){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var r={};r[o]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(a){}return n}},function(t,e,n){var r=n(3),o=n(16),i=n(2),c=i("species");t.exports=function(t,e){var n,i=r(t).constructor;return void 0===i||void 0==(n=r(i)[c])?e:o(n)}},function(t,e,n){var r,o,i,c,u,a,f,s,l=n(0),p=n(28).f,v=n(47).set,d=n(48),h=n(88),y=n(14),m=l.MutationObserver||l.WebKitMutationObserver,g=l.document,x=l.process,b=l.Promise,w=p(l,"queueMicrotask"),S=w&&w.value;S||(r=function(){var t,e;y&&(t=x.domain)&&t.exit();while(o){e=o.fn,o=o.next;try{e()}catch(n){throw o?c():i=void 0,n}}i=void 0,t&&t.enter()},d||y||h||!m||!g?b&&b.resolve?(f=b.resolve(void 0),s=f.then,c=function(){s.call(f,r)}):c=y?function(){x.nextTick(r)}:function(){v.call(l,r)}:(u=!0,a=g.createTextNode(""),new m(r).observe(a,{characterData:!0}),c=function(){a.data=u=!u})),t.exports=S||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},function(t,e,n){var r=n(22);t.exports=/web0s(?!.*chrome)/i.test(r)},function(t,e,n){var r=n(3),o=n(7),i=n(49);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t),c=n.resolve;return c(e),n.promise}},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},function(t,e){t.exports=require("fs")},function(t,e){t.exports=require("path")},function(t,e,n){"use strict";n.r(e),n.d(e,"mainWindow",(function(){return c}));var r=n(1);n(51),n(74);const o="darwin"===process.platform,i=[...o?[{label:r["app"].name,submenu:[{role:"about"},{label:"Settings",accelerator:"CmdOrCtrl+,",click(){c.webContents.send("show-settings")}},{type:"separator"},{role:"services"},{type:"separator"},{role:"hide"},{role:"hideothers"},{role:"unhide"},{type:"separator"},{role:"quit"}]}]:[],{label:"File",submenu:[o?{role:"close"}:{role:"quit"}]},{label:"Edit",submenu:[{role:"undo"},{role:"redo"},{type:"separator"},{role:"cut"},{role:"copy"},{role:"paste"},...o?[{role:"pasteAndMatchStyle"},{role:"delete"},{role:"selectAll"},{type:"separator"},{label:"Speech",submenu:[{role:"startSpeaking"},{role:"stopSpeaking"}]}]:[{role:"delete"},{type:"separator"},{role:"selectAll"}]]},{label:"View",submenu:[{role:"reload"},{role:"forceReload"},{role:"toggleDevTools"},{type:"separator"},{role:"resetZoom"},{role:"zoomIn"},{role:"zoomOut"},{type:"separator"},{role:"togglefullscreen"}]},{label:"Window",submenu:[{role:"minimize"},{role:"zoom"},...o?[{type:"separator"},{role:"front"},{type:"separator"},{role:"window"}]:[{role:"close"}]]},{role:"help",submenu:[{label:"Learn More",click:async()=>{const{shell:t}=n(1);await t.openExternal("https://electronjs.org")}}]}];try{"win32"===process.platform&&!0===r["nativeTheme"].shouldUseDarkColors&&n(92).unlinkSync(n(93).join(r["app"].getPath("userData"),"DevTools Extensions"))}catch(a){}let c;global.__statics=__dirname;const u=r["Menu"].buildFromTemplate(i);r["app"].on("ready",(()=>{c=new r["BrowserWindow"]({width:1e3,height:800,minWidth:800,minHeight:500,useContentSize:!0,webPreferences:{nodeIntegration:!0,nodeIntegrationInWorker:!0}}),c.loadURL("file://"+__dirname+"/index.html"),c.on("closed",(()=>{c=null})),r["Menu"].setApplicationMenu(u)})),r["app"].on("window-all-closed",(()=>{r["app"].quit()})),r["ipcMain"].on("quit-app",(()=>{r["app"].quit()})),r["app"].on("activate",(()=>{null===c&&createWindow()}))}]);