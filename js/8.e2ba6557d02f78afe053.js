webpackJsonp([8],{126:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{loc:0,obey:0,gaze:0,vf:0,facial:0,leftarm:0,rightarm:0,leftleg:0,rightleg:0,limbataxia:0,sensation:0,language:0,dysarthria:0,inattention:0}},computed:{nihss:function(){return this.loc+this.obey+this.gaze+this.vf+this.facial+this.leftarm+this.rightarm+this.leftleg+this.rightleg+this.limbataxia+this.sensation+this.language+this.dysarthria+this.inattention}},methods:{reset:function(){this.loc=0,this.obey=0,this.gaze=0,this.vf=0,this.facial=0,this.leftarm=0,this.rightarm=0,this.leftleg=0,this.rightleg=0,this.limbataxia=0,this.sensation=0,this.language=0,this.dysarthria=0,this.inattention=0}}}},136:function(a,t,e){t=a.exports=e(29)(void 0),t.push([a.i,".caption1{padding-top:20px;font-weight:300}.caption1,.caption2{padding-bottom:0;margin-bottom:0}.caption2{font-size:12px;padding-top:0;color:rgba(0,0,0,.46);line-height:16px}.close{margin-top:8px}",""])},142:function(a,t,e){var l=e(136);"string"==typeof l&&(l=[[a.i,l,""]]),l.locals&&(a.exports=l.locals);e(30)("3e950714",l,!0)},148:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("h6",{staticStyle:{"text-align":"center"}},[a._v("NIHSS = "+a._s(a.nihss))]),e("p",{staticClass:"caption1"},[a._v("1B: LOC/Orientation")]),e("p",{staticClass:"caption2"},[a._v("Ask month and age. Score 2 if aphasic.")]),e("q-select",{staticClass:"close",attrs:{options:[{label:"0 = Both responses correct",value:0},{label:"1 = 1 response correct",value:1},{label:"2 = None correct/no response",value:2}]},model:{value:a.loc,callback:function(t){a.loc=t},expression:"loc"}}),e("p",{staticClass:"caption1"},[a._v("1C: LOC/Commands")]),e("p",{staticClass:"caption2"},[a._v("Ask close eyes, squeeze hand. Pantomine if communication barrier.")]),e("q-select",{staticClass:"close",attrs:{options:[{label:"0 = Both tasks correct",value:0},{label:"1 = 1 task correct",value:1},{label:"2 = 0 tasks correct",value:2}]},model:{value:a.obey,callback:function(t){a.obey=t},expression:"obey"}}),e("p",{staticClass:"caption1"},[a._v("2: Horizontal eye movement")]),e("q-select",{staticClass:"close",attrs:{options:[{label:"0 = Normal",value:0},{label:"1 = Partial gaze palsy to 1 or both sides",value:1},{label:"2 = Forced deviation or total gaze palsy not overcome by dolls eye",value:2}]},model:{value:a.gaze,callback:function(t){a.gaze=t},expression:"gaze"}}),e("p",{staticClass:"caption1"},[a._v("3: Visual fields")]),e("p",{staticClass:"caption2"},[a._v("Test blink response to visual threat if communication barrier. ")]),e("q-select",{staticClass:"close",attrs:{options:[{label:"0 = Normal",value:0},{label:"1 = Partial hemianopia",value:1},{label:"2 = Complete hemianopia",value:2},{label:"3 = Bilateral hemianopia or no blink in any field",value:3}]},model:{value:a.vf,callback:function(t){a.vf=t},expression:"vf"}}),e("p",{staticClass:"caption1"},[a._v("4: Facial palsy")]),e("p",{staticClass:"caption2"},[a._v("Use grimace if obtunded. Pantomine if aphasic.")]),e("q-select",{staticClass:"close",attrs:{options:[{label:"0 = Normal",value:0},{label:"1 = Minor asymetry",value:1},{label:"2 = Partial",value:2},{label:"3 = Unilateral or bilateral complete paralysis or no response",value:3}]},model:{value:a.facial,callback:function(t){a.facial=t},expression:"facial"}}),e("p",{staticClass:"caption1"},[a._v("5A: Left arm motor drift")]),e("q-select",{staticClass:"close",attrs:{options:[{label:"0 = No drift",value:0},{label:"1 = Drift, doesnt hit bed",value:1},{label:"2 = Arm hits bed",value:2},{label:"3 = No effort against gravity",value:3},{label:"4 = No movement",value:4}]},model:{value:a.leftarm,callback:function(t){a.leftarm=t},expression:"leftarm"}}),e("p",{staticClass:"caption1"},[a._v("5B: Right arm motor drift")]),e("q-select",{staticClass:"close",attrs:{options:[{label:"0 = No drift",value:0},{label:"1 = Drift, doesnt hit bed",value:1},{label:"2 = Arm hits bed",value:2},{label:"3 = No effort against gravity",value:3},{label:"4 = No movement",value:4}]},model:{value:a.rightarm,callback:function(t){a.rightarm=t},expression:"rightarm"}}),e("p",{staticClass:"caption1"},[a._v("6A: Left leg motor drift")]),e("q-select",{staticClass:"close",attrs:{options:[{label:"0 = No drift",value:0},{label:"1 = Drift, doesnt hit bed",value:1},{label:"2 = Leg hits bed",value:2},{label:"3 = No effort against gravity",value:3},{label:"4 = No movement",value:4}]},model:{value:a.leftleg,callback:function(t){a.leftleg=t},expression:"leftleg"}}),e("p",{staticClass:"caption1"},[a._v("6B: Right leg motor drift")]),e("q-select",{staticClass:"close",attrs:{options:[{label:"0 = No drift",value:0},{label:"1 = Drift, doesnt hit bed",value:1},{label:"2 = Leg hits bed",value:2},{label:"3 = No effort against gravity",value:3},{label:"4 = No movement",value:4}]},model:{value:a.rightleg,callback:function(t){a.rightleg=t},expression:"rightleg"}}),e("p",{staticClass:"caption1"},[a._v("7: Limb ataxia")]),e("p",{staticClass:"caption2"},[a._v("FNF/Heel-shin. Score 0 if cant obey or paralyzed.")]),e("q-select",{staticClass:"close",attrs:{options:[{label:"0 = No ataxia",value:0},{label:"1 = Ataxia in 1 limb",value:1},{label:"2 = Ataxia in 2 limbs",value:2}]},model:{value:a.limbataxia,callback:function(t){a.limbataxia=t},expression:"limbataxia"}}),e("p",{staticClass:"caption1"},[a._v("8: Sensation")]),e("p",{staticClass:"caption2"},[a._v("Pinprick loss in face, arm or leg. Score worst location. Assess grimace if aphasic or coma. ")]),e("q-select",{staticClass:"close",attrs:{options:[{label:"0 = Normal",value:0},{label:"1 = Mild to moderate loss",value:1},{label:"2 = Severe to total loss",value:2}]},model:{value:a.sensation,callback:function(t){a.sensation=t},expression:"sensation"}}),e("p",{staticClass:"caption1"},[a._v("9: Language")]),e("p",{staticClass:"caption2"},[a._v("Score 3 if coma")]),e("q-select",{staticClass:"close",attrs:{options:[{label:"0 = Normal. No dysphasia",value:0},{label:"1 = Mild-moderate dysphasia. Still able to communicate.",value:1},{label:"2 = Severe dysphasia. Hard to understand",value:2},{label:"3 = Mute or complete loss of verbal comprehension",value:3}]},model:{value:a.language,callback:function(t){a.language=t},expression:"language"}}),e("p",{staticClass:"caption1"},[a._v("10: Dysarthria")]),e("p",{staticClass:"caption2"},[a._v("Score 2 if coma, or mute")]),e("q-select",{staticClass:"close",attrs:{options:[{label:"0 = Normal",value:0},{label:"1 = Mild to moderate dysarthria. Still can be understood.",value:1},{label:"2 = Severe dysarthria. Unintelligible or mute.",value:2}]},model:{value:a.dysarthria,callback:function(t){a.dysarthria=t},expression:"dysarthria"}}),e("p",{staticClass:"caption1"},[a._v("11: Inattention")]),e("p",{staticClass:"caption2"},[a._v("Test bilateral simultaneous sensory and visual. Score 0 if coma, or hemianopia only or too confused to assess.")]),e("q-select",{staticClass:"close",attrs:{options:[{label:"0 = Normal",value:0},{label:"1 = Inattention to bilateral stimuli in 1 sensory modality",value:1},{label:"2 = Inattention to bilateral stimuli in both visual and sensory",value:2}]},model:{value:a.inattention,callback:function(t){a.inattention=t},expression:"inattention"}}),e("div",{staticClass:"row justify-center",staticStyle:{"padding-top":"20px","padding-bottom":"20px"}},[e("q-btn",{attrs:{color:"primary"},on:{click:function(t){a.reset()}}},[a._v("Zero All")])],1)],1)},staticRenderFns:[]}},34:function(a,t,e){function l(a){e(142)}var s=e(13)(e(126),e(148),l,null,null);a.exports=s.exports}});