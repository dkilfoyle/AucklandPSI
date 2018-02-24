export const resetScanCriteria = (context) => {
  context.commit('setNoBleed', false)
  context.commit('setCTFinding', false)
  context.commit('setNeurologistAccepted', false)
  context.commit('setCtpcore', false)
  context.commit('setCtpperfusion', false)
}
