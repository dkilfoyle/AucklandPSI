<template lang="pug">
div
  h6(style="text-align:center;") NIHSS = {{nihss}}
  q-field(label="1B: LOC/Orientation" helper="Ask month and age. Score 2 if aphasic." labelWidth=11)
    q-select(v-model="loc" :options=`[
      { label: '0 = Both responses correct', value: 0 },
      { label: '1 = 1 response correct', value: 1 },
      { label: '2 = None correct/no response', value: 2}]`)
  q-field(label="1C: LOC/Commands" helper="Ask close eyes, squeeze hand. Pantomine if communication barrier." labelWidth=11)
    q-select(v-model="obey" :options=`[
      { label: '0 = Both tasks correct', value: 0 },
      { label: '1 = 1 task correct', value: 1 },
      { label: '2 = 0 tasks correct', value: 2} ]`)
  q-field(label="2: Horizontal eye movement" labelWidth="11")
    q-select(v-model="gaze" :options=`[
      { label: '0 = Normal', value: 0 },
      { label: '1 = Partial gaze palsy to 1 or both sides', value: 1 },
      { label: '2 = Forced deviation or total gaze palsy not overcome by dolls eye', value: 2} ]`)
  q-field(label="3: Visual fields" helper="Test blink response to visual threat if communication barrier. " labelWidth=11)
    q-select(v-model="vf" :options=`[
      { label: '0 = Normal', value: 0 },
      { label: '1 = Partial hemianopia', value: 1 },
      { label: '2 = Complete hemianopia', value: 2},
      { label: '3 = Bilateral hemianopia or no blink in any field', value: 3} ]`)
  q-field(label="4: Facial palsy" helper="Use grimace if obtunded. Pantomine if aphasic." labelWidth=11)
    q-select(v-model="facial" :options=`[
      { label: '0 = Normal', value: 0 },
      { label: '1 = Minor asymetry', value: 1 },
      { label: '2 = Partial', value: 2},
      { label: '3 = Unilateral or bilateral complete paralysis or no response', value: 3} ]`)
  q-field(label="5A: Left arm motor drift" labelWidth=11)
    q-select(v-model="leftarm" :options=`[
      { label: '0 = No drift', value: 0 },
      { label: '1 = Drift, doesnt hit bed', value: 1 },
      { label: '2 = Arm hits bed', value: 2},
      { label: '3 = No effort against gravity', value: 3},
      { label: '4 = No movement', value: 4} ]`)
  q-field(label="5B: Right arm motor drift" labelWidth=11)
    q-select(v-model="rightarm" :options=`[
      { label: '0 = No drift', value: 0 },
      { label: '1 = Drift, doesnt hit bed', value: 1 },
      { label: '2 = Arm hits bed', value: 2},
      { label: '3 = No effort against gravity', value: 3},
      { label: '4 = No movement', value: 4} ]`)
  q-field(label="6A: Left leg motor drift" labelWidth=11)
    q-select(v-model="leftleg" :options=`[
      { label: '0 = No drift', value: 0 },
      { label: '1 = Drift, doesnt hit bed', value: 1 },
      { label: '2 = Leg hits bed', value: 2},
      { label: '3 = No effort against gravity', value: 3},
      { label: '4 = No movement', value: 4} ]`)
  q-field(label="6B: Right leg motor drift" labelWidth=11)
    q-select(v-model="rightleg" :options=`[
      { label: '0 = No drift', value: 0 },
      { label: '1 = Drift, doesnt hit bed', value: 1 },
      { label: '2 = Leg hits bed', value: 2},
      { label: '3 = No effort against gravity', value: 3},
      { label: '4 = No movement', value: 4} ]`)
  q-field(label="7: Limb ataxia" helper="FNF/Heel-shin. Score 0 if cant obey or paralyzed." labelWidth=11)
    q-select(v-model="limbataxia" :options=`[
      { label: '0 = No ataxia', value: 0 },
      { label: '1 = Ataxia in 1 limb', value: 1 },
      { label: '2 = Ataxia in 2 limbs', value: 2 } ]`)
  q-field(label="8: Sensation" helper="Pinprick loss in face, arm or leg. Score worst location. Assess grimace if aphasic or coma. " labelWidth=11)
    q-select(v-model="sensation" :options=`[
      { label: '0 = Normal', value: 0 },
      { label: '1 = Mild to moderate loss', value: 1 },
      { label: '2 = Severe to total loss', value: 2} ]`)
  q-field(label="9: Language" helper="Score 3 if coma" labelWidth=11)
    q-select(v-model="language" :options=`[
      { label: '0 = Normal. No dysphasia', value: 0 },
      { label: '1 = Mild-moderate dysphasia. Still able to communicate.', value: 1 },
      { label: '2 = Severe dysphasia. Hard to understand', value: 2},
      { label: '3 = Mute or complete loss of verbal comprehension', value: 3} ]`)
  q-field(label="10: Dysarthria" helper="Score 2 if coma, or mute." labelWidth=11)
    q-select(v-model="dysarthria" :options=`[
      { label: '0 = Normal', value: 0 },
      { label: '1 = Mild to moderate dysarthria. Still can be understood.', value: 1 },
      { label: '2 = Severe dysarthria. Unintelligible or mute.', value: 2} ]`)
  q-field(label="11: Inattention" helper="Test bilateral simultaneous sensory and visual. Score 0 if coma, or hemianopia only or too confused to assess." labelWidth=11)
    q-select(v-model="inattention" :options=`[
      { label: '0 = Normal', value: 0 },
      { label: '1 = Inattention to bilateral stimuli in 1 sensory modality', value: 1 },
      { label: '2 = Inattention to bilateral stimuli in both visual and sensory', value: 2} ]`)
  .row.justify-center(style="padding-top:20px; padding-bottom:20px")
    q-btn(@click="reset()" color="primary") Zero All
</template>

<script>
export default {
  data () {
    return {
      loc: 0,
      obey: 0,
      gaze: 0,
      vf: 0,
      facial: 0,
      leftarm: 0,
      rightarm: 0,
      leftleg: 0,
      rightleg: 0,
      limbataxia: 0,
      sensation: 0,
      language: 0,
      dysarthria: 0,
      inattention: 0
    }
  },
  computed: {
    nihss: function () {
      return this.loc +
        this.obey +
        this.gaze +
        this.vf +
        this.facial +
        this.leftarm +
        this.rightarm +
        this.leftleg +
        this.rightleg +
        this.limbataxia +
        this.sensation +
        this.language +
        this.dysarthria +
        this.inattention
    }
  },
  methods: {
    reset: function () {
      this.loc = 0
      this.obey = 0
      this.gaze = 0
      this.vf = 0
      this.facial = 0
      this.leftarm = 0
      this.rightarm = 0
      this.leftleg = 0
      this.rightleg = 0
      this.limbataxia = 0
      this.sensation = 0
      this.language = 0
      this.dysarthria = 0
      this.inattention = 0
    }
  }
}
</script>

<style lang="stylus">

</style>
