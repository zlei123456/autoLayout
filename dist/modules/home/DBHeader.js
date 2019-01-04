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
var componentsDataAction_1 = require("../../actions/componentsDataAction");
var SubMenu = antd_1.Menu.SubMenu;
var MenuItemGroup = antd_1.Menu.ItemGroup;
var DBHeader = (function (_super) {
    __extends(DBHeader, _super);
    function DBHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            current: 'mail',
        };
        _this.handleClick = function (e) {
            console.log('click ', e);
            if (e.key == 'newProject') {
                _this.props.newProject('new1');
            }
            else if (e.key == 'save') {
                _this.props.save();
            }
        };
        return _this;
    }
    DBHeader.prototype.render = function () {
        return (React.createElement(antd_1.Menu, { onClick: this.handleClick, mode: "horizontal" },
            React.createElement(SubMenu, { title: React.createElement("span", null,
                    React.createElement(antd_1.Icon, { type: "file" }),
                    '项目') },
                React.createElement(antd_1.Menu.Item, { key: "newProject" }, '新建项目'),
                React.createElement(antd_1.Menu.Item, { key: "openProject" }, '打开项目'),
                React.createElement(antd_1.Menu.Item, { key: "save" }, '保存'))));
    };
    return DBHeader;
}(React.Component));
function mapState(state, ownProps) {
    return {};
}
function mapDispatch(dispatch, ownProps) {
    return {
        newProject: function (name) { return dispatch(componentsDataAction_1.newProject(name)); },
        save: function () { return dispatch(componentsDataAction_1.save()); },
    };
}
exports.default = react_redux_1.connect(mapState, mapDispatch)(DBHeader);
//# sourceMappingURL=DBHeader.js.map