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
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    resetCriteria (context) {
      context.dispatch('resetOnsetCriteria')
      context.dispatch('resetPatientCriteria')
      context.dispatch('resetScanCriteria')
    }
  }
})
