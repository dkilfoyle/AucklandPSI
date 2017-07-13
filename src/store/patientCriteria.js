const module = {
  state: {
    age: false,
    functional: false,
    BSL: false,
    hospital: false
  },
  getters: {
    age: state => state.age,
    functional: state => state.functional,
    BSL: state => state.BSL,
    hospital: state => state.hospital,
    patientCriteriaStatus: (state, getters) => {
      return (state.age && state.functional && state.BSL && state.hospital)
    }
  },
  mutations: {
    setAge (state, val) { state.age = val },
    setFunctional (state, val) { state.functional = val },
    setBSL (state, val) { state.BSL = val },
    setHospital (state, val) { state.hospital = val }
  },
  actions: {
    resetPatientCriteria (context) {
      context.commit('setAge', false)
      context.commit('setFunctional', false)
      context.commit('setBSL', false)
      context.commit('setHospital', false)
    }
  }
}

export default module
