<template lang="pug">
  div
    q-table(title="Patient Summary" :data="tableData" :columns="columns" row-key="name" hide-bottom hide-header)
    q-card.bg-blue-2.full-width(style="margin-top: 20px")
      q-card-title Transfer Accepted
        q-icon(slot="right" name="pass")
      q-card-main
        p
          ol
              li Call for an urgent helicopter transfer to Auckland Hospital. Instruct the transfer team to take the patient to Auckland Hospital resus where they will be briefly assessed prior to direct transfer to angiography suite.
              li Provide patient/family this information sheet explaining the procedure. Click <a href="statics/patientinformation.pdf" download>HERE</a> to download.
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
          label: 'Criterion',
          field: 'item',
          align: 'left'
        },
        {
          name: 'value',
          field: 'value',
          label: 'Value'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('onsetCriteria', ['minsSinceOnset']),
    ...mapGetters('scanCriteria', ['isCTPFavourable']),
    onsetTime () { return (date.formatDate(this.$store.state.onsetCriteria.onsetTime, 'HH:mm')) },
    ctfinding () { return (this.$store.state.scanCriteria.ctfinding) },
    ctpfinding () {
      if (this.isCTPFavourable) {
        return 'Favourable'
      } else {
        return 'NA'
      }
    },
    minsRemaining () {
      var maxmins = 0
      if (this.isCTPFavourable) {
        maxmins = 24 * 60
      } else {
        maxmins = 6 * 60
      }
      if (this.$store.state.scanCriteria.ctfinding === 'MCA') { return (maxmins - this.minsSinceOnset) }
      if (this.$store.state.scanCriteria.ctfinding === 'ICA') { return (maxmins - this.minsSinceOnset) }
      if (this.$store.state.scanCriteria.ctfinding === 'basilar') { return (24 * 60 - this.minsSinceOnset) }
    },
    tableData () {
      return [
        { item: 'Time of Onset', value: this.onsetTime },
        { item: 'Elapsed Time', value: this.elapsedTime(this.minsSinceOnset) },
        { item: 'CTA finding', value: this.ctfinding },
        { item: 'CTP finding', value: this.ctpfinding },
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
