<template lang="pug">
  q-page(padding style="width:900px; max-width: 90vw")
      .row.items-center.justify-center.gutter-lg
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

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
