<template lang="pug">
  q-layout(ref="layout" view="lHh LpR lFf")
    q-toolbar(slot="header")
      q-btn(flat @click="$refs.layout.toggleLeft()")
        q-icon(name="menu")
      q-icon(name="brain")
      q-toolbar-title Auckland PSI
        span(slot="subtitle") Northern/Midlands Percutaneous Stroke Intervention Screening Tool
      q-chip(color="secondary" icon="build") beta
        q-tooltip Development version. Send any comments to Dean Kilfoyle

    q-scroll-area(slot="left" style="width:100%; height:100%; padding-left:10px; padding-right:10px; padding-top:10px;").bg-grey-3
      NIHSS

    .layout-padding(style="padding-top: 1rem")
        .flex.justify-center
          div(style="width: 900px; max-width: 90vw")
            .row.items-center
              .col-sm-8
                q-card.bg-cyan-2
                  q-card-main
                    p A screening tool to identify acute stroke patients suitable for urgent transfer to Auckland Hospital for Percutaneous Stroke Intervention (PSI) a.k.a. Clot Retrieval. Answer the questions below. Rare cases may depart from these standard criteria - discuss with your local neurologist. 
                    .row.items-center
                      .col-sm
                        q-field(label="Hospital")
                          q-select(v-model="dhbhospital", :options="dhbHospitalOptions")
                      .col-sm
                        q-btn.float-right(@click="restart()" icon="cached") Restart

              .col-sm-4
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
import NIHSS from './NIHSS.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    OnsetCriteria,
    PatientCriteria,
    ScanCriteria,
    TransferInstructions,
    ElapsedTime,
    NIHSS
  },
  data () {
    return {
      dhbHospitalOptions: [
        {
          label: 'Waikato',
          value: 'waikato'
        },
        {
          label: 'Whangarei',
          value: 'whangarei'
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
        },
        {
          label: 'Taupo',
          value: 'taupo'
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

// // To implement png icons instead of font icons change QIcon.js lines:
// else {
//   // name = 'material-icons'
//   // text = icon.replace(/ /g, '_')
//   name = `pngicon png-${icon}`
// }

.pngicon {
    display: inline-block;
    overflow: hidden;
    color: transparent;
    font-family: sans-serif;
    width: 24px;
    height: 24px;
    background-position: center center;
    background-repeat: no-repeat;
}

<<<<<<< HEAD
icons = keyboard_arrow_right,
 keyboard_arrow_left,
 scanner,
 access_time,
 flight,
 build,
 cached,
 person,
 arrow_drop_down,
 check_box_outline_blank,
 check_box,
 radio_button_unchecked,
 radio_button_checked,
 check,
 pass,
 cancel,
 brain,
 menu

for iconname in icons
  .png-{iconname}
    background-image: url('~assets/' + iconname + '.png')

// .png-keyboard_arrow_right { background-image: url('~assets/keyboard_arrow_right.png'); }
// .png-keyboard_arrow_left { background-image: url('~assets/keyboard_arrow_left.png'); }
// .png-scanner { background-image: url('~assets/scannerw.png'); }
// .png-access_time { background-image: url('~assets/access_timew.png'); }
// .png-flight { background-image: url('~assets/flightw.png'); }
// .png-build { background-image: url('~assets/buildw.png'); }
// .png-cached { background-image: url('~assets/cached.png'); }
// .png-person { background-image: url('~assets/personw.png'); }
// .png-arrow_drop_down { background-image: url('~assets/arrow_drop_down.png'); }
// .png-check_box_outline_blank { background-image: url('~assets/check_box_outline_blank.png'); }
// .png-check_box { background-image: url('~assets/check_box.png'); }
// .png-radio_button_unchecked { background-image: url('~assets/radio_button_unchecked.png'); }
// .png-radio_button_checked { background-image: url('~assets/radio_button_checked.png'); }
// .png-check { background-image: url('~assets/checkw.png'); }
// .png-pass { background-image: url('~assets/pass.png'); }
// .png-cancel { background-image: url('~assets/cancel.png'); }
// .png-brain { background-image: url('~assets/brain.png'); }
// .png-menu { background-image: url('~assets/menu.png'); }
=======
.png-keyboard_arrow_right { background-image: url('~assets/keyboard_arrow_right.png'); }
.png-keyboard_arrow_left { background-image: url('~assets/keyboard_arrow_left.png'); }
.png-scanner { background-image: url('~assets/scannerw.png'); }
.png-access_time { background-image: url('~assets/access_timew.png'); }
.png-flight { background-image: url('~assets/flightw.png'); }
.png-build { background-image: url('~assets/buildw.png'); }
.png-cached { background-image: url('~assets/cached.png'); }
.png-person { background-image: url('~assets/personw.png'); }
.png-arrow_drop_down { background-image: url('~assets/arrow_drop_down.png'); }
.png-check_box_outline_blank { background-image: url('~assets/check_box_outline_blank.png'); }
.png-check_box { background-image: url('~assets/check_box.png'); }
.png-radio_button_unchecked { background-image: url('~assets/radio_button_unchecked.png'); }
.png-radio_button_checked { background-image: url('~assets/radio_button_checked.png'); }
.png-check { background-image: url('~assets/checkw.png'); }
.png-pass { background-image: url('~assets/pass.png'); }
.png-cancel { background-image: url('~assets/cancel.png'); }
.png-brain { background-image: url('~assets/brain.png'); }
.png-warning { background-image: url('~assets/warning.png'); }
.png-warningw { background-image: url('~assets/warningw.png'); }
>>>>>>> 4aa9044ffc80ed1fa37346758d8a5052ebf61fc5
</style>
