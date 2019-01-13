import Vue from 'vue'
import App from './App.vue'
import SearchApi from '../services/search'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



SearchApi.getResults('jack johnson');