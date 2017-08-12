<template lang="pug">
div
  q-list(style="margin-bottom:20px" highlight)
    q-item(tag="label")
      q-item-side
        q-checkbox(v-model="age")
      q-item-main
        q-item-tile(label) Is the patient >= 15y old?
    q-item(tag="label")
      q-item-side
        q-checkbox(v-model="functional")
      q-item-main
        q-item-tile(label) Is the baseline functional level at least semi-independent?
    q-item(tag="label")
      q-item-side
        q-checkbox(v-model="BSL")
      q-item-main
        q-item-tile(label) Is the BSL between 4-17 mmol/L
    q-item(tag="label")
      q-item-side
        q-checkbox(v-model="hospital")
      q-item-main
        q-item-tile(label) Is the patient currently in a Midlands or Northern hospital?

  q-card.passing(v-if="patientCriteriaStatus").fullwidth
    q-card-title
      |Patient Criteria Met
      q-icon(slot="right" name="pass")
    q-card-separator  
    q-card-main
      p Stroke onset time and patient criteria are met. The patient may be a candidate for clot retrieval depending on the CT findings. Now:
        ul
          li Order an immediate CT brain + CTA of neck and brain. If your hospital cannot perform CTA then consider urgent transfer to your hub hospital. CTA confirmed occlusion is a pre-requiste for transfer to Auckland Hospital. 
          li Ensure the patient has been assessed by the most appropriate local senior available doctor relevant to your hospital. This should be on-call medical registrar or physician, or local on-call neurologist.
          li Start enquires as to availability of the helicopter. If the helicopter is not available within the timeframe (eg weather conditions) then transfer may not be feasible.

  q-card.failing(v-if="!patientCriteriaStatus").fullwidth
    q-card-title
      |Patient Criteria NOT Met
      q-icon(slot="right" name="warning")
    q-card-separator  
    q-card-main
      p The patient must meet all of the above criteria. Current responses in this section indicate the patient does not meet screening criteria for clot retrieval. The patient may still be suitable for thrombolysis and you should refer to your local thrombolysis guidelines.

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['patientCriteriaStatus']),
    age: {
      get () { return this.$store.state.patientCriteria.age },
      set (value) { this.$store.commit('setAge', value) }
    },
    functional: {
      get () { return this.$store.state.patientCriteria.functional },
      set (value) { this.$store.commit('setFunctional', value) }
    },
    BSL: {
      get () { return this.$store.state.patientCriteria.BSL },
      set (value) { this.$store.commit('setBSL', value) }
    },
    hospital: {
      get () { return this.$store.state.patientCriteria.hospital },
      set (value) { this.$store.commit('setHospital', value) }
    }
  }
}
</script>

<style>
</style>
