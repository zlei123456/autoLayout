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
var initState = {
    componentMenuInfo: {},
    selectMenuId: ''
};
exports.commonKey = 'common';
exports.commonReducer = redux_actions_1.handleActions((_a = {},
    _a[actionType_1.CIMENUVISIBLE] = function (state, data) {
        return __assign({}, state, { componentMenuInfo: data.params });
    },
    _a[actionType_1.SELECTMENUID] = function (state, data) {
        return __assign({}, state, { selectMenuId: data.selectMenuId });
    },
    _a), initState);
//# sourceMappingURL=commonReducer.js.map