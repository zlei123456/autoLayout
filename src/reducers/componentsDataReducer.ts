/**
 * [exports description]
 * @author lei on 2019/1/2
 */

import { handleActions, Action } from 'redux-actions';
import { ADDCOMPONENT, NEWPROJECT, OPENPROJECT, SAVE, SETPROPERTY } from '../actions/actionType';

interface ITreeData {
    type: string;
    key: string;
    path: string;
    name?: string;
}

export const getTreePath = (path, tree) => {
    let treePath = path.split('.');

    let parent = tree;
    for (let i = 0; i < treePath.length; i++) {
        let p = treePath[i];
        if (parent[p]) {
            parent = parent[p];
        } else {
            parent = null;
        }
    }
    return parent;
};

const initState = {
    tree: {},
    data: {},
    property: {},
    index: 0,
    projectName: ''
};

export const componentsDataKey: string = 'componentsData';

export const componentsDataReducer = handleActions<any, any>(
    {
        [NEWPROJECT]: (state: any, data: any)
            : any => {
            let id = 'id_' + state.index;
            let nextIndex = state.index + 1;
            let treeData: ITreeData = {type: 'View', key: id, path: '' + id, name: 'root'};
            return {...state,
                projectName: data.name,
                tree: {[id]: {}},
                data: {[id]: treeData},
                property: {[id]: {}},
                index: nextIndex
            };
        },
        [OPENPROJECT]: (state: any, data: any)
            : any => {
            let st = {...state};
            return st;
        },

        // 增加组件
        [ADDCOMPONENT]: (state: any, data: any)
            : any => {
            let st = {...state};

            let id = 'id_' + st.index;
            st.index = st.index + 1;

            let parentData = st.data[data.parentId];
            let treeData: ITreeData = {type: data.params.type, key: id, path: parentData.path + '.' + id, name: data.params.name};

            let tree = {...st.tree};
            // let pPath = parentData.path.split('.');
            let parentTree = getTreePath(parentData.path, tree);
            parentTree[id] = {};

            st.data[id] = treeData;
            st.tree = tree;
            st.property[id] = {};
            return st;
        },

        // 修改属性
        [SETPROPERTY]: (state: any, data: any)
            : any => {
            let st = {...state};
            if (!st.property[data.selectMenuId]) {
                st.property[data.selectMenuId] = {};
            }
            st.property[data.selectMenuId][data.key] = data.value;
            return st;
        },

    },
    initState
);
