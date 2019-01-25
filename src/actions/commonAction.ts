/**
 * [exports description]
 * @author lei on 2019/1/2
 */

import { BORDERVISIBLE, CIMENUVISIBLE, COLORMODALVISIBLE, SELECTMENUID } from './actionType';

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

export const borderVisible = (visible: boolean) => {
    return (dispatch, getState) => {
        dispatch({
            type: BORDERVISIBLE,
            visible: visible,
        });
    };
};

export const colorModalVisible = (visible: boolean) => {
    return (dispatch, getState) => {
        dispatch({
            type: COLORMODALVISIBLE,
            visible: visible,
        });
    };
};
