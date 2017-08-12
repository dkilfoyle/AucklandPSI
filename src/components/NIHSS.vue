<template lang="pug">
div
    h6(style="text-align:center;") NIHSS = {{nihss}}
    //- q-field(label="1B: LOC/Orientation" helper="Ask month and age. Score 2 if aphasic.")
    p.caption1 1A: LOC/Alertness
    p.caption2 Assess level of alertness
    q-select.close(v-model="alert" :options=`[
      { label: '0 = Alert', value: 0 },
      { label: '1 = Arouses to minor stimulation eg voice', value: 1 },
      { label: '2 = Requires repeated stimulation or moves to pain', value: 2},
      { label: '3 = Postures or unresponseive}]`)

    p.caption1 1B: LOC/Orientation
    p.caption2 Ask month and age. Score 2 if aphasic.
    q-select.close(v-model="orientation" :options=`[
      { label: '0 = Both responses correct', value: 0 },
      { label: '1 = 1 response correct', value: 1 },
      { label: '2 = None correct/no response', value: 2}]`)

    p.caption1 1C: LOC/Commands
    p.caption2 Ask close eyes, squeeze hand. Pantomine if communication barrier.
    q-select.close(v-model="obey" :options=`[
      { label: '0 = Both tasks correct', value: 0 },
      { label: '1 = 1 task correct', value: 1 },
      { label: '2 = 0 tasks correct', value: 2} ]`)

    p.caption1 2: Horizontal eye movement
    q-select.close(v-model="gaze" :options=`[
      { label: '0 = Normal', value: 0 },
      { label: '1 = Partial gaze palsy to 1 or both sides', value: 1 },
      { label: '2 = Forced deviation or total gaze palsy not overcome by dolls eye', value: 2} ]`)

    p.caption1 3: Visual fields
    p.caption2 Test blink response to visual threat if communication barrier. 
    q-select.close(v-model="vf" :options=`[
      { label: '0 = Normal', value: 0 },
      { label: '1 = Partial hemianopia', value: 1 },
      { label: '2 = Complete hemianopia', value: 2},
      { label: '3 = Bilateral hemianopia or no blink in any field', value: 3} ]`)

    p.caption1 4: Facial palsy
    p.caption2 Use grimace if obtunded. Pantomine if aphasic.
    q-select.close(v-model="facial" :options=`[
      { label: '0 = Normal', value: 0 },
      { label: '1 = Minor asymetry', value: 1 },
      { label: '2 = Partial', value: 2},
      { label: '3 = Unilateral or bilateral complete paralysis or no response', value: 3} ]`)

    p.caption1 5A: Left arm motor drift
    q-select.close(v-model="leftarm" :options=`[
      { label: '0 = No drift', value: 0 },
      { label: '1 = Drift, doesnt hit bed', value: 1 },
      { label: '2 = Arm hits bed', value: 2},
      { label: '3 = No effort against gravity', value: 3},
      { label: '4 = No movement', value: 4} ]`)

    p.caption1 5B: Right arm motor drift
    q-select.close(v-model="rightarm" :options=`[
      { label: '0 = No drift', value: 0 },
      { label: '1 = Drift, doesnt hit bed', value: 1 },
      { label: '2 = Arm hits bed', value: 2},
      { label: '3 = No effort against gravity', value: 3},
      { label: '4 = No movement', value: 4} ]`)

    p.caption1 6A: Left leg motor drift
    q-select.close(v-model="leftleg" :options=`[
      { label: '0 = No drift', value: 0 },
      { label: '1 = Drift, doesnt hit bed', value: 1 },
      { label: '2 = Leg hits bed', value: 2},
      { label: '3 = No effort against gravity', value: 3},
      { label: '4 = No movement', value: 4} ]`)

    p.caption1 6B: Right leg motor drift
    q-select.close(v-model="rightleg" :options=`[
      { label: '0 = No drift', value: 0 },
      { label: '1 = Drift, doesnt hit bed', value: 1 },
      { label: '2 = Leg hits bed', value: 2},
      { label: '3 = No effort against gravity', value: 3},
      { label: '4 = No movement', value: 4} ]`)

    p.caption1 7: Limb ataxia
    p.caption2 FNF/Heel-shin. Score 0 if cant obey or paralyzed.
    q-select.close(v-model="limbataxia" :options=`[
      { label: '0 = No ataxia', value: 0 },
      { label: '1 = Ataxia in 1 limb', value: 1 },
      { label: '2 = Ataxia in 2 limbs', value: 2 } ]`)

    p.caption1 8: Sensation
    p.caption2 Pinprick loss in face, arm or leg. Score worst location. Assess grimace if aphasic or coma. 
    q-select.close(v-model="sensation" :options=`[
      { label: '0 = Normal', value: 0 },
      { label: '1 = Mild to moderate loss', value: 1 },
      { label: '2 = Severe to total loss', value: 2} ]`)

    p.caption1 9: Language
    p.caption2 Score 3 if coma
    q-select.close(v-model="language" :options=`[
      { label: '0 = Normal. No dysphasia', value: 0 },
      { label: '1 = Mild-moderate dysphasia. Still able to communicate.', value: 1 },
      { label: '2 = Severe dysphasia. Hard to understand', value: 2},
      { label: '3 = Mute or complete loss of verbal comprehension', value: 3} ]`)

    p.caption1 10: Dysarthria
    p.caption2 Score 2 if coma, or mute
    q-select.close(v-model="dysarthria" :options=`[
      { label: '0 = Normal', value: 0 },
      { label: '1 = Mild to moderate dysarthria. Still can be understood.', value: 1 },
      { label: '2 = Severe dysarthria. Unintelligible or mute.', value: 2} ]`)

    p.caption1 11: Inattention
    p.caption2 Test bilateral simultaneous sensory and visual. Score 0 if coma, or hemianopia only or too confused to assess.
    q-select.close(v-model="inattention" :options=`[
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
      alert: 0,
      orientation: 0,
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
      return this.alert +
        this.orientation +
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
.caption1 {
  padding-bottom: 0px;
  padding-top: 20px;
  font-weight: 300;
  margin-bottom: 0px;
}
.caption2 {
  font-size: 12px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  color: rgba(0,0,0,0.46);
  line-height: 16px;
}
.close {
  margin-top:8px;
}
</style>
