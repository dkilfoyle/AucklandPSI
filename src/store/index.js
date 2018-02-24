import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'
import onsetCriteria from './onsetCriteria'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    example,
    onsetCriteria
  }
})

export default store
