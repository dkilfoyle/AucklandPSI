/*
export const someGetter = (state) => {}
 */

import {date} from 'quasar'

export const onsetTime = (state) => state.onsetTime
export const minsSinceOnset = (state) => date.getDateDiff(Date.now(), state.onsetTime, 'minutes')
export const onsetCriteriaStatus = (state, getters) => (getters.minsSinceOnset < (60 * 12) && getters.minsSinceOnset >= 0)
