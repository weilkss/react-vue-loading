import Vloading from './Vloading.vue';

let plugin = {};
plugin.install = function(Vue) {
  Vue.component(Vloading.name, Vloading);
};

export default plugin;
