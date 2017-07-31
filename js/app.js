webpackJsonp([9],[,,,,function(t,e,n){"use strict";function i(t){return function(){return n(27)("./"+t+".vue")}}var r=n(0),o=n(25);r.a.use(o.a),e.a=new o.a({routes:[{path:"/",component:i("Index")},{path:"*",component:i("Error404")}]})},function(t,e,n){"use strict";var i=n(0),r=n(14),o=n(17),s=n(18),a=n(16);i.a.use(r.c),e.a=new r.c.Store({modules:{patientCriteria:o.a,scanCriteria:s.a,onsetCriteria:a.a},state:{dhbhospital:"waikato"},getters:{minsRemaining:function(t,e){return"MCA"===t.scanCriteria.ctfinding?360-e.minsSinceOnset:"ICA"===t.scanCriteria.ctfinding?360-e.minsSinceOnset:"Basilar"===t.scanCriteria.ctfinding?720-e.minsSinceOnset:void 0}},mutations:{setDHBHospital:function(t,e){t.dhbhospital=e}},actions:{resetCriteria:function(t){t.dispatch("resetOnsetCriteria"),t.dispatch("resetPatientCriteria"),t.dispatch("resetScanCriteria")}}})},,function(t,e){},function(t,e){},,,,function(t,e,n){function i(t){n(22)}var r=n(13)(n(19),n(24),i,null,null);t.exports=r.exports},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),r=(n.n(i),n(0)),o=n(1),s=n(4),a=n(5),c=n(9);n.n(c);n(8),n(11),n(7),r.a.config.productionTip=!1,r.a.use(o.a,{components:{QLayout:o.b,QToolbar:o.c,QToolbarTitle:o.d,QBtn:o.e,QIcon:o.f,QList:o.g,QListHeader:o.h,QItem:o.i,QItemSide:o.j,QItemMain:o.k,QItemTile:o.l,QTabs:o.m,QRouteTab:o.n,QSideLink:o.o,QCard:o.p,QCardTitle:o.q,QCardMain:o.r,QSelect:o.s,QField:o.t,QCardSeparator:o.u,QCardActions:o.v,QCollapsible:o.w,QRadio:o.x,QCheckbox:o.y,QInlineDatetime:o.z,QAlert:o.A,QStepper:o.B,QStep:o.C,QStepperNavigation:o.D,QChip:o.E,QTooltip:o.F,QOptionGroup:o.G,QScrollArea:o.H}}),n(10),o.a.start(function(){new r.a({el:"#q-app",store:a.a,router:s.a,render:function(t){return t(n(12))}})})},function(t,e,n){"use strict";var i=n(1),t={state:{onsetTime:i.I.subtractFromDate(Date.now(),{hours:13})},getters:{onsetTime:function(t){return t.onsetTime},onsetCriteriaStatus:function(t,e){return e.minsSinceOnset<720&&e.minsSinceOnset>=0},minsSinceOnset:function(t){return i.I.getDateDiff(Date.now(),t.onsetTime,"minutes")}},mutations:{setOnsetTime:function(t,e){t.onsetTime=e}},actions:{resetOnsetCriteria:function(t){t.commit("setOnsetTime",i.I.subtractFromDate(Date.now(),{hours:13}))}}};e.a=t},function(t,e,n){"use strict";var t={state:{age:!1,functional:!1,BSL:!1,hospital:!1},getters:{patientCriteriaStatus:function(t,e){return t.age&&t.functional&&t.BSL&&t.hospital}},mutations:{setAge:function(t,e){t.age=e},setFunctional:function(t,e){t.functional=e},setBSL:function(t,e){t.BSL=e},setHospital:function(t,e){t.hospital=e}},actions:{resetPatientCriteria:function(t){t.commit("setAge",!1),t.commit("setFunctional",!1),t.commit("setBSL",!1),t.commit("setHospital",!1)}}};e.a=t},function(t,e,n){"use strict";var t={state:{nobleed:!0,ctfinding:"No Occlusion",neurologistaccepted:!1},getters:{isAnterior:function(t){return t.nobleed&&("ICA"===t.ctfinding||"MCA"===t.ctfinding)},isPosterior:function(t){return t.nobleed&&"basilar"===t.ctfinding},scanCriteriaStatus:function(t,e){return(e.isPosterior&&e.minsSinceOnset<720||e.isAnterior&&e.minsSinceOnset<360)&&t.neurologistaccepted}},mutations:{setNoBleed:function(t,e){t.nobleed=e},setCTFinding:function(t,e){t.ctfinding=e},setNeurologistAccepted:function(t,e){t.neurologistaccepted=e}},actions:{resetScanCriteria:function(t){t.commit("setNoBleed",!1),t.commit("setCTFinding",!1),t.commit("setNeurologistAccepted",!1)}}};e.a=t},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){},function(t,e){},function(t,e){},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},staticRenderFns:[]}},,,function(t,e,n){function i(t){var e=r[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var r={"./ElapsedTime.vue":[32,5],"./Error404.vue":[38,8],"./Index.vue":[39,0],"./NIHSS.vue":[33,7],"./OnsetCriteria.vue":[34,4],"./PatientCriteria.vue":[35,3],"./ScanCriteria.vue":[36,2],"./Tracker.vue":[31,6],"./TransferInstructions.vue":[37,1]};i.keys=function(){return Object.keys(r)},t.exports=i,i.id=27},function(t,e){}],[15]);