/**
 * @param {size}
 * @param {color}
 * @time 2019/1/20
 */

import React from 'react';

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: parseInt(Date.now() * Math.random())
        };
    }
    componentDidMount() {
        const s = Number(this.props.size);
        this.style = document.createElement('style');
        this.style.type = 'text/css';
        let keyFrames = `
            @keyframes animation-svg-${this.state.time} {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
            @keyframes animation-circle-${this.state.time} {
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
        document.getElementsByTagName('head')[0].appendChild(this.style);
    }
    render() {
        const { size, color } = this.props;
        const s = Number(size),
            c = s / 2,
            w = s / 10,
            r = c - w,
            circleStyle = {
                strokeDasharray: '1,' + s * 2,
                strokeDashoffset: 0,
                animation: `animation-circle-${this.state.time} 1.5s ease-in-out infinite`,
                strokeLinecap: 'round'
            };
        return (
            <svg width={s} height={s} version="1.1" style={{ animation: `animation-svg-${this.state.time} 2s infinite linear` }} xmlns="http://www.w3.org/2000/svg">
                <circle cx={c} cy={c} r={r} stroke={color} style={circleStyle} strokeMiterlimit="10" strokeWidth={w} fill="none" />
            </svg>
        );
    }
    componentWillUnmount() {
        if (this.style) {
            this.style.remove();
        }
    }
}

Loading.defaultProps = {
    color: '#2396fa',
    size: 24
};

export default Loading;
