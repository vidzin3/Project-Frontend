import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {createPinia} from 'pinia'
import router from './router/index'

const vuetify = createVuetify({
  components,
  directives
})
const app = createApp(App)
const pinia = createPinia()

app.use(vuetify)
app.use(pinia)
app.use(router)

app.mount('#app')
