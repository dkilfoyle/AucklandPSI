import Vue from 'vue'
import Vuex from 'vuex'
import {date} from 'quasar'

// import * as mutations from './mutations'
// import * as actions from './actions'
// import * as getters from './getters'
// import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bOnsetTime: false,
    bPatientCriteria: false,
    bScanCriteria: false,
    bStart: false,
    iDuration: -100,
    onsetTime: ''
  },
  getters: {
    bOnsetTime: state => state.bOnsetTime,
    bPatientCriteria: state => state.bPatientCriteria,
    bScanCriteria: state => state.bScanCriteria,
    bStart: state => state.bStart,
    iDuration: state => {
      return (date.getDateDiff(Date.now(), state.onsetTime, 'minutes'))
    },
    onsetTime: state => state.onsetTime
  },
  mutations: {
    setOnsetTimeStatus (state, status) {
      state.bOnsetTime = status
    },
    setPatientCriteriaStatus (state, status) {
      state.bPatientCriteria = status
    },
    setScanCriteriaStatus (state, status) {
      state.bScanCriteria = status
    },
    setStartStatus (state, status) {
      state.bStart = status
    },
    setOnsetTime (state, onsetTime) {
      state.onsetTime = onsetTime
    }
  },
  actions: {
    doStart (context) {
      context.commit('setOnsetTimeStatus', false)
      context.commit('setPatientCriteriaStatus', false)
      context.commit('setScanCriteriaStatus', false)
      context.commit('setStartStatus', true)
    }
  }
})
