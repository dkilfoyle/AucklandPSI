<template lang="pug">
  div 
    p It is critically important to correctly establish the time of symptom onset. An incorrect time of onset may endanger the patient. If the patient awoke with symptoms then time of onset should be assumed to be when they fell asleep prior to waking. If the patient cannot provide any history then time of onset should be when last seen or known to be well.
    p Use the widget below to set both the date and time of symptom onset. Click on the time to change hours and minutes. Note 24h clock. The initial value defaults to 13 hours prior to current time.

    h6 Enter Stroke Onset Time

    div
      .row.md-gutter.items-center(style="margin-bottom:20px")
        .col-sm8
          dk-inline-datetime(format24h v-model="onsetTime" type="datetime")
        .col-sm4
          //- q-alert(v-if="minsSinceOnset > (12 * 60)" color="negative")
          //-   p More than 12 hrs ago
          q-alert(v-if="minsSinceOnset < 0" color="negative" icon="warningw") Onset time is in the future

    q-card.passing(v-if="minsSinceOnset < (4.5*60) && minsSinceOnset >= 0").fullwidth
      q-card-title
        |Onset Criteria Met
        q-icon(slot="right" name="pass")
      q-card-separator
      q-card-main
        p The patient is within 4.5h of symptom onset and is therefore potentially a candidate for IV thrombolysis with alteplase AND/OR percutaneous intervention. For thrombolysis indications refer to your hospital's local guidelines and procedures. If thrombolysis is indicated according to your local procedures it should be started as soon as possible. Thrombolysis issues should not delay transfer for percutaneous intervention. The remainder of this screening tool will refer specifically to percutaneous intervention

    q-card.passing(v-if="minsSinceOnset >= (4.5*60) && minsSinceOnset < (6*60)").fullwidth
      q-card-title
        |Onset Criteria Met
        q-icon(slot="right" name="pass")
      q-card-separator
      q-card-main
        p The patient is between 4.5h and 6h after symptom onset. The patient is no longer a candidate for thrombolysis but may still be a candidate for clot retrieval. Continue with the screening process.
        q-card(v-if="minsSinceOnset > 5*60" style="margin-bottom:10px;")
          q-card-main.failing
            p WARNING: The patient is within <b>{{(6*60)-minsSinceOnset}} minutes</b> of the upper limit of the treatment window. The patient must complete the rest of the pathway AND arrive at Auckland Hospital within the next {{(6*60)-minsSinceOnset}}minutes in order to be treatable. If that is not feasible then do not continue with this pathway.

    q-card.passing(v-if="minsSinceOnset >= (6*60) && minsSinceOnset < (12*60)").fullwidth
      q-card-title
        |Onset Criteria Met
        q-icon(slot="right" name="pass")
      q-card-separator
      q-card-main
        p The patient is between 6h and 12h post symptom onset. The only remaining indication for clot retrieval in this time period is a <b>basilar occlusion</b>. Patients with ICA or MCA occlusion are now excluded.
        q-card(v-if="minsSinceOnset > 11*60" style="margin-bottom:10px;")
          q-card-main.failing
            p WARNING: The patient is within <b>{{(12*60)-minsSinceOnset}} minutes</b> of the upper limit of the treatment window for a basilar occlusion. The patient must complete the rest of the pathway AND arrive at Auckland Hospital within the next {{(12*60)-minsSinceOnset}} minutes in order to be treatable. If that is not feasible then do not continue with this pathway.

    q-card.failing(v-if="minsSinceOnset >= (12*60)").fullwidth
      q-card-title
        |Onset Criteria NOT Met
        q-icon(slot="right" name="cancel")
      q-card-separator
      q-card-main
        p The patient is more than 12h post onset and is therefore not suitable for clot retrieval.

</template>

<script>
import { mapGetters } from 'vuex'
import { DkInlineDatetime } from './dkdatetime'

export default {
  components: {
    DkInlineDatetime
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['minsSinceOnset', 'elapsedTime']),
    onsetTime: {
      get () { return this.$store.state.onsetCriteria.onsetTime },
      set (value) { this.$store.commit('setOnsetTime', value) }
    }
  }
}
</script>

<style lang="stylus">

</style>
