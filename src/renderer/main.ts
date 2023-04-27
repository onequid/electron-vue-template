import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import { router } from './utils/router'
import 'element-plus/dist/index.style'

const app = createApp(App);

app.use(ElementPlus).use(router).mount('#app');
