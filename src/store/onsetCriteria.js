import {date} from 'quasar'

const module = {
  state: {
    onsetTime: date.subtractFromDate(Date.now(), {hours: 13})
  },
  getters: {
    onsetTime: state => state.onsetTime,
    onsetCriteriaStatus: (state, getters) => {
      return (getters.minsSinceOnset < (60 * 12) && getters.minsSinceOnset >= 0)
    },
    minsSinceOnset: state => {
      return (date.getDateDiff(Date.now(), state.onsetTime, 'minutes'))
    },
    elapsedTime: (state, getters) => {
      let hours = parseInt(Math.floor(getters.minsSinceOnset / 60))
      let mins = parseInt(getters.minsSinceOnset % 60)
      let dHours = (hours > 9 ? hours : '0' + hours)
      let dMins = (mins > 9 ? mins : '0' + mins)
      return (dHours + ':' + dMins)
    }
  },
  mutations: {
    setOnsetTime (state, val) { state.onsetTime = val }
  },
  actions: {
    resetOnsetCriteria (context) {
      context.commit('setOnsetTime', date.subtractFromDate(Date.now(), {hours: 13}))
    }
  }
}

export default module
