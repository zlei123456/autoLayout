/**
 * [exports description]
 * @author lei on 2019/1/2
 */

import { handleActions, Action } from 'redux-actions';
import { CIMENUVISIBLE, SELECTMENUID } from '../actions/actionType';
import { ICIMenuParams } from '../actions/commonAction';

const initState = {
    componentMenuInfo: {},
    selectMenuId: ''
};

export const commonKey: string = 'common';

export const commonReducer = handleActions<any, any>(
    {
        [CIMENUVISIBLE]: (state: any, data: any)
            : any => {
            return {...state,
                componentMenuInfo: data.params
            };
        },
        [SELECTMENUID]: (state: any, data: any)
            : any => {
            return {...state,
                selectMenuId: data.selectMenuId
            };
        },

    },
    initState
);
