export const isAnterior = state => { return (state.nobleed && (state.ctfinding === 'ICA' || state.ctfinding === 'MCA')) }
export const isPosterior = state => { return (state.nobleed && state.ctfinding === 'basilar') }
export const scanCriteriaStatus = (state, getters, rootState, rootGetters) => {
  return (((getters.isPosterior && rootGetters['onsetCriteria/minsSinceOnset'] < 720) || (getters.isAnterior && rootGetters['onsetCriteria/minsSinceOnset'] < 360)) && state.neurologistaccepted)
}
