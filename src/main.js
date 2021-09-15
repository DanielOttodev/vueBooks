import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router  from '../src/router/index'
import Emitter from 'tiny-emitter'
import msal, { msalMixin } from 'vue-msal'

Vue.use(msal, {
  // Enable SSO
  auth: {
    clientId: 'azureClientID',
    authority:
      'azureAuthority',
    redirectUri: "http://localhost:8080/#/default", // Redirect Url after sign in
    postLogoutRedirectUri: "http://localhost:8080/#/login",
    globalMixin : true,
    navigateToLoginRequestUrl:false
  },

});
Vue.config.productionTip = false
Vue.prototype.$msalInstance = {}
Vue.prototype.$emitter = new Emitter();

Vue.use(VueRouter)

new Vue({
  mixins:[msalMixin],
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
