import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import MipNewButton from '@/components/button/MipNewButton'
import MipSearchButton from '@/components/button/MipSearchButton'
import MipListUpdateButton from '@/components/button/MipListUpdateButton'
import MipListOrganizeUpdateButton from '@/components/button/MipListOrganizeUpdateButton'
import MipSearchCustomerNameInput from '@/components/search/MipSearchCustomerNameInput'
import MipSearchMatterDateFromToInput from '@/components/search/MipSearchMatterDateFromToInput'
import MipSearchMatterDateInput from '@/components/search/MipSearchMatterDateInput'
import MipSearchMatterNameInput from '@/components/search/MipSearchMatterNameInput'
import MipSearchMatterNoInput from '@/components/search/MipSearchMatterNoInput'
import MipSearchMatterStatusCheckButton from '@/components/search/MipSearchMatterStatusCheckButton'

Vue.config.productionTip = false

Vue.component('MipNewButton', MipNewButton)
Vue.component('MipSearchButton', MipSearchButton)
Vue.component('MipListUpdateButton', MipListUpdateButton)
Vue.component('MipListOrganizeUpdateButton', MipListOrganizeUpdateButton)
Vue.component('MipSearchCustomerNameInput', MipSearchCustomerNameInput)
Vue.component('MipSearchMatterDateFromToInput', MipSearchMatterDateFromToInput)
Vue.component('MipSearchMatterDateInput', MipSearchMatterDateInput)
Vue.component('MipSearchMatterNameInput', MipSearchMatterNameInput)
Vue.component('MipSearchMatterNoInput', MipSearchMatterNoInput)
Vue.component('MipSearchMatterStatusCheckButton', MipSearchMatterStatusCheckButton)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
