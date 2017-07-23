<template lang="pug">
  div
    p CTA (CT angiography) is a mandatory pre-requisite. If your hospital does not have CTA capability the patient should be transfered to your nearest CTA capable hospital.
    q-list(style="margin-bottom: 20px" highlight)
      q-item(tag="label")
        q-item-side
          q-checkbox(v-model="nobleed")
        q-item-tile(label) Confirm CT shows no hemorrhage?
      q-list-header Select the most appropriate CTA finding
      q-item(tag="label")
        q-item-side
          q-radio(v-model="ctfinding", val="none")
        q-item-tile(label) No Occlusion
      q-item(tag="label")
        q-item-side
          q-radio(v-model="ctfinding", val="ICA")
        q-item-tile(label) ICA Occlusion
      q-item(tag="label")
        q-item-side
          q-radio(v-model="ctfinding", val="MCA")
        q-item-tile(label) M1 or proximal M2 MCA Occlusion
      q-item(tag="label")
        q-item-side
          q-radio(v-model="ctfinding", val="basilar")
        q-item-tile(label) Basilar Occlusion
      q-item(tag="label")
        q-item-side
          q-radio(v-model="ctfinding", val="other")
        q-item-tile(label) Other Occlusion

    mixin ctinstructions
      ol
        li Ask your radiologist to send the images <b>immediately</b> to Auckland PACS. The Auckland Neurologist/Neuroradiologist cannot make a treatment decision until the images have been received and viewed.
        li Discuss the patient with your consultant prior to contacting Auckland Hospital - specifically review diagnostic certainty, appropriateness of transfer with respect to baseline comorbidity and safety for transfer.
        li Call Auckland Hospital and ask to speak to the On-Call Neurologist. Do not ask for the On-Call Neuroradiologist. The person making the call should be at least registrar level and if not a SMO should have discussed the patient with their local relevant SMO prior to calling.
        li If the patient is still within 4.5h of onset they may be suitable for thrombolysis in addition to clot retrieval.

    mixin neuroaccepted
      q-list(no-border highlight)
        q-item(tag="label")
          q-item-side
            q-checkbox(v-model="neurologistaccepted")
          q-item-tile(label) Has the patient been accepted by the Auckland Hospital on-call neurologist for transfer?

    q-card.passing(v-if="isAnterior && minsSinceOnset < 360").fullwidth
      q-card-title
        |Scan Criteria Met
        q-icon(slot="right" name="pass")
      q-card-separator  
      q-card-main
        p The patient is within 6h of symptom onset with an occluded anterior circulation artery. The patient may be a candidate for transfer to Auckland Hospital for urgent endovascular clot retreival. Please do the following immediately:
          +ctinstructions
          +neuroaccepted

    q-card.passing(v-else-if="isPosterior && minsSinceOnset < 720").fullwidth
      q-card-title
        |Scan Criteria Met (basilar only)
        q-icon(slot="right" name="pass")
      q-card-separator  
      q-card-main
        p The patient is within 12h of symptom onset with an occluded basilar artery. The patient may be a candidate for transfer to Auckland Hospital for urgent endovascular clot retreival. Please do the following immediately:
          +ctinstructions
          +neuroaccepted

    q-card.failing(v-else).fullwidth
      q-card-title
        |Scan Criteria NOT Met
        q-icon(slot="right" name="cancel")
      q-card-separator  
      q-card-main
        div(v-if="ctfinding==='other'")
          p You have selected 'other' occlusion. Only ICA, MCA and basilar occlusions are suitable for PSI. Isolated occlusions of ACA, PCA or single vertebral are usually not appropriate for PSI.
          hr
        p This combination of CT findings and/or timeframe do not meet clot retrieval criteria. If the scan shows no bleeding and the patient is still within 4.5h of symptom onset the patient may be suitable for thrombolysis - refer to local policy. Based on the responses given the patient is not suitable for transfer to Auckland Hospital and it is not necessary to discuss the case with the Auckland Hospital on-call neurologist. If uncertain discuss with your local senior physician.

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['minsSinceOnset', 'isAnterior', 'isPosterior', 'scanCriteriaStatus']),
    nobleed: {
      get () { return this.$store.state.scanCriteria.nobleed },
      set (value) { this.$store.commit('setNoBleed', value) }
    },
    ctfinding: {
      get () { return this.$store.state.scanCriteria.ctfinding },
      set (value) { this.$store.commit('setCTFinding', value) }
    },
    neurologistaccepted: {
      get () { return this.$store.state.scanCriteria.neurologistaccepted },
      set (value) { this.$store.commit('setNeurologistAccepted', value) }
    }
  }
}
</script>

<style>

</style>
