export const isAnterior = state => { return (state.nobleed && (state.ctfinding === 'ICA' || state.ctfinding === 'MCA')) }
export const isPosterior = state => { return (state.nobleed && state.ctfinding === 'basilar') }
export const isCTPFavourable = state => { return (state.ctpcore && state.ctpperfusion) }
export const scanCriteriaStatus = (state, getters, rootState, rootGetters) => {
  const bPosterior = getters.isPosterior && rootGetters['onsetCriteria/minsSinceOnset'] < 24 * 60
  const bAnteriorUnder6 = getters.isAnterior && rootGetters['onsetCriteria/minsSinceOnset'] < 6 * 60
  const bAnteriorOver6 = getters.isAnterior && rootGetters['onsetCriteria/minsSinceOnset'] > 6 * 60 && rootGetters['onsetCriteria/minsSinceOnset'] < 24 * 60 && getters.isCTPFavourable
  return (bPosterior || bAnteriorUnder6 || bAnteriorOver6) && state.neurologistaccepted
}
