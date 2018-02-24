export const patientCriteriaStatus = (state, getters, rootState, rootGetters) => {
  if (rootGetters['onsetCriteria/minsSinceOnset'] > 6 * 60) {
    return (state.age && state.functional && state.BSL && state.hospital && state.nihss)
  } else {
    return (state.age && state.functional && state.BSL && state.hospital)
  }
}
