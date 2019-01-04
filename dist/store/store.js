"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var redux_promise_middleware_1 = require("redux-promise-middleware");
var commonReducer_1 = require("../reducers/commonReducer");
var componentsDataReducer_1 = require("../reducers/componentsDataReducer");
var win = window;
var middlewares = [
    redux_thunk_1.default,
    redux_promise_middleware_1.default(),
];
var storeEnhancers = redux_1.compose(redux_1.applyMiddleware.apply(void 0, middlewares), typeof win === 'object' && win.devToolsExtension && win.devToolsExtension());
exports.default = (function () {
    var _a;
    var rootReducer = redux_1.combineReducers((_a = {},
        _a[commonReducer_1.commonKey] = commonReducer_1.commonReducer,
        _a[componentsDataReducer_1.componentsDataKey] = componentsDataReducer_1.componentsDataReducer,
        _a));
    var store = redux_1.createStore(rootReducer, storeEnhancers);
    return store;
});
//# sourceMappingURL=store.js.map