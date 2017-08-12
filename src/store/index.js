import Vue from 'vue'
import Vuex from 'vuex'

import patientCriteria from './patientCriteria.js'
import scanCriteria from './scanCriteria.js'
import onsetCriteria from './onsetCriteria.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    patientCriteria,
    scanCriteria,
    onsetCriteria
  },
  state: {
    dhbhospital: 'waikato'
  },
  getters: {
    minsRemaining: (state, getters) => {
      if (state.scanCriteria.ctfinding === 'MCA') { return (6 * 60 - getters.minsSinceOnset) }
      if (state.scanCriteria.ctfinding === 'ICA') { return (6 * 60 - getters.minsSinceOnset) }
      if (state.scanCriteria.ctfinding === 'basilar') { return (12 * 60 - getters.minsSinceOnset) }
    }
  },
  mutations: {
    setDHBHospital (state, value) { state.dhbhospital = value }
  },
  actions: {
    resetCriteria (context) {
      context.dispatch('resetOnsetCriteria')
      context.dispatch('resetPatientCriteria')
      context.dispatch('resetScanCriteria')
    }
  }
})
