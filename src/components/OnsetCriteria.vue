<template lang="pug">
  div
    p It is critically important to correctly establish the time of symptom onset. <em>An incorrect time of onset may endanger the patient</em>. If the patient awoke with symptoms, or cannot communicate symptom onset due to dysphasia, then the time of onset should be assumed to be when they were last seen well.
    p Use the widget below to set the date, hour (24h clock) and minute of stroke onset. The Stroke Onset time defaults to 25 hours prior to current time.

    div
      .row.justify-center(style="margin-bottom:40px; margin-top:40px")
        q-datetime-picker(format24h v-model="onsetTime" type="datetime").relative-position
        //- q-alert(v-if="minsSinceOnset > (12 * 60)" color="negative")
        //-   p More than 12 hrs ago
      .row.justify-center
        q-alert(v-if="minsSinceOnset < 0" color="negative" icon="warning") Onset time is in the future

    q-card.passing(v-if="minsSinceOnset < (4.5*60) && minsSinceOnset >= 0").fullwidth
      q-card-title
        |0-4.5h Onset Criteria Met
        q-icon(slot="right" name="pass")
      q-card-separator
      q-card-main
        p The patient is within 4.5h of symptom onset and is therefore potentially a candidate for IV thrombolysis with alteplase AND/OR percutaneous intervention. For thrombolysis indications refer to your hospital's local guidelines and procedures. Thrombolysis should not delay transfer for percutaneous intervention. The remainder of this screening tool will refer specifically to percutaneous intervention

    q-card.passing(v-if="minsSinceOnset >= (4.5*60) && minsSinceOnset < (6*60)").fullwidth
      q-card-title
        |4.5-6h Onset Criteria Met
        q-icon(slot="right" name="pass")
      q-card-separator
      q-card-main
        p The patient is between 4.5h and 6h after symptom onset. The patient is no longer a candidate for thrombolysis but may still be a candidate for clot retrieval. Continue with the screening process.
        q-card(v-if="minsSinceOnset > 5*60" style="margin-bottom:10px;")
          q-card-main.failing
            p WARNING: The patient is within <b>{{(6*60)-minsSinceOnset}} minutes</b> of the upper limit of the treatment window. The patient must complete the rest of the pathway AND arrive at Auckland Hospital within the next {{(6*60)-minsSinceOnset}}minutes in order to be treatable. If that is not feasible then do not continue with this pathway.

    q-card.passing(v-if="minsSinceOnset >= (6*60) && minsSinceOnset < (24*60)").fullwidth
      q-card-title
        |6-24h Onset Criteria Met
        q-icon(slot="right" name="pass")
      q-card-separator
      q-card-main
        p The patient is between 6h and 24h post symptom onset. There are two potential indications for clot retrieval in this time window:
        ol
          li <b>Basilar Occlusion</b>
          li <b>ICA or M1 Occlusion</b> with a favourable CT perfusion profile
        q-card(v-if="minsSinceOnset > 23*60" style="margin-bottom:10px;")
          q-card-main.failing
            p WARNING: The patient is within <b>{{(24*60)-minsSinceOnset}} minutes</b> of the upper limit of the treatment window. The patient must complete the rest of the pathway AND arrive at Auckland Hospital within the next {{(24*60)-minsSinceOnset}} minutes in order to be treatable. If that is not feasible then do not continue with this pathway.

    q-card.failing(v-if="minsSinceOnset >= (24*60)").fullwidth
      q-card-title
        |Onset Criteria NOT Met
        q-icon(slot="right" name="warning")
      q-card-separator
      q-card-main
        p The patient is more than 24h post onset and is therefore not suitable for clot retrieval.
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  computed: {
    ...mapGetters('onsetCriteria', ['minsSinceOnset', 'elapsedTime']),
    onsetTime: {
      get () { return this.$store.state.onsetCriteria.onsetTime },
      set (value) { this.$store.commit('onsetCriteria/setOnsetTime', value) }
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
