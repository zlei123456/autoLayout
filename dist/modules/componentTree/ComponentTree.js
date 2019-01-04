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
var commonAction_1 = require("../../actions/commonAction");
var commonReducer_1 = require("../../reducers/commonReducer");
var componentsDataReducer_1 = require("../../reducers/componentsDataReducer");
var DirectoryTree = antd_1.Tree.DirectoryTree;
var TreeNode = antd_1.Tree.TreeNode;
var ComponentTree = (function (_super) {
    __extends(ComponentTree, _super);
    function ComponentTree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSelect = function (checkedKeys, info) {
            console.log(checkedKeys);
            _this.props.selectMenu(checkedKeys[0]);
        };
        _this.onRightClick = function (_a) {
            var event = _a.event, node = _a.node;
            console.log(event.pageX);
            console.log(event.pageY);
            console.log(node.props.title);
            console.log(node.props.eventKey);
            _this.props.selectMenu(node.props.eventKey);
            _this.props.componentMenuVisible({ visible: true,
                x: event.pageX,
                y: event.pageY,
                menuId: node.props.eventKey,
            });
        };
        _this.renderTreeNodes = function (data) { return Object.keys(data).map(function (item) {
            if (_this.props.treeData[item]) {
                var itemData = _this.props.treeData[item];
                return (React.createElement(TreeNode, { title: itemData.type, key: itemData.key, dataRef: itemData }, _this.renderTreeNodes(data[item])));
            }
            return null;
        }); };
        return _this;
    }
    ComponentTree.prototype.render = function () {
        return (React.createElement(antd_1.Tree, { showLine: true, onSelect: this.onSelect, selectedKeys: [this.props.selectMenuId], onRightClick: this.onRightClick }, this.renderTreeNodes(this.props.tree)));
    };
    return ComponentTree;
}(React.Component));
function mapState(state, ownProps) {
    return {
        selectMenuId: state[commonReducer_1.commonKey].selectMenuId,
        tree: state[componentsDataReducer_1.componentsDataKey].tree,
        treeData: state[componentsDataReducer_1.componentsDataKey].data,
    };
}
function mapDispatch(dispatch, ownProps) {
    return {
        componentMenuVisible: function (data) { return dispatch(commonAction_1.componentMenuVisible(data)); },
        selectMenu: function (menuId) { return dispatch(commonAction_1.selectMenu(menuId)); }
    };
}
exports.default = react_redux_1.connect(mapState, mapDispatch)(ComponentTree);
//# sourceMappingURL=ComponentTree.js.map