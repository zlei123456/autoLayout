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
var antd_1 = require("antd");
var React = require("react");
require("./Home.css");
var Option = antd_1.Select.Option;
var Property12 = (function (_super) {
    __extends(Property12, _super);
    function Property12() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changeInput = function (e) {
            console.log(e.target);
        };
        _this.changeInputNumber = function (e) {
            console.log(e.target.id);
        };
        _this.handleChange = function (value) {
            console.log(value);
        };
        return _this;
    }
    Property12.prototype.render = function () {
        var names = ['aa', 'bb', 'cc'];
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("span", null, '名 字: '),
                React.createElement(antd_1.Input, { className: 'baseInput', id: 'name', onChange: this.changeInput })),
            React.createElement("div", null,
                React.createElement("span", null, '数字: '),
                React.createElement(antd_1.InputNumber, { className: 'baseInput', id: 'number', onChange: this.changeInputNumber })),
            React.createElement("div", null,
                React.createElement("span", null, '选择器: '),
                React.createElement(antd_1.Select, { defaultValue: "lucy", style: { width: 120 }, onChange: this.handleChange }, names.map(function (v) {
                    return (React.createElement(Option, { value: v }, v));
                })))));
    };
    return Property12;
}(React.Component));
exports.default = Property12;
//# sourceMappingURL=Property12.js.map