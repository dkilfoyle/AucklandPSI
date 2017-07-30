<template lang="pug">
div(style="padding-left:5px; padding-right:5px;")
  h6(style="text-align:center;") NIHSS = {{nihss}}
  q-field(label="1B: LOC/Orientation" helper="Ask month and age. Score 2 if aphasic." labelWidth=11)
    q-select(inverted v-model="loc" :options=`[
      { label: '0 = Both responses correct', value: 0 },
      { label: '1 = 1 response correct', value: 1 },
      { label: '2 = None correct/no response', value: 2}]`)
  q-field(label="1C: LOC/Commands" helper="Ask close eyes, squeeze hand. Pantomine if communication barrier." labelWidth=11)
    q-select(inverted v-model="obey" :options=`[
      { label: '0 = Both tasks correct', value: 0 },
      { label: '1 = 1 task correct', value: 1 },
      { label: '2 = 0 tasks correct', value: 2} ]`)
  q-field(label="2: Horizontal eye movement" labelWidth="11")
    q-select(inverted v-model="gaze" :options=`[
      { label: '0 = Normal', value: 0 },
      { label: '1 = Partial gaze palsy to 1 or both sides', value: 1 },
      { label: '2 = Forced deviation or total gaze palsy not overcome by dolls eye', value: 2} ]`)
  q-field(label="3: Visual fields" helper="Test blink response to visual threat if communication barrier. " labelWidth=11)
    q-select(inverted v-model="vf" :options=`[
      { label: '0 = Normal', value: 0 },
      { label: '1 = Partial hemianopia', value: 1 },
      { label: '2 = Complete hemianopia', value: 2},
      { label: '3 = Bilateral hemianopia or no blink in any field', value: 3} ]`)
  q-field(label="4: Facial palsy" helper="Use grimace if obtunded. Pantomine if aphasic." labelWidth=11)
    q-select(inverted v-model="facial" :options=`[
      { label: '0 = Normal', value: 0 },
      { label: '1 = Minor asymetry', value: 1 },
      { label: '2 = Partial', value: 2},
      { label: '3 = Unilateral or bilateral complete paralysis or no response', value: 3} ]` )
</template>

<script>
export default {
  data () {
    return {
      loc: 0,
      obey: 0,
      gaze: 0,
      vf: 0,
      facial: 0
    }
  },
  computed: {
    nihss: function () { return this.loc + this.obey + this.gaze + this.vf + this.facial }
  }
}
</script>

<style lang="stylus">

</style>
