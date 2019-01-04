/**
 * [exports description]
 * @author lei on 2019/1/2
 */
import saveAs from 'file-saver';
import { ADDCOMPONENT, NEWPROJECT, OPENPROJECT, SAVE, SETPROPERTY } from './actionType';
import { commonKey } from '../reducers/commonReducer';

export const newProject = (name) => {
    return (dispatch, getState) => {
        dispatch({
            type: NEWPROJECT,
            name: name,
        });
    };
};

export const openProject = (data) => {
    return (dispatch, getState) => {
        dispatch({
            type: OPENPROJECT,
            data: data,
        });
    };
};

export const save = () => {
    return (dispatch, getState) => {
        // dispatch({
        //     type: SAVE,
        // });

        // let content = '这是直接使用HTML5进行导出的';
        // let blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
        // saveAs(blob, 'file.txt'); // saveAs(blob,filename)
    };
};

export interface IAddComponent {
    type: string;
    name?: string;
}

export const addComponent = (params: IAddComponent) => {
    return (dispatch, getState) => {
        let selectMenuId = getState()[commonKey].selectMenuId;
        dispatch({
            type: ADDCOMPONENT,
            parentId: selectMenuId,
            params: params,
        });
    };
};

export const setProperty = (key: string, value: string) => {
    return (dispatch, getState) => {
        let selectMenuId = getState()[commonKey].selectMenuId;
        dispatch({
            type: SETPROPERTY,
            selectMenuId: selectMenuId,
            key: key,
            value: value,
        });
    };
};

export const initData = () => {
    // todo

};