/**
 * [exports description]
 * @author lei on 2019/1/2
 */

import { CIMENUVISIBLE, SELECTMENUID } from './actionType';

export interface ICIMenuParams {
    visible: boolean;
    x?: number;
    y?: number;
    menuId?: string;
}

export const componentMenuVisible = (params: ICIMenuParams) => {
    return (dispatch, getState) => {
        dispatch({
            type: CIMENUVISIBLE,
            params: params,
        });
    };
};

export const selectMenu = (menuId: string) => {
    return (dispatch, getState) => {
        dispatch({
            type: SELECTMENUID,
            selectMenuId: menuId,
        });
    };
};