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
var ComponentItemMenu_1 = require("../../components/ComponentItemMenu");
var commonReducer_1 = require("../../reducers/commonReducer");
var Tips = (function (_super) {
    __extends(Tips, _super);
    function Tips() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tips.prototype.render = function () {
        return (React.createElement("div", null, this.props.componentMenuInfo.visible ? (React.createElement(ComponentItemMenu_1.default, { componentMenuInfo: this.props.componentMenuInfo })) : null));
    };
    return Tips;
}(React.Component));
function mapState(state, ownProps) {
    return {
        componentMenuInfo: state[commonReducer_1.commonKey].componentMenuInfo
    };
}
function mapDispatch(dispatch, ownProps) {
    return {};
}
exports.default = react_redux_1.connect(mapState, mapDispatch)(Tips);
//# sourceMappingURL=Tips.js.map