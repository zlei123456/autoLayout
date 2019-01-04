/**
 * [exports description]
 * @author lei on 2018/11/30
 */

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { commonKey, commonReducer } from '../reducers/commonReducer';
import { componentsDataKey, componentsDataReducer } from '../reducers/componentsDataReducer';

const win: any = window;
const middlewares = [
    thunk,
    promiseMiddleware(),
];

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    typeof win === 'object' && win.devToolsExtension && win.devToolsExtension()
);

export default () => {
    // Create root reducer from context.
    const rootReducer = combineReducers({
        // todo (reducer)
        [commonKey]: commonReducer,
        [componentsDataKey]: componentsDataReducer,
    });

    // Create store with root reducer.
    const store = createStore(rootReducer,
                              storeEnhancers
    );

    return store;
};