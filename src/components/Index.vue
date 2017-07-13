<template lang="pug">
  q-layout(ref="layout" view="lHh LpR lFf")
    q-toolbar(slot="header")
      q-toolbar-title Northern/Midlands Percutaneous Stroke Intervention Screening Tool

    .layout-padding(style="padding-top: 1rem")
      .row
        .col
          q-card.bg-cyan-2(style="margin-bottom: 20px;")
            q-card-main
              p A screening tool to identify acute stroke patients suitable for urgent transfer to Auckland Hospital for Percutaneous Stroke Intervention (PSI) a.k.a. Clot Retrieval. Answer the questions below. <em>This version is still in development. Please report any necessary changes to Dean Kilfoyle.</em>
              q-btn(@click="restart()") Restart

        div.col-4(v-if="minsSinceOnset < (12*60) && minsSinceOnset > 0" style="margin-bottom: 20px")
          q-card.bg-light.text-black
            q-card-title(style="text-align:center") Time Since Stroke Onset
            q-card-main
              elapsed-time(:date="onsetTime")

      q-stepper(ref="stepper")
        q-step(name="onsetTime" default title="Onset Criteria" icon="access_time" active-icon="access_time")
          onset-criteria
          q-stepper-navigation(v-if="onsetCriteriaStatus")
            q-btn(color="primary" @click="$refs.stepper.next()") Continue to Patient Criteria
        q-step(name="patientCriteria" title="Patient Criteria" icon="person" active-icon="person")
          patient-criteria
          q-stepper-navigation(v-if="patientCriteriaStatus")
            q-btn(color="primary" @click="$refs.stepper.next()") Continue to Scan Criteria
        q-step(name="scanCriteria" title="Scan Criteria" icon="scanner" active-icon="scanner")
          scan-criteria
          q-stepper-navigation(v-if="scanCriteriaStatus")
            q-btn(color="primary" @click="$refs.stepper.next()") Continue to Transfer Instructions
        q-step(name="transferInstructions" title="Transfer Instructions" icon="airplanemode_active" active-icon="airplanemode_active")
          transfer-instructions
</template>

<script>
import OnsetCriteria from './OnsetCriteria.vue'
import PatientCriteria from './PatientCriteria.vue'
import ScanCriteria from './ScanCriteria.vue'
import TransferInstructions from './TransferInstructions.vue'
import ElapsedTime from './ElapsedTime.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    OnsetCriteria,
    PatientCriteria,
    ScanCriteria,
    TransferInstructions,
    ElapsedTime
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['onsetTime', 'minsSinceOnset', 'onsetCriteriaStatus', 'patientCriteriaStatus', 'scanCriteriaStatus'])
  },
  methods: {
    ...mapActions(['resetCriteria']),
    restart () {
      this.resetCriteria()
      this.$refs.stepper.reset()
    }
  }
}
</script>

<style lang="stylus">
@import '~src/themes/app.mat.styl'
.passing {
  background-color: $green-2
}
.failing {
  background-color: $amber-2
}
// .q-collapsible > .q-item {
//   color: white
//   background-color: $dark
// }
// .q-collapsible > .q-item > .q-item-side {
//   color: white
//   background-color: $dark
// }
</style>
