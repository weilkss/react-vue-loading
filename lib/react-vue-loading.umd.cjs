(function(t,s){typeof exports=="object"&&typeof module<"u"?module.exports=s():typeof define=="function"&&define.amd?define(s):(t=typeof globalThis<"u"?globalThis:t||self,t.RVLoading=s())})(this,function(){"use strict";class t extends HTMLElement{static get observedAttributes(){return["size","color"]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}attributeChangedCallback(i,o,e){o!==e&&this.render()}render(){if(!this.shadowRoot)return;const i=this.getAttribute("size")||"24",o=this.getAttribute("color")||"#2396fa",e=Number(i),r=e/2,n=e/10,a=r-n,d=`
      :host { display: inline-block; width: ${e}px; height: ${e}px; }
      svg { animation: rotate-svg 2s infinite linear; }
      circle {
        stroke-dasharray: 1, ${e*2};
        stroke-dashoffset: 0;
        animation: dash-circle 1.5s ease-in-out infinite;
        stroke-linecap: round;
      }
      @keyframes rotate-svg { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes dash-circle {
        0% { stroke-dasharray: 1, ${e*4}; stroke-dashoffset: 0; }
        50% { stroke-dasharray: ${e*2.5}, ${e*4}; stroke-dashoffset: -${e*.7}; }
        100% { stroke-dasharray: 1, ${e*4}; stroke-dashoffset: -${e*2.48}; }
      }
    `;this.shadowRoot.innerHTML=`
      <style>${d}</style>
      <svg width="${e}" height="${e}" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${r}" cy="${r}" r="${a}" stroke="${o}" stroke-miterlimit="10" stroke-width="${n}" fill="none" />
      </svg>
    `}}return typeof window<"u"&&!customElements.get("rv-loading")&&customElements.define("rv-loading",t),"rv-loading"});
