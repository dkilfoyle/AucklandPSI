webpackJsonp([3],Array(35).concat([function(t,e,n){function r(t){n(98)}var i=n(13)(n(85),n(104),r,null,null);t.exports=i.exports},,,,,function(t,e,n){t.exports=!n(41)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(55);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(46),i=n(45);t.exports=function(t){return r(i(t))}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(50),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){t.exports={default:n(51),__esModule:!0}},function(t,e,n){n(77),t.exports=n(44).Object.assign},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(43);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(48),i=n(73),o=n(72);t.exports=function(t){return function(e,n,a){var c,u=r(e),s=i(u.length),l=o(a,s);if(t&&n!=n){for(;s>l;)if((c=u[l++])!=c)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(52);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(43),i=n(42).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(42),i=n(44),o=n(56),a=n(61),c=function(t,e,n){var u,s,l,f=t&c.F,p=t&c.G,h=t&c.S,d=t&c.P,v=t&c.B,m=t&c.W,b=p?i:i[e]||(i[e]={}),y=b.prototype,g=p?r:h?r[e]:(r[e]||{}).prototype;p&&(n=e);for(u in n)(s=!f&&g&&void 0!==g[u])&&u in b||(l=s?g[u]:n[u],b[u]=p&&"function"!=typeof g[u]?n[u]:v&&s?o(l,r):m&&g[u]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):d&&"function"==typeof l?o(Function.call,l):l,d&&((b.virtual||(b.virtual={}))[u]=l,t&c.R&&y&&!y[u]&&a(y,u,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(64),i=n(69);t.exports=n(40)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(40)&&!n(41)(function(){return 7!=Object.defineProperty(n(57)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(67),i=n(65),o=n(68),a=n(74),c=n(46),u=Object.assign;t.exports=!u||n(41)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=a(t),u=arguments.length,s=1,l=i.f,f=o.f;u>s;)for(var p,h=c(arguments[s++]),d=l?r(h).concat(l(h)):r(h),v=d.length,m=0;v>m;)f.call(h,p=d[m++])&&(n[p]=h[p]);return n}:u},function(t,e,n){var r=n(53),i=n(62),o=n(75),a=Object.defineProperty;e.f=n(40)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(60),i=n(48),o=n(54)(!1),a=n(70)("IE_PROTO");t.exports=function(t,e){var n,c=i(t),u=0,s=[];for(n in c)n!=a&&r(c,n)&&s.push(n);for(;e.length>u;)r(c,n=e[u++])&&(~o(s,n)||s.push(n));return s}},function(t,e,n){var r=n(66),i=n(58);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(71)("keys"),i=n(76);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(42),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var r=n(47),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(47),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(45);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(43);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(59);r(r.S+r.F,"Object",{assign:n(63)})},,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(49),i=n.n(r),o=n(14);e.default={data:function(){return{}},computed:i()({},n.i(o.a)(["patientCriteriaStatus"]),{age:{get:function(){return this.$store.state.patientCriteria.age},set:function(t){this.$store.commit("setAge",t)}},functional:{get:function(){return this.$store.state.patientCriteria.functional},set:function(t){this.$store.commit("setFunctional",t)}},BSL:{get:function(){return this.$store.state.patientCriteria.BSL},set:function(t){this.$store.commit("setBSL",t)}},hospital:{get:function(){return this.$store.state.patientCriteria.hospital},set:function(t){this.$store.commit("setHospital",t)}}})}},,,,,,,function(t,e,n){e=t.exports=n(29)(void 0),e.push([t.i,"",""])},,,,,,function(t,e,n){var r=n(92);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(30)("82fdc956",r,!0)},,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-list",{staticStyle:{"margin-bottom":"20px"},attrs:{highlight:"highlight"}},[n("q-item",{attrs:{tag:"label"}},[n("q-item-side",[n("q-checkbox",{model:{value:t.age,callback:function(e){t.age=e},expression:"age"}})],1),n("q-item-main",[n("q-item-tile",{attrs:{label:"label"}},[t._v("Is the patient >= 15y old?")])],1)],1),n("q-item",{attrs:{tag:"label"}},[n("q-item-side",[n("q-checkbox",{model:{value:t.functional,callback:function(e){t.functional=e},expression:"functional"}})],1),n("q-item-main",[n("q-item-tile",{attrs:{label:"label"}},[t._v("Is the baseline functional level at least semi-independent?")])],1)],1),n("q-item",{attrs:{tag:"label"}},[n("q-item-side",[n("q-checkbox",{model:{value:t.BSL,callback:function(e){t.BSL=e},expression:"BSL"}})],1),n("q-item-main",[n("q-item-tile",{attrs:{label:"label"}},[t._v("Is the BSL between 4-17 mmol/L")])],1)],1),n("q-item",{attrs:{tag:"label"}},[n("q-item-side",[n("q-checkbox",{model:{value:t.hospital,callback:function(e){t.hospital=e},expression:"hospital"}})],1),n("q-item-main",[n("q-item-tile",{attrs:{label:"label"}},[t._v("Is the patient currently in a Midlands or Northern hospital?")])],1)],1)],1),t.patientCriteriaStatus?n("q-card",{staticClass:"passing fullwidth"},[n("q-card-title",[t._v("Patient Criteria Met"),n("q-icon",{attrs:{name:"pass"},slot:"right"})],1),n("q-card-separator"),n("q-card-main",[n("p",[t._v("Stroke onset time and patient criteria are met. The patient may be a candidate for clot retrieval depending on the CT findings. Now:"),n("ul",[n("li",[t._v("Order an immediate CT brain + CTA of neck and brain. If your hospital cannot perform CTA then consider urgent transfer to your hub hospital. CTA confirmed occlusion is a pre-requiste for transfer to Auckland Hospital. ")]),n("li",[t._v("Ensure the patient has been assessed by the most appropriate local senior available doctor relevant to your hospital. This should be on-call medical registrar or physician, or local on-call neurologist.")]),n("li",[t._v("Start enquires as to availability of the helicopter. If the helicopter is not available within the timeframe (eg weather conditions) then transfer may not be feasible.")])])])])],1):t._e(),t.patientCriteriaStatus?t._e():n("q-card",{staticClass:"failing fullwidth"},[n("q-card-title",[t._v("Patient Criteria NOT Met"),n("q-icon",{attrs:{name:"cancel"},slot:"right"})],1),n("q-card-separator"),n("q-card-main",[n("p",[t._v("The patient must meet all of the above criteria. Current responses in this section indicate the patient does not meet screening criteria for clot retrieval. The patient may still be suitable for thrombolysis and you should refer to your local thrombolysis guidelines.")])])],1)],1)},staticRenderFns:[]}}]));