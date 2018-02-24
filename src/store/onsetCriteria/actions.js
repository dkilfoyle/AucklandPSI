/*
export const someAction = (state) => {}
 */

import {date} from 'quasar'

export const resetOnsetCriteria = (context) => {
  context.commit('setOnsetTime', date.subtractFromDate(Date.now(), {hours: 25}))
}
