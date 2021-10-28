import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import store from './store/index'
import router from './router/index'
import App from './App.vue'

import 'element-plus/dist/index.css'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
