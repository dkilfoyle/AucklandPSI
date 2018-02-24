import {date} from 'quasar'

export default {
  onsetTime: date.subtractFromDate(Date.now(), {hours: 13})
}
