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

    q-layout-drawer(v-model="leftDrawerOpen"  content-class="bg-grey-2")
      q-list(no-border link inset-delimiter)
        q-list-header Essential Links
        q-item(@click.native="openURL('http://quasar-framework.org')")
          q-item-side(icon="school")
          q-item-main(label="Docs" sublabel="quasar-framework.org")

    q-page-container
      router-view
    q-page-container
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
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
