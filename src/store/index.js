import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'
import onsetCriteria from './onsetCriteria'
import patientCriteria from './patientCriteria'
import scanCriteria from './scanCriteria'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    example,
    onsetCriteria,
    patientCriteria,
    scanCriteria
  }
})

export default store
