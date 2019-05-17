'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function (_React$Component) {
    (0, _inherits3.default)(Loading, _React$Component);

    function Loading(props) {
        (0, _classCallCheck3.default)(this, Loading);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Loading.__proto__ || (0, _getPrototypeOf2.default)(Loading)).call(this, props));

        _this.state = {
            time: parseInt(Date.now() * Math.random())
        };
        return _this;
    }

    (0, _createClass3.default)(Loading, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var s = Number(this.props.size);
            this.style = document.createElement('style');
            this.style.type = 'text/css';
            var keyFrames = '\n            @keyframes animation-svg-' + this.state.time + ' {\n                from {\n                    transform: rotate(0deg);\n                }\n                to {\n                    transform: rotate(360deg);\n                }\n            }\n            @keyframes animation-circle-' + this.state.time + ' {\n                0% {\n                    stroke-dasharray: 1, ' + s * 4 + ';\n                    stroke-dashoffset: 0;\n                }\n                50% {\n                    stroke-dasharray: ' + s * 2.5 + ', ' + s * 4 + ';\n                    stroke-dashoffset: -' + s * 0.7 + ';\n                }\n                100% {\n                    stroke-dasharray: 1, ' + s * 4 + ';\n                    stroke-dashoffset: -' + s * 2.48 + ';\n                }\n            }\n        ';
            this.style.innerHTML = keyFrames;
            document.getElementsByTagName('head')[0].appendChild(this.style);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                size = _props.size,
                color = _props.color;

            var s = Number(size),
                c = s / 2,
                w = s / 10,
                r = c - w,
                circleStyle = {
                strokeDasharray: '1,' + s * 2,
                strokeDashoffset: 0,
                animation: 'animation-circle-' + this.state.time + ' 1.5s ease-in-out infinite',
                strokeLinecap: 'round'
            };
            return _react2.default.createElement(
                'svg',
                { width: s, height: s, version: '1.1', style: { animation: 'animation-svg-' + this.state.time + ' 2s infinite linear' }, xmlns: 'http://www.w3.org/2000/svg' },
                _react2.default.createElement('circle', { cx: c, cy: c, r: r, stroke: color, style: circleStyle, strokeMiterlimit: '10', strokeWidth: w, fill: 'none' })
            );
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.style) {
                this.style.remove();
            }
        }
    }]);
    return Loading;
}(_react2.default.Component); /**
                               * @param {size}
                               * @param {color}
                               * @time 2019/1/20
                               */

Loading.defaultProps = {
    color: '#2396fa',
    size: 24
};

exports.default = Loading;
