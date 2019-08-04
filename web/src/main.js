// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
// vant样式
import 'vant/lib/index.css'
// 全局css样式
import './assets/css/main.css'
// 分辨率适配
import './assets/js/resolving_power.js'

Vue.use(Vant);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})