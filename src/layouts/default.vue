<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-layout-header
      q-toolbar(color="primary" glossy)
        q-btn(flat dense round @click="leftDrawerOpen = !leftDrawerOpen")
          q-icon(name="menu")

        q-toolbar-title Auckland PSI
          div(slot="subtitle") Northern/Midlands Percutaneous Stroke Intervention Screening Tool
        div
          q-chip(color="secondary" icon="build" small) beta
          q-tooltip Development version. Send any comments to Dean Kilfoyle

    q-layout-drawer(v-model="leftDrawerOpen" content-class="bg-grey-2" overlay)
      q-scroll-area(style="width:100%; height:100%; padding-left:10px; padding-right:10px; padding-top:10px;").bg-grey-3
        NIHSS

    q-page-container
      router-view
    q-page-container
</template>

<script>
import { openURL } from 'quasar'
import NIHSS from 'components/NIHSS'

export default {
  name: 'LayoutDefault',
  components: {
    NIHSS
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
