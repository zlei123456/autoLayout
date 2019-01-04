"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionType_1 = require("./actionType");
exports.componentMenuVisible = function (params) {
    return function (dispatch, getState) {
        dispatch({
            type: actionType_1.CIMENUVISIBLE,
            params: params,
        });
    };
};
exports.selectMenu = function (menuId) {
    return function (dispatch, getState) {
        dispatch({
            type: actionType_1.SELECTMENUID,
            selectMenuId: menuId,
        });
    };
};
//# sourceMappingURL=commonAction.js.map