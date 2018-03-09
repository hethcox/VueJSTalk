// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from 'vue2-google-maps'

let apiKey = 'AIzaSyBZl79IC5fZ4aj3lQo4UCT8yuP6JwSUy0Q'

Vue.use(VueAxios, axios)
Vue.use(VueGoogleMaps, {
  load: {
    key: apiKey,
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  template: '<App/>',
  components: {
    App,
  },
});
