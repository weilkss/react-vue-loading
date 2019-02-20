!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Loading",[],t):"object"==typeof exports?exports.Loading=t():e.Loading=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/lib/",t(t.s=1)}([function(e,t,n){"use strict";t.a={name:"Loading",props:{size:{type:[Number,String],default:24},color:{type:String,default:"#2396fa"}},data:function(){return{time:parseInt(Date.now()*Math.random()),svgData:{c:null,r:null,w:null,svgStyle:null,circleStyle:null}}},created:function(){var e=Number(this.size),t={c:e/2,w:e/10,r:e/2-e/10,svgStyle:{animation:"animation-svg-"+this.time+" 2s infinite linear"},circleStyle:{strokeDasharray:"1,"+2*e,strokeDashoffset:0,animation:"animation-circle-"+this.time+" 1.5s ease-in-out infinite",strokeLinecap:"round"}};this.svgData=t,this.style=document.createElement("style"),this.style.type="text/css";var n="\n            @keyframes animation-svg-"+this.time+" {\n                from {\n                    transform: rotate(0deg);\n                }\n                to {\n                    transform: rotate(360deg);\n                }\n            }\n            @keyframes animation-circle-"+this.time+" {\n                0% {\n                    stroke-dasharray: 1, "+4*e+";\n                    stroke-dashoffset: 0;\n                }\n                50% {\n                    stroke-dasharray: "+2.5*e+", "+4*e+";\n                    stroke-dashoffset: -"+.7*e+";\n                }\n                100% {\n                    stroke-dasharray: 1, "+4*e+";\n                    stroke-dashoffset: -"+2.48*e+";\n                }\n            }\n        ";this.style.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(this.style)},destroyed:function(){this.style&&this.style.remove()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),s={};s.install=function(e){e.component(r.a.name,r.a)},t.default=s},function(e,t,n){"use strict";var r=n(0),s=n(4),o=n(3),i=o(r.a,s.a,!1,null,null,null);t.a=i.exports},function(e,t){e.exports=function(e,t,n,r,s,o){var i,a=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(i=e,a=e.default);var c="function"==typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId=s);var f;if(o?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=f):r&&(f=r),f){var u=c.functional,d=u?c.render:c.beforeCreate;u?(c._injectStyles=f,c.render=function(e,t){return f.call(t),d(e,t)}):c.beforeCreate=d?[].concat(d,f):[f]}return{esModule:i,exports:a,options:c}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{style:e.svgData.svgStyle,attrs:{width:e.size,height:e.size,version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{style:e.svgData.circleStyle,attrs:{cx:e.svgData.c,cy:e.svgData.c,r:e.svgData.r,stroke:e.color,strokeMiterlimit:"10","stroke-width":e.svgData.w,fill:"none"}})])},s=[],o={render:r,staticRenderFns:s};t.a=o}])});
//# sourceMappingURL=Loading.js.map