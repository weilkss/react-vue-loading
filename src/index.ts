export interface RVLoadingProps {
  /**
   * Loading 的大小 (px)
   * @default 24
   */
  size?: number | string;
  /**
   * Loading 的颜色
   * @default "#2396fa"
   */
  color?: string;
}

class RVLoadingElement extends HTMLElement {
  static get observedAttributes() {
    return ["size", "color"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(_: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  private render() {
    if (!this.shadowRoot) return;
    const sizeAttr = this.getAttribute("size") || "24";
    const color = this.getAttribute("color") || "#2396fa";
    const s = Number(sizeAttr);
    const c = s / 2;
    const w = s / 10;
    const r = c - w;

    const style = `
      :host { display: inline-block; width: ${s}px; height: ${s}px; }
      svg { animation: rotate-svg 2s infinite linear; }
      circle {
        stroke-dasharray: 1, ${s * 2};
        stroke-dashoffset: 0;
        animation: dash-circle 1.5s ease-in-out infinite;
        stroke-linecap: round;
      }
      @keyframes rotate-svg { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes dash-circle {
        0% { stroke-dasharray: 1, ${s * 4}; stroke-dashoffset: 0; }
        50% { stroke-dasharray: ${s * 2.5}, ${s * 4}; stroke-dashoffset: -${s * 0.7}; }
        100% { stroke-dasharray: 1, ${s * 4}; stroke-dashoffset: -${s * 2.48}; }
      }
    `;

    this.shadowRoot.innerHTML = `
      <style>${style}</style>
      <svg width="${s}" height="${s}" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${c}" cy="${c}" r="${r}" stroke="${color}" stroke-miterlimit="10" stroke-width="${w}" fill="none" />
      </svg>
    `;
  }
}

if (typeof window !== "undefined" && !customElements.get("rv-loading")) {
  customElements.define("rv-loading", RVLoadingElement);
}

// 4. ✨ 核心黑科技 ✨
// 运行时，它只是一个字符串 "rv-loading"，让 React/Vue 渲染原生标签。
// 但在类型系统上，我们把它伪装成一个接受 RVLoadingProps 的“函数组件”。
// 这样不需要依赖任何框架，就能获得满分的智能提示！
const RVLoading = "rv-loading" as any;
export default RVLoading as (props: RVLoadingProps) => any;
