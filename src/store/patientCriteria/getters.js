export const patientCriteriaStatus = (state, getters) => {
  return (state.age && state.functional && state.BSL && state.hospital)
}
