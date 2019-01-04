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
require("./ComponentItemMenu.css");
var commonAction_1 = require("../actions/commonAction");
var componentsDataAction_1 = require("../actions/componentsDataAction");
var SubMenu = antd_1.Menu.SubMenu;
var MenuItemGroup = antd_1.Menu.ItemGroup;
var ComponentItemMenu = (function (_super) {
    __extends(ComponentItemMenu, _super);
    function ComponentItemMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addMenus = ['View', 'Image', 'ImageBackGround', 'Text', 'TextInput'];
        _this.handleClick = function (e) {
            console.log(e);
            _this.props.componentMenuVisible({ visible: false });
            var eKey = e.key;
            var arr = eKey.split('_');
            if (arr[0] == 'add') {
                _this.add(arr[1]);
            }
        };
        _this.add = function (type) {
            console.log(type);
            _this.props.addComponent({ type: type });
        };
        _this.del = function () {
        };
        return _this;
    }
    ComponentItemMenu.prototype.render = function () {
        var componentMenuInfo = this.props.componentMenuInfo;
        return (React.createElement("div", { className: 'ComponentMenuDiv', id: 'ComponentMenuDiv' },
            React.createElement("div", { className: 'componentMenuRect', style: { position: 'absolute',
                    left: componentMenuInfo.x + 'px',
                    top: componentMenuInfo.y + 'px',
                    width: '120px',
                    border: '1px solid #eee',
                    background: '#fff'
                } },
                React.createElement(antd_1.Menu, { onClick: this.handleClick, style: { width: '120px' }, defaultSelectedKeys: ['1'], defaultOpenKeys: ['sub1'], mode: "vertical" },
                    React.createElement(SubMenu, { key: "add", title: React.createElement("span", null,
                            React.createElement(antd_1.Icon, { type: "plus-circle" }),
                            React.createElement("span", null, '增加')) }, this.addMenus.map(function (v) {
                        return (React.createElement(antd_1.Menu.Item, { key: 'add_' + v }, v));
                    })),
                    React.createElement(antd_1.Menu.Item, { key: "del" },
                        React.createElement("span", null,
                            React.createElement(antd_1.Icon, { type: "delete" }),
                            React.createElement("span", null, '删除')))))));
    };
    ComponentItemMenu.prototype.componentDidMount = function () {
        var _this = this;
        var div = document.getElementById('ComponentMenuDiv');
        div.addEventListener('click', function (ev) {
            console.log('colse');
            _this.props.componentMenuVisible({ visible: false });
        });
    };
    return ComponentItemMenu;
}(React.Component));
function mapState(state, ownProps) {
    return {};
}
function mapDispatch(dispatch, ownProps) {
    return {
        componentMenuVisible: function (data) { return dispatch(commonAction_1.componentMenuVisible(data)); },
        addComponent: function (params) { return dispatch(componentsDataAction_1.addComponent(params)); },
    };
}
exports.default = react_redux_1.connect(mapState, mapDispatch)(ComponentItemMenu);
//# sourceMappingURL=ComponentItemMenu.js.map