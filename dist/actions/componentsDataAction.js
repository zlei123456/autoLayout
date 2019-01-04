"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionType_1 = require("./actionType");
var commonReducer_1 = require("../reducers/commonReducer");
exports.newProject = function (name) {
    return function (dispatch, getState) {
        dispatch({
            type: actionType_1.NEWPROJECT,
            name: name,
        });
    };
};
exports.openProject = function (data) {
    return function (dispatch, getState) {
        dispatch({
            type: actionType_1.OPENPROJECT,
            data: data,
        });
    };
};
exports.save = function () {
    return function (dispatch, getState) {
    };
};
exports.addComponent = function (params) {
    return function (dispatch, getState) {
        var selectMenuId = getState()[commonReducer_1.commonKey].selectMenuId;
        dispatch({
            type: actionType_1.ADDCOMPONENT,
            parentId: selectMenuId,
            params: params,
        });
    };
};
exports.setProperty = function (key, value) {
    return function (dispatch, getState) {
        var selectMenuId = getState()[commonReducer_1.commonKey].selectMenuId;
        dispatch({
            type: actionType_1.SETPROPERTY,
            selectMenuId: selectMenuId,
            key: key,
            value: value,
        });
    };
};
exports.initData = function () {
};
//# sourceMappingURL=componentsDataAction.js.map