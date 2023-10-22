import './assets/main.css'

import "sweet-vue-tooltip/style.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {createToolTipPlugin} from "sweet-vue-tooltip";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(
    createToolTipPlugin({
        arrow: true,
        placement: "top",
    })
)

app.mount('#app')
