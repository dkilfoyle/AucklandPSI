webpackJsonp([2],Array(35).concat([function(t,e,n){function i(t){n(94)}var r=n(13)(n(84),n(99),i,null,null);t.exports=r.exports},,,,function(t,e,n){t.exports=!n(40)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var i=n(54);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){var i=n(45),r=n(44);t.exports=function(t){return i(r(t))}},function(t,e,n){"use strict";e.__esModule=!0;var i=n(49),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}},function(t,e,n){t.exports={default:n(50),__esModule:!0}},function(t,e,n){n(76),t.exports=n(43).Object.assign},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(42);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var i=n(47),r=n(72),o=n(71);t.exports=function(t){return function(e,n,a){var s,l=i(e),c=r(l.length),u=o(a,c);if(t&&n!=n){for(;c>u;)if((s=l[u++])!=s)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===n)return t||u||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var i=n(51);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var i=n(42),r=n(41).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var i=n(41),r=n(43),o=n(55),a=n(60),s=function(t,e,n){var l,c,u,f=t&s.F,d=t&s.G,p=t&s.S,h=t&s.P,v=t&s.B,g=t&s.W,b=d?r:r[e]||(r[e]={}),m=b.prototype,y=d?i:p?i[e]:(i[e]||{}).prototype;d&&(n=e);for(l in n)(c=!f&&y&&void 0!==y[l])&&l in b||(u=c?y[l]:n[l],b[l]=d&&"function"!=typeof y[l]?n[l]:v&&c?o(u,i):g&&y[l]==u?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(u):h&&"function"==typeof u?o(Function.call,u):u,h&&((b.virtual||(b.virtual={}))[l]=u,t&s.R&&m&&!m[l]&&a(m,l,u)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(63),r=n(68);t.exports=n(39)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(39)&&!n(40)(function(){return 7!=Object.defineProperty(n(56)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var i=n(66),r=n(64),o=n(67),a=n(73),s=n(45),l=Object.assign;t.exports=!l||n(40)(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=l({},t)[n]||Object.keys(l({},e)).join("")!=i})?function(t,e){for(var n=a(t),l=arguments.length,c=1,u=r.f,f=o.f;l>c;)for(var d,p=s(arguments[c++]),h=u?i(p).concat(u(p)):i(p),v=h.length,g=0;v>g;)f.call(p,d=h[g++])&&(n[d]=p[d]);return n}:l},function(t,e,n){var i=n(52),r=n(61),o=n(74),a=Object.defineProperty;e.f=n(39)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var i=n(59),r=n(47),o=n(53)(!1),a=n(69)("IE_PROTO");t.exports=function(t,e){var n,s=r(t),l=0,c=[];for(n in s)n!=a&&i(s,n)&&c.push(n);for(;e.length>l;)i(s,n=e[l++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var i=n(65),r=n(57);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(70)("keys"),r=n(75);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e,n){var i=n(41),r=i["__core-js_shared__"]||(i["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},function(t,e,n){var i=n(46),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(46),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e,n){var i=n(44);t.exports=function(t){return Object(i(t))}},function(t,e,n){var i=n(42);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,n){var i=n(58);i(i.S+i.F,"Object",{assign:n(62)})},,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(48),r=n.n(i),o=n(14);e.default={data:function(){return{}},computed:r()({},n.i(o.a)(["minsSinceOnset","isAnterior","isPosterior","scanCriteriaStatus"]),{nobleed:{get:function(){return this.$store.state.scanCriteria.nobleed},set:function(t){this.$store.commit("setNoBleed",t)}},ctfinding:{get:function(){return this.$store.state.scanCriteria.ctfinding},set:function(t){this.$store.commit("setCTFinding",t)}},neurologistaccepted:{get:function(){return this.$store.state.scanCriteria.neurologistaccepted},set:function(t){this.$store.commit("setNeurologistAccepted",t)}}})}},,,,,function(t,e,n){e=t.exports=n(29)(void 0),e.push([t.i,"",""])},,,,,function(t,e,n){var i=n(89);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(30)("341eb3be",i,!0)},,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("CTA (CT angiography) is a mandatory pre-requisite. If your hospital does not have CTA capability the patient should be transfered to your nearest CTA capable hospital.")]),n("q-list",{staticStyle:{"margin-bottom":"20px"},attrs:{highlight:"highlight"}},[n("q-item",{attrs:{tag:"label"}},[n("q-item-side",[n("q-checkbox",{model:{value:t.nobleed,callback:function(e){t.nobleed=e},expression:"nobleed"}})],1),n("q-item-tile",{attrs:{label:"label"}},[t._v("Confirm CT shows no hemorrhage?")])],1),n("q-list-header",[t._v("Select the most appropriate CTA finding")]),n("q-item",{attrs:{tag:"label"}},[n("q-item-side",[n("q-radio",{attrs:{val:"none"},model:{value:t.ctfinding,callback:function(e){t.ctfinding=e},expression:"ctfinding"}})],1),n("q-item-tile",{attrs:{label:"label"}},[t._v("No Occlusion")])],1),n("q-item",{attrs:{tag:"label"}},[n("q-item-side",[n("q-radio",{attrs:{val:"ICA"},model:{value:t.ctfinding,callback:function(e){t.ctfinding=e},expression:"ctfinding"}})],1),n("q-item-tile",{attrs:{label:"label"}},[t._v("ICA Occlusion")])],1),n("q-item",{attrs:{tag:"label"}},[n("q-item-side",[n("q-radio",{attrs:{val:"MCA"},model:{value:t.ctfinding,callback:function(e){t.ctfinding=e},expression:"ctfinding"}})],1),n("q-item-tile",{attrs:{label:"label"}},[t._v("M1 or proximal M2 MCA Occlusion")])],1),n("q-item",{attrs:{tag:"label"}},[n("q-item-side",[n("q-radio",{attrs:{val:"basilar"},model:{value:t.ctfinding,callback:function(e){t.ctfinding=e},expression:"ctfinding"}})],1),n("q-item-tile",{attrs:{label:"label"}},[t._v("Basilar Occlusion")])],1),n("q-item",{attrs:{tag:"label"}},[n("q-item-side",[n("q-radio",{attrs:{val:"other"},model:{value:t.ctfinding,callback:function(e){t.ctfinding=e},expression:"ctfinding"}})],1),n("q-item-tile",{attrs:{label:"label"}},[t._v("Other Occlusion")])],1)],1),t.isAnterior&&t.minsSinceOnset<360?n("q-card",{staticClass:"passing fullwidth"},[n("q-card-title",[t._v("Scan Criteria Met"),n("q-icon",{attrs:{name:"pass"},slot:"right"})],1),n("q-card-separator"),n("q-card-main",[n("p",[t._v("The patient is within 6h of symptom onset with an occluded anterior circulation artery. The patient may be a candidate for transfer to Auckland Hospital for urgent endovascular clot retreival. Please do the following immediately:"),n("ol",[n("li",[t._v("Ask your radiologist to send the images "),n("b",[t._v("immediately")]),t._v(" to Auckland PACS. The Auckland Neurologist/Neuroradiologist cannot make a treatment decision until the images have been received and viewed.")]),n("li",[t._v("Discuss the patient with your consultant prior to contacting Auckland Hospital - specifically review diagnostic certainty, appropriateness of transfer with respect to baseline comorbidity and safety for transfer.")]),n("li",[t._v("Call Auckland Hospital and ask to speak to the On-Call Neurologist. Do not ask for the On-Call Neuroradiologist. The person making the call should be at least registrar level and if not a SMO should have discussed the patient with their local relevant SMO prior to calling.")]),n("li",[t._v("If the patient is still within 4.5h of onset they may be suitable for thrombolysis in addition to clot retrieval.")])]),n("q-list",{attrs:{"no-border":"no-border",highlight:"highlight"}},[n("q-item",{attrs:{tag:"label"}},[n("q-item-side",[n("q-checkbox",{model:{value:t.neurologistaccepted,callback:function(e){t.neurologistaccepted=e},expression:"neurologistaccepted"}})],1),n("q-item-tile",{attrs:{label:"label"}},[t._v("Has the patient been accepted by the Auckland Hospital on-call neurologist for transfer?")])],1)],1)],1)])],1):t.isPosterior&&t.minsSinceOnset<720?n("q-card",{staticClass:"passing fullwidth"},[n("q-card-title",[t._v("Scan Criteria Met (basilar only)"),n("q-icon",{attrs:{name:"pass"},slot:"right"})],1),n("q-card-separator"),n("q-card-main",[n("p",[t._v("The patient is within 12h of symptom onset with an occluded basilar artery. The patient may be a candidate for transfer to Auckland Hospital for urgent endovascular clot retreival. Please do the following immediately:"),n("ol",[n("li",[t._v("Ask your radiologist to send the images "),n("b",[t._v("immediately")]),t._v(" to Auckland PACS. The Auckland Neurologist/Neuroradiologist cannot make a treatment decision until the images have been received and viewed.")]),n("li",[t._v("Discuss the patient with your consultant prior to contacting Auckland Hospital - specifically review diagnostic certainty, appropriateness of transfer with respect to baseline comorbidity and safety for transfer.")]),n("li",[t._v("Call Auckland Hospital and ask to speak to the On-Call Neurologist. Do not ask for the On-Call Neuroradiologist. The person making the call should be at least registrar level and if not a SMO should have discussed the patient with their local relevant SMO prior to calling.")]),n("li",[t._v("If the patient is still within 4.5h of onset they may be suitable for thrombolysis in addition to clot retrieval.")])]),n("q-list",{attrs:{"no-border":"no-border",highlight:"highlight"}},[n("q-item",{attrs:{tag:"label"}},[n("q-item-side",[n("q-checkbox",{model:{value:t.neurologistaccepted,callback:function(e){t.neurologistaccepted=e},expression:"neurologistaccepted"}})],1),n("q-item-tile",{attrs:{label:"label"}},[t._v("Has the patient been accepted by the Auckland Hospital on-call neurologist for transfer?")])],1)],1)],1)])],1):n("q-card",{staticClass:"failing fullwidth"},[n("q-card-title",[t._v("Scan Criteria NOT Met"),n("q-icon",{attrs:{name:"cancel"},slot:"right"})],1),n("q-card-separator"),n("q-card-main",["other"===t.ctfinding?n("div",[n("p",[t._v("You have selected 'other' occlusion. Only ICA, MCA and basilar occlusions are suitable for PSI. Isolated occlusions of ACA, PCA or single vertebral are usually not appropriate for PSI.")]),n("hr")]):t._e(),n("p",[t._v("This combination of CT findings and/or timeframe do not meet clot retrieval criteria. If the scan shows no bleeding and the patient is still within 4.5h of symptom onset the patient may be suitable for thrombolysis - refer to local policy. Based on the responses given the patient is not suitable for transfer to Auckland Hospital and it is not necessary to discuss the case with the Auckland Hospital on-call neurologist. If uncertain discuss with your local senior physician.")])])],1)],1)},staticRenderFns:[]}}]));