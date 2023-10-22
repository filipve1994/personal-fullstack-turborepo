// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'

import 'uno.css'
// import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
// import '@razorsim/ui-starter/index.css'
import '@filipve/ui-starter/index.css'

import DefaultLayout from './layouts/DefaultLayout.vue'
import EmptyLayout from './layouts/EmptyLayout.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueQueryPlugin)
app.component('DefaultLayout', DefaultLayout)
app.component('EmptyLayout', EmptyLayout)

app.mount('#app')
