"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var redux_actions_1 = require("redux-actions");
var actionType_1 = require("../actions/actionType");
exports.getTreePath = function (path, tree) {
    var treePath = path.split('.');
    var parent = tree;
    for (var i = 0; i < treePath.length; i++) {
        var p = treePath[i];
        if (parent[p]) {
            parent = parent[p];
        }
        else {
            parent = null;
        }
    }
    return parent;
};
var initState = {
    tree: {},
    data: {},
    property: {},
    index: 0,
    projectName: ''
};
exports.componentsDataKey = 'componentsData';
exports.componentsDataReducer = redux_actions_1.handleActions((_a = {},
    _a[actionType_1.NEWPROJECT] = function (state, data) {
        var _a, _b, _c;
        var id = 'id_' + state.index;
        var nextIndex = state.index + 1;
        var treeData = { type: 'View', key: id, path: '' + id, name: 'root' };
        return __assign({}, state, { projectName: data.name, tree: (_a = {}, _a[id] = {}, _a), data: (_b = {}, _b[id] = treeData, _b), property: (_c = {}, _c[id] = {}, _c), index: nextIndex });
    },
    _a[actionType_1.OPENPROJECT] = function (state, data) {
        var st = __assign({}, state);
        return st;
    },
    _a[actionType_1.ADDCOMPONENT] = function (state, data) {
        var st = __assign({}, state);
        var id = 'id_' + st.index;
        st.index = st.index + 1;
        var parentData = st.data[data.parentId];
        var treeData = { type: data.params.type, key: id, path: parentData.path + '.' + id, name: data.params.name };
        var tree = __assign({}, st.tree);
        var parentTree = exports.getTreePath(parentData.path, tree);
        parentTree[id] = {};
        st.data[id] = treeData;
        st.tree = tree;
        st.property[id] = {};
        return st;
    },
    _a[actionType_1.SETPROPERTY] = function (state, data) {
        var st = __assign({}, state);
        if (!st.property[data.selectMenuId]) {
            st.property[data.selectMenuId] = {};
        }
        st.property[data.selectMenuId][data.key] = data.value;
        return st;
    },
    _a), initState);
//# sourceMappingURL=componentsDataReducer.js.map