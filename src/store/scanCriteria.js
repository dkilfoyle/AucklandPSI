const module = {
  state: {
    nobleed: true,
    ctfinding: 'No Occlusion',
    neurologistaccepted: false
  },
  getters: {
    nobleed: state => state.nobleed,
    ctfinding: state => state.ctfinding,
    neurologistaccepted: state => state.neurologistaccepted,
    isAnterior: state => { return (state.nobleed && (state.ctfinding === 'ICA' || state.ctfinding === 'MCA')) },
    isPosterior: state => { return (state.nobleed && state.ctfinding === 'basilar') },
    scanCriteriaStatus: (state, getters) => {
      return (((getters.isPosterior && getters.minsSinceOnset < 720) || (getters.isAnterior && getters.minsSinceOnset < 360)) && state.neurologistaccepted)
    }
  },
  mutations: {
    setNoBleed (state, val) { state.nobleed = val },
    setCTFinding (state, val) { state.ctfinding = val },
    setNeurologistAccepted (state, val) { state.neurologistaccepted = val }
  },
  actions: {
    resetScanCriteria (context) {
      context.commit('setNoBleed', false)
      context.commit('setCTFinding', false)
      context.commit('setNeurologistAccepted', false)
    }
  }
}

export default module
