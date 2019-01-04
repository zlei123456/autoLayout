"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var antd_1 = require("antd");
var componentsDataReducer_1 = require("../../reducers/componentsDataReducer");
var componentsDataAction_1 = require("../../actions/componentsDataAction");
var LInput = (function (_super) {
    __extends(LInput, _super);
    function LInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changeInputNumber = function (value) {
            console.log(value);
        };
        return _this;
    }
    LInput.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("span", { className: 'perText' }, this.props.key + ': '),
            React.createElement(antd_1.Input, { className: 'baseInput', id: this.props.key, value: this.props.value, onChange: this.changeInputNumber })));
    };
    return LInput;
}(React.Component));
function mapState(state, ownProps) {
    return {
        value: state[componentsDataReducer_1.componentsDataKey].property[ownProps.selectMenuId][ownProps.preText]
    };
}
function mapDispatch(dispatch, ownProps) {
    return {
        setProperty: function (key, value) { return dispatch(componentsDataAction_1.setProperty(key, value)); },
    };
}
exports.default = react_redux_1.connect(mapState, mapDispatch)(LInput);
//# sourceMappingURL=LInput.js.map