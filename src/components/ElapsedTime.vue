<template>
  <div class="flip-clock" data-date="2017-07-01 12:00:00" @click="update">
    <tracker property="Hours" :time="hours" :isvalid="isvalid"></tracker>
    <tracker property="Minutes" :time="minutes" :isvalid="isvalid"></tracker>
  </div>
</template>

<script>
import Tracker from './Tracker.vue'
import { date } from 'quasar'

export default {
  props: ['date', 'isvalid'],

  data: () => ({
    hours: 0,
    minutes: 0,
    i: 0
  }),

  components: {
    Tracker
  },

  beforeDestroy () {
    if (window['cancelAnimationFrame']) {
      cancelAnimationFrame(this.frame)
    }
  },

  mounted () {
    if (window['requestAnimationFrame']) {
      this.update()
    }
  },

  methods: {
    update () {
      this.frame = requestAnimationFrame(this.update.bind(this))
      if (this.i++ % 10) { return }
      if (this.date) {
        var emins = date.getDateDiff(Date.now(), this.date, 'minutes')
        this.hours = parseInt(Math.floor(emins / (60)))
        this.minutes = parseInt(Math.floor(emins % 60))
      }
      else {
        this.hours = 0
        this.minutes = 0
      }
    }
  }
}
</script>

<style>
.flip-clock {
  text-align: center;
  -webkit-perspective: 600px;
  perspective: 600px;
  margin: 0 auto;
}

.flip-clock *,
.flip-clock *:before,
.flip-clock *:after {
  box-sizing: border-box;
}
</style>
