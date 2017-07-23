<template lang="pug">
  div
    table.q-table.horizontal-separator.bordered(style="margin-bottom:30px")
      thead
        tr
          th Summary
          th
      tbody
        tr
          td CT Finding
          td {{ctfinding}} occlusion
        tr
          td Time of onset
          td {{onsetTime}}
        tr
          td Elapsed Time
          td {{minsSinceOnset|elapsedTime}}
        tr
          td Time remaining
          td {{minsRemaining|elapsedTime}}
    q-card.bg-blue-2.full-width
      q-card-title Transfer Accepted
      q-card-main
        p
          ol
              li Call for an urgent helicopter transfer to Auckland Hospital. Instruct the transfer team to take the patient to Auckland Hospital resus where they will be briefly assessed prior to direct transfer to angiography suite.
              li Provide patient/family this information sheet explaining the procedure. Click <a href="/AucklandPSI/statics/patientinformation.pdf" download>HERE</a> to download.
              li If suitable for thrombolysis this should be initiated pre-transfer. The patient can be transferred with the infusion still running if necessary. Usual blood pressure parameters will need to be maintained.
          p(style="text-align:center") Pathway complete
</template>

<script>
import { date } from 'quasar'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['minsRemaining', 'minsSinceOnset', 'elapsedTime']),
    onsetTime () { return (date.formatDate(this.$store.state.onsetCriteria.onsetTime, 'HH:mm')) },
    ctfinding () { return (this.$store.state.scanCriteria.ctfinding) }
  },
  filters: {
    elapsedTime: (value) => {
      let hours = parseInt(Math.floor(value / 60))
      let mins = parseInt(value % 60)
      let dHours = (hours > 9 ? hours : '0' + hours)
      let dMins = (mins > 9 ? mins : '0' + mins)
      return (dHours + ':' + dMins)
    }
  }
}
</script>

<style>
</style>
