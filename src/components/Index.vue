<template lang="pug">
  q-layout(ref="layout" view="lHh LpR lFf")
    q-toolbar(slot="header")
      //- q-btn(flat @click="$refs.layout.toggleLeft()")
      //-   q-icon(name="menu")
      q-toolbar-title Northern/Midlands Percutaneous Stroke Intervention Screening Tool

    //- .layout-view
    .layout-padding
      q-card.bg-cyan-2(style="margin-bottom: 20px")
        q-card-main
          p This is a screening tool to identify acute stroke patients potentially suitable for urgent transfer to Auckland Hospital for Percutaneous Stroke Intervention (PSI) a.k.a. Clot Retrieval. Click the button below to start a patient assessment.
          p <em>This version is still in development. Please report any necessary changes to Dean Kilfoyle.</em>
          q-btn(@click="doStart()") Start

      div(v-if="iDuration < (12*60) & iDuration > 0" style="margin-bottom: 20px")
        q-card.bg-light.text-black
          q-card-title(style="text-align:center") Time Since Stroke Onset
          q-card-main
            elapsed-time(:date="onsetTime")

      onset-time
      patient-criteria
      scan-criteria
      transfer-instructions
</template>

<script>
import OnsetTime from './OnsetTime.vue'
import PatientCriteria from './PatientCriteria.vue'
import ScanCriteria from './ScanCriteria.vue'
import TransferInstructions from './TransferInstructions.vue'
import ElapsedTime from './ElapsedTime.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    OnsetTime,
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
    ...mapGetters(['onsetTime', 'iDuration'])
  },
  methods: {
    ...mapActions(['doStart'])
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
// .item-link {
//   background-color: $dark
//   color: white
// }
.q-collapsible > .q-item {
  color: white
  background-color: $dark
}
.q-collapsible > .q-item > .q-item-side {
  color: white
  background-color: $dark
}
</style>
