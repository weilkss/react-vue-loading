<template>
  <svg
    :width="size"
    :height="size"
    :style="svgData.svgStyle"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      :cx="svgData.c"
      :cy="svgData.c"
      :r="svgData.r"
      :stroke="color"
      :style="svgData.circleStyle"
      stroke-miterlimit="10"
      :stroke-width="svgData.w"
      fill="none"
    />
  </svg>
</template>
<script>
export default {
  name: "RVloading",
  props: {
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: "#2396fa"
    }
  },
  data() {
    return {
      time: parseInt(Date.now() * Math.random()),
      svgData: {
        c: null,
        r: null,
        w: null,
        svgStyle: null,
        circleStyle: null
      }
    };
  },
  created() {
    const s = Number(this.size);
    const obj = {
      c: s / 2,
      w: s / 10,
      r: s / 2 - s / 10,
      svgStyle: {
        animation: `animation-svg-${this.time} 2s infinite linear`
      },
      circleStyle: {
        strokeDasharray: "1," + s * 2,
        strokeDashoffset: 0,
        animation: `animation-circle-${this.time} 1.5s ease-in-out infinite`,
        strokeLinecap: "round"
      }
    };
    this.svgData = obj;
    this.style = document.createElement("style");
    this.style.type = "text/css";
    let keyFrames = `
            @keyframes animation-svg-${this.time} {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
            @keyframes animation-circle-${this.time} {
                0% {
                    stroke-dasharray: 1, ${s * 4};
                    stroke-dashoffset: 0;
                }
                50% {
                    stroke-dasharray: ${s * 2.5}, ${s * 4};
                    stroke-dashoffset: -${s * 0.7};
                }
                100% {
                    stroke-dasharray: 1, ${s * 4};
                    stroke-dashoffset: -${s * 2.48};
                }
            }
        `;
    this.style.innerHTML = keyFrames;
    document.getElementsByTagName("head")[0].appendChild(this.style);
  },
  destroyed() {
    if (this.style) this.style.remove();
  }
};
</script>