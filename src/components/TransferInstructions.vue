<template lang="pug">
  div
    q-table(title="Summary" :data="tableData" :columns="columns" row-key="name" hide-bottom)
    q-card.bg-blue-2.full-width(style="margin-top: 20px")
      q-card-title Transfer Accepted
        q-icon(slot="right" name="pass")
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
      columns: [
        {
          name: 'criteria',
          field: 'item',
          align: 'left'
        },
        {
          name: 'value',
          field: 'value'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('onsetCriteria', ['minsSinceOnset']),
    onsetTime () { return (date.formatDate(this.$store.state.onsetCriteria.onsetTime, 'HH:mm')) },
    ctfinding () { return (this.$store.state.scanCriteria.ctfinding) },
    minsRemaining () {
      if (this.$store.state.scanCriteria.ctfinding === 'MCA') { return (6 * 60 - this.minsSinceOnset) }
      if (this.$store.state.scanCriteria.ctfinding === 'ICA') { return (6 * 60 - this.minsSinceOnset) }
      if (this.$store.state.scanCriteria.ctfinding === 'basilar') { return (12 * 60 - this.minsSinceOnset) }
    },
    tableData () {
      return [
        { item: 'CT finding', value: this.ctfinding },
        { item: 'Time of Onset', value: this.onsetTime },
        { item: 'Elapsed Time', value: this.elapsedTime(this.minsSinceOnset) },
        { item: 'Time remaining', value: this.elapsedTime(this.minsRemaining) }
      ]
    }
  },
  methods: {
    elapsedTime: (value) => {
      let hours = parseInt(Math.floor(value / 60))
      let mins = parseInt(value % 60)
      let dHours = (hours > 9 ? hours : '0' + hours)
      let dMins = (mins > 9 ? mins : '0' + mins)
      return (dHours + ':' + dMins)
    }
  },
  filters: {
    elapsedTime: (value) => {
      this.elapsedTime(value)
    }
  }
}
</script>

<style>
</style>
