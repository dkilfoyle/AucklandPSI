<template lang="pug">
  q-page(padding style="width:900px; max-width: 90vw")
      .row.items-center.justify-center.gutter-md
        .col-sm-8
          q-card.bg-cyan-2
            q-card-main.q-body-2
              p A screening tool to identify acute stroke patients suitable for urgent transfer to Auckland Hospital for Percutaneous Stroke Intervention (PSI) a.k.a. Clot Retrieval.
              p Answer the questions below. Rare cases may depart from these standard criteria - discuss with your local neurologist or stroke physician.
              .row.items-center.gutter-md
                .col-sm
                  q-field(label="Hospital")
                    q-select(v-model="dhbHospital", :options="dhbHospitalOptions")
                .col-sm
                  q-btn.float-right(@click="restart()" icon="cached") Restart

        .col-sm-4
          q-card.bg-light.text-black
            q-card-title(style="text-align:center") Time Since Stroke Onset
            q-card-main
              elapsed-time(:date="onsetTime")

      q-stepper(ref="stepper" style="margin-top:20px" contractable)
        q-step(name="onsetTime" default title="Onset Criteria" icon="access_time" active-icon="access_time")
          onset-criteria
          q-stepper-navigation(v-if="onsetCriteriaStatus")
            q-btn(color="primary" @click="$refs.stepper.next()") Continue to Patient Criteria
        q-step(name="patientCriteria" title="Patient Criteria" icon="person" active-icon="person")
          patient-criteria
          q-stepper-navigation(v-if="patientCriteriaStatus")
            q-btn.float-right(color="primary" @click="$refs.stepper.next()") Continue to Scan Criteria
        q-step(name="scanCriteria" title="Scan Criteria" icon="scanner" active-icon="scanner")
          scan-criteria
          q-stepper-navigation(v-if="scanCriteriaStatus")
            q-btn.float-right(color="primary" @click="$refs.stepper.next()") Continue to Transfer Instructions
        q-step(name="transferInstructions" title="Transfer Instructions" icon="flight" active-icon="flight")
          transfer-instructions
</template>

<script>
import OnsetCriteria from 'components/OnsetCriteria.vue'
import PatientCriteria from 'components/PatientCriteria.vue'
import ScanCriteria from 'components/ScanCriteria.vue'
import TransferInstructions from 'components/TransferInstructions.vue'
import ElapsedTime from 'components/ElapsedTime.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'PageIndex',
  components: {
    OnsetCriteria,
    PatientCriteria,
    ScanCriteria,
    TransferInstructions,
    ElapsedTime
  },
  computed: {
    ...mapGetters('onsetCriteria', ['onsetCriteriaStatus', 'onsetTime']),
    ...mapGetters('patientCriteria', ['patientCriteriaStatus']),
    ...mapGetters('scanCriteria', ['scanCriteriaStatus'])
  },
  data () {
    return {
      dhbHospital: 'waikato',
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
      ]
    }
  },
  methods: {
    restart () {
      this.$store.dispatch('onsetCriteria/resetOnsetCriteria')
      this.$store.dispatch('patientCriteria/resetPatientCriteria')
      this.$store.dispatch('scanCriteria/resetScanCriteria')
      this.$refs.stepper.reset()
    }
  },
  updated () {
    // ugly hack to convert all webfont material icons to image icons for intranet with webfont download disabled
    if (this.$q.platform.is.name === 'ie') {
      var miAll = document.querySelectorAll('.material-icons')
      for (var i = 0; i < miAll.length; i++) {
        var mi = miAll[i]
        mi.classList.remove('material-icons')
        mi.classList.add('png-icons')
        var iconName = mi.innerHTML
        mi.innerHTML = ''
        mi.classList.add('png-' + iconName)
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~variables'

.passing {
  background-color: $green-2
}

.failing {
  background-color: $amber-2
}

.png-icons {
    display: inline-block;
    overflow: hidden;
    color: transparent;
    font-family: sans-serif;
    width: 24px;
    height: 24px;
    background-position: center center;
    background-repeat: no-repeat;
}

icons = chevron_right,
 chevron_left,
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
 menu,
 warning,
 warningw

for iconname in icons
  .png-{iconname}
    background-image: url('~assets/' + iconname + '.png')

</style>
