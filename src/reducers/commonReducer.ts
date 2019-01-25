/**
 * [exports description]
 * @author lei on 2019/1/2
 */

import { handleActions, Action } from 'redux-actions';
import { BORDERVISIBLE, CIMENUVISIBLE, COLORMODALVISIBLE, SELECTMENUID, SETCODE } from '../actions/actionType';
import { ICIMenuParams } from '../actions/commonAction';

const initState = {
    componentMenuInfo: {},
    selectMenuId: '',
    borderVisible: false,
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
        [SETCODE]: (state: any, data: any)
            : any => {
            return {...state,
                code: data.code
            };
        },
        [BORDERVISIBLE]: (state: any, data: any)
            : any => {
            return {...state,
                borderVisible: data.visible
            };
        },
        [COLORMODALVISIBLE]: (state: any, data: any)
            : any => {
            return {...state,
                colorModalVisible: data.visible
            };
        },
    },
    initState
);
