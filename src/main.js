// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
import 'es6-promise/auto'
require(`quasar/dist/quasar.ie`)
require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'

import Quasar, {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QItemTile,
  QTabs,
  QRouteTab,
  QSideLink,
  QCard,
  QCardTitle,
  QCardMain,
  QSelect,
  QField,
  QCardSeparator,
  QCardActions,
  QCollapsible,
  QRadio,
  QCheckbox,
  QInlineDatetime,
  QAlert,
  QStepper,
  QStep,
  QStepperNavigation
} from 'quasar'

import router from './router'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(Quasar, {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QItemTile,
    QTabs,
    QRouteTab,
    QSideLink,
    QCard,
    QCardTitle,
    QCardMain,
    QSelect,
    QField,
    QCardSeparator,
    QCardActions,
    QCollapsible,
    QRadio,
    QCheckbox,
    QInlineDatetime,
    QAlert,
    QStepper,
    QStep,
    QStepperNavigation
  }
}) // Install Quasar Framework

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    store,
    router,
    render: h => h(require('./App'))
  })
})
