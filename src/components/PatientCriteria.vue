<template lang="pug">
div
  q-list(style="margin-bottom:20px" highlight)
    q-list-header Clinical Criteria
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
    q-item(tag="label" v-if="minsSinceOnset > 6*60")
      q-item-side
        q-checkbox(v-model="nihss")
      q-item-main
        q-item-tile(label) Is the NIHSS >= 6? (use sidebar menu to calculate)

    q-list-header(v-if="minsSinceOnset > 6*60") Does the patient have an anterior or posterior circulation syndrome?
    q-item(tag="label" v-if="minsSinceOnset > 6*60")
      q-item-side
        q-radio(v-model="localisation", val="anterior")
      q-item-tile(label) Anterior (eg Hemiparesis, dysphasia)
    q-item(tag="label" v-if="minsSinceOnset > 6*60")
      q-item-side
        q-radio(v-model="localisation", val="posterior")
      q-item-tile(label) Posterior (eg Eye movement abnormality, ataxia)

  q-card.passing(v-if="patientCriteriaStatus").fullwidth
    q-card-title
      |Patient Criteria Met
      q-icon(slot="right" name="pass")
    q-card-separator
    q-card-main
      p Stroke onset time and patient criteria are met. The patient may be a candidate for clot retrieval depending on the CT findings. Now:
        ol
          li Order an immediate CT brain + CTA of neck and brain. CTA confirmed occlusion is a pre-requiste for transfer to Auckland Hospital.
          li(v-if="minsSinceOnset > 6 * 60 && localisation==='anterior'") Anterior circulation syndrome 6-24h: <b>Order a CT Perfusion of the brain at the same time as the CT/CTA.</b> Patients in this category must have a proximal occlusion AND a favourable CT perfusion.
          li(v-if="minsSinceOnset > 6 * 60 && localisation==='posterior'") Posterior circulation syndrome 6-24h: If you are confident the patient does not have an anterior circulation syndrome then <b>CTP is not required</b>. If you are uncertain of the localization then CTP should be performed.
          li(v-if="minsSinceOnset < 6 * 60") The patient is within 6h of stroke onset and therefore <b>CTP is not required</b>.
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
    ...mapGetters('patientCriteria', ['patientCriteriaStatus', 'NIHSS']),
    ...mapGetters('onsetCriteria', ['minsSinceOnset']),
    age: {
      get () { return this.$store.state.patientCriteria.age },
      set (value) { this.$store.commit('patientCriteria/setAge', value) }
    },
    functional: {
      get () { return this.$store.state.patientCriteria.functional },
      set (value) { this.$store.commit('patientCriteria/setFunctional', value) }
    },
    BSL: {
      get () { return this.$store.state.patientCriteria.BSL },
      set (value) { this.$store.commit('patientCriteria/setBSL', value) }
    },
    hospital: {
      get () { return this.$store.state.patientCriteria.hospital },
      set (value) { this.$store.commit('patientCriteria/setHospital', value) }
    },
    nihss: {
      get () { return this.$store.state.patientCriteria.nihss },
      set (value) { this.$store.commit('patientCriteria/setNihss', value) }
    },
    localisation: {
      get () { return this.$store.state.patientCriteria.localisation },
      set (value) { this.$store.commit('patientCriteria/setLocalisation', value) }
    }
  },
  mounted () {
    var self = this
    this.$nextTick(function () {
      self.$root.$emit('convertIcons')
    })
  }
}
</script>

<style>
</style>
