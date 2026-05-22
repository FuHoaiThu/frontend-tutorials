import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
  faWpforms,
  faFacebookF,
  faTwitter,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons'
import { faFile, faAddressCard } from '@fortawesome/free-regular-svg-icons'

import App from './App.vue'
import router from './router'

library.add(
  faHouse,
  faArrowLeft,
  faWpforms,
  faFile,
  faAddressCard,
  faFacebookF,
  faTwitter,
  faGoogle,
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
