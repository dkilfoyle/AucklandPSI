<template lang="pug">
  q-layout(ref="layout" view="lHh LpR lFf")
    q-toolbar(slot="header")
      q-toolbar-title
        |Northern/Midlands Percutaneous Stroke Intervention Screening Tool
      q-chip(color="secondary" icon="build") beta
        q-tooltip Development version. Send any comments to Dean Kilfoyle

    .layout-padding(style="padding-top: 1rem")
        .flex.justify-center
          div(style="width: 900px; max-width: 90vw")
            .row.items-center
              .col
                q-card.bg-cyan-2
                  q-card-main
                    p A screening tool to identify acute stroke patients suitable for urgent transfer to Auckland Hospital for Percutaneous Stroke Intervention (PSI) a.k.a. Clot Retrieval. Answer the questions below. Rare cases may depart from these standard criteria - discuss with your local neurologist. 
                    .row
                      .col
                        q-field(label="Hospital")
                          q-select(v-model="dhbhospital", :options="dhbHospitalOptions")
                      .col
                        q-field.float-right
                          q-btn(@click="restart()" icon="cached") Restart

              div.col-sm4
                q-card.bg-light.text-black
                  q-card-title(style="text-align:center") Time Since Stroke Onset
                  q-card-main
                    elapsed-time(:date="onsetTime" :isvalid="isValidOnsetTime")

            q-stepper(ref="stepper" style="margin-top:20px" contractable)
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
              q-step(name="transferInstructions" title="Transfer Instructions" icon="flight" active-icon="flight")
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
      dhbHospitalOptions: [
        {
          label: 'Waikato',
          value: 'waikato'
        },
        {
          label: 'Rotorua',
          value: 'rotorua'
        },
        {
          label: 'Thames',
          value: 'thames'
        },
        {
          label: 'Tauranga',
          value: 'tauranga'
        }
      ]}
  },
  computed: {
    ...mapGetters(['onsetTime', 'minsSinceOnset', 'onsetCriteriaStatus', 'patientCriteriaStatus', 'scanCriteriaStatus']),
    isValidOnsetTime () {
      return (this.minsSinceOnset >= 0 && this.minsSinceOnset < (99 * 60))
    },
    dhbhospital: {
      get () { return this.$store.state.dhbhospital },
      set (value) { this.$store.commit('setDHBHospital', value) }
    }
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
.fullwidth {
  margin-left:0px;
  margin-right:0px;
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
