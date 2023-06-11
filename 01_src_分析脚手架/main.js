import Vue from 'vue'

import App from '../src1/App.vue'

// Vue.config.productionTip = false

new Vue({
  template: `<app></app>`,
  components: { App },
  render: h => h(App),
}).$mount('#app')