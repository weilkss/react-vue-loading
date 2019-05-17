import Loading from './Loading.vue';

let plugin = {};
plugin.install = function(Vue) {
  Vue.component(Loading.name, Loading);
};

export default plugin;
