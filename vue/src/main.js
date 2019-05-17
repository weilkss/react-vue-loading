import Vue from 'vue';
import App from './App.vue';
import Loading from './plugin/index.js';
// import Loading from '../lib/Loading.js';
Vue.use(Loading);

new Vue({
  el: '#app',
  render: h => h(App)
});
