webpackJsonp([4],Array(34).concat([function(t,e,n){function r(t){n(96)}var i=n(13)(n(84),n(102),r,null,null);t.exports=i.exports},,,,,,function(t,e,n){t.exports=!n(41)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(55);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(46),i=n(45);t.exports=function(t){return r(i(t))}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(50),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){t.exports={default:n(51),__esModule:!0}},function(t,e,n){n(77),t.exports=n(44).Object.assign},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(43);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(48),i=n(73),o=n(72);t.exports=function(t){return function(e,n,s){var a,c=r(e),u=i(c.length),f=o(s,u);if(t&&n!=n){for(;u>f;)if((a=c[f++])!=a)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(52);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(43),i=n(42).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(42),i=n(44),o=n(56),s=n(61),a=function(t,e,n){var c,u,f,l=t&a.F,p=t&a.G,h=t&a.S,d=t&a.P,m=t&a.B,v=t&a.W,y=p?i:i[e]||(i[e]={}),b=y.prototype,w=p?r:h?r[e]:(r[e]||{}).prototype;p&&(n=e);for(c in n)(u=!l&&w&&void 0!==w[c])&&c in y||(f=u?w[c]:n[c],y[c]=p&&"function"!=typeof w[c]?n[c]:m&&u?o(f,r):v&&w[c]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):d&&"function"==typeof f?o(Function.call,f):f,d&&((y.virtual||(y.virtual={}))[c]=f,t&a.R&&b&&!b[c]&&s(b,c,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(64),i=n(69);t.exports=n(40)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(40)&&!n(41)(function(){return 7!=Object.defineProperty(n(57)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(67),i=n(65),o=n(68),s=n(74),a=n(46),c=Object.assign;t.exports=!c||n(41)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=s(t),c=arguments.length,u=1,f=i.f,l=o.f;c>u;)for(var p,h=a(arguments[u++]),d=f?r(h).concat(f(h)):r(h),m=d.length,v=0;m>v;)l.call(h,p=d[v++])&&(n[p]=h[p]);return n}:c},function(t,e,n){var r=n(53),i=n(62),o=n(75),s=Object.defineProperty;e.f=n(40)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(60),i=n(48),o=n(54)(!1),s=n(70)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)n!=s&&r(a,n)&&u.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},function(t,e,n){var r=n(66),i=n(58);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(71)("keys"),i=n(76);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(42),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var r=n(47),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(47),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(45);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(43);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(59);r(r.S+r.F,"Object",{assign:n(63)})},,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(49),i=n.n(r),o=n(14);e.default={data:function(){return{}},computed:i()({},n.i(o.a)(["minsSinceOnset","elapsedTime"]),{onsetTime:{get:function(){return this.$store.state.onsetCriteria.onsetTime},set:function(t){this.$store.commit("setOnsetTime",t)}}})}},,,,,,function(t,e,n){e=t.exports=n(29)(void 0),e.push([t.i,"",""])},,,,,,function(t,e,n){var r=n(90);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(30)("34407c16",r,!0)},,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("It is critically important to correctly establish the time of symptom onset. An incorrect time of onset may endanger the patient. If the patient awoke with symptoms then time of onset should be assumed to be when they fell asleep prior to waking. If the patient cannot provide any history then time of onset should be when last seen or known to be well.")]),n("p",[t._v("Use the widget below to set both the date and time of symptom onset. Click on the time to change hours and minutes. Note 24h clock. The initial value defaults to 13 hours prior to current time.")]),n("div",[n("div",{staticClass:"row md-gutter items-center",staticStyle:{"margin-bottom":"20px"}},[n("div",{staticClass:"col-sm8"},[n("q-inline-datetime",{attrs:{format24h:"format24h",type:"datetime"},model:{value:t.onsetTime,callback:function(e){t.onsetTime=e},expression:"onsetTime"}})],1),n("div",{staticClass:"col-sm4"},[t.minsSinceOnset<0?n("q-alert",{attrs:{color:"negative",icon:"warningw"}},[t._v("Onset time is in the future")]):t._e()],1)])]),t.minsSinceOnset<270&&t.minsSinceOnset>=0?n("q-card",{staticClass:"passing fullwidth"},[n("q-card-title",[t._v("Onset Criteria Met"),n("q-icon",{attrs:{name:"pass"},slot:"right"})],1),n("q-card-separator"),n("q-card-main",[n("p",[t._v("The patient is within 4.5h of symptom onset and is therefore potentially a candidate for IV thrombolysis with alteplase AND/OR percutaneous intervention. For thrombolysis indications refer to your hospital's local guidelines and procedures. If thrombolysis is indicated according to your local procedures it should be started as soon as possible. Thrombolysis issues should not delay transfer for percutaneous intervention. The remainder of this screening tool will refer specifically to percutaneous intervention")])])],1):t._e(),t.minsSinceOnset>=270&&t.minsSinceOnset<360?n("q-card",{staticClass:"passing fullwidth"},[n("q-card-title",[t._v("Onset Criteria Met"),n("q-icon",{attrs:{name:"pass"},slot:"right"})],1),n("q-card-separator"),n("q-card-main",[n("p",[t._v("The patient is between 4.5h and 6h after symptom onset. The patient is no longer a candidate for thrombolysis but may still be a candidate for clot retrieval. Continue with the screening process.")]),t.minsSinceOnset>300?n("q-card",{staticStyle:{"margin-bottom":"10px"}},[n("q-card-main",{staticClass:"failing"},[n("p",[t._v("WARNING: The patient is within "),n("b",[t._v(t._s(360-t.minsSinceOnset)+" minutes")]),t._v(" of the upper limit of the treatment window. The patient must complete the rest of the pathway AND arrive at Auckland Hospital within the next "+t._s(360-t.minsSinceOnset)+"minutes in order to be treatable. If that is not feasible then do not continue with this pathway.")])])],1):t._e()],1)],1):t._e(),t.minsSinceOnset>=360&&t.minsSinceOnset<720?n("q-card",{staticClass:"passing fullwidth"},[n("q-card-title",[t._v("Onset Criteria Met"),n("q-icon",{attrs:{name:"pass"},slot:"right"})],1),n("q-card-separator"),n("q-card-main",[n("p",[t._v("The patient is between 6h and 12h post symptom onset. The only remaining indication for clot retrieval in this time period is a "),n("b",[t._v("basilar occlusion")]),t._v(". Patients with ICA or MCA occlusion are now excluded.")]),t.minsSinceOnset>660?n("q-card",{staticStyle:{"margin-bottom":"10px"}},[n("q-card-main",{staticClass:"failing"},[n("p",[t._v("WARNING: The patient is within "),n("b",[t._v(t._s(720-t.minsSinceOnset)+" minutes")]),t._v(" of the upper limit of the treatment window for a basilar occlusion. The patient must complete the rest of the pathway AND arrive at Auckland Hospital within the next "+t._s(720-t.minsSinceOnset)+" minutes in order to be treatable. If that is not feasible then do not continue with this pathway.")])])],1):t._e()],1)],1):t._e(),t.minsSinceOnset>=720?n("q-card",{staticClass:"failing fullwidth"},[n("q-card-title",[t._v("Onset Criteria NOT Met"),n("q-icon",{attrs:{name:"cancel"},slot:"right"})],1),n("q-card-separator"),n("q-card-main",[n("p",[t._v("The patient is more than 12h post onset and is therefore not suitable for clot retrieval.")])])],1):t._e()],1)},staticRenderFns:[]}}]));