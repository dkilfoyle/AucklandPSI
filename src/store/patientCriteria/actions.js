export const resetPatientCriteria = (context) => {
  context.commit('setAge', false)
  context.commit('setFunctional', false)
  context.commit('setBSL', false)
  context.commit('setHospital', false)
  context.commit('setNihss', false)
  context.commit('setLocalisation', 'anterior')
}
