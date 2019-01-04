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
var LInputNumber_1 = require("./LInputNumber");
var LInput_1 = require("./LInput");
var LSelect_1 = require("./LSelect");
var commonReducer_1 = require("../../reducers/commonReducer");
var componentsDataReducer_1 = require("../../reducers/componentsDataReducer");
var componentProperty_1 = require("../../data/componentProperty");
require("./Property.css");
var Property = (function (_super) {
    __extends(Property, _super);
    function Property() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getItem = function (data) { return Object.keys(data).map(function (k) {
            var v = data[k];
            if (v.type == 'input' && v.limit == 'number') {
                return (React.createElement(LInputNumber_1.default, { preText: k, item: v, selectMenuId: _this.props.selectMenuId }));
            }
            else if (v.type == 'input') {
                return (React.createElement(LInput_1.default, { preText: k, item: v, selectMenuId: _this.props.selectMenuId }));
            }
            else if (v.type == 'select') {
                return (React.createElement(LSelect_1.default, { preText: k, option: v.limit, item: v, selectMenuId: _this.props.selectMenuId }));
            }
        }); };
        return _this;
    }
    Property.prototype.render = function () {
        var style = {
            type: 'dir',
            Children: {
                flex: {
                    type: 'input',
                    limit: 'number',
                },
                flexDirection: {
                    type: 'select',
                    limit: 'row,column',
                },
                marginTop: {
                    type: 'input',
                    limit: 'number',
                }
            }
        };
        var c = style.Children;
        if (this.props.selectMenuId != '' && this.props.treeData[this.props.selectMenuId]) {
            var d = this.props.treeData[this.props.selectMenuId];
            if (d.type && componentProperty_1.default[d.type]) {
                var t = componentProperty_1.default[d.type];
                return (React.createElement("div", { id: 'propertyDiv' },
                    React.createElement("div", { className: 'titleDiv' },
                        React.createElement("p", null, 'style')),
                    React.createElement("div", { className: 'propertyConDiv' }, this.getItem(t.style))));
            }
        }
        return (React.createElement("div", null));
    };
    return Property;
}(React.Component));
function mapState(state, ownProps) {
    return {
        selectMenuId: state[commonReducer_1.commonKey].selectMenuId,
        treeData: state[componentsDataReducer_1.componentsDataKey].data,
    };
}
function mapDispatch(dispatch, ownProps) {
    return {};
}
exports.default = react_redux_1.connect(mapState, mapDispatch)(Property);
//# sourceMappingURL=Property.js.map