const Vloading = require('./vue');
const Rloading = require('./react');
let RVloading = null;

if (window.__VUE_HOT_MAP__) {
  RVloading = Vloading;
} else {
  RVloading = Rloading;
}

module.exports = RVloading;
