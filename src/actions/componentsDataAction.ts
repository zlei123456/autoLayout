/**
 * [exports description]
 * @author lei on 2019/1/2
 */
import saveAs from 'file-saver';
import { ADDCOMPONENT, NEWPROJECT, OPENPROJECT, SAVE, SETCODE, SETOTHER, SETPROPERTY } from './actionType';
import { commonKey } from '../reducers/commonReducer';
import { componentsDataKey } from '../reducers/componentsDataReducer';
import { componetCode, imgCode, otherCode, textCode, textInputCode, touchCode, touchTypes } from '../constant/constant';
import { stringFormat } from '../utils/utils';

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
            data: JSON.parse(data),
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

// 设置其他的config
export const setOther = (key: string, value: string) => {
    return (dispatch, getState) => {
        let selectMenuId = getState()[commonKey].selectMenuId;
        dispatch({
            type: SETOTHER,
            selectMenuId: selectMenuId,
            key: key,
            value: value,
        });
    };
};

let getOtherCode = (other: any, preText: string) => {
    let p = '';
    Object.keys(other).map(oKey => {
        let v = other[oKey];
        if (typeof v == 'string') {
            p += stringFormat(otherCode, [oKey, '\'' + v + '\'', preText]);
        } else {
            p += stringFormat(otherCode, [oKey, v, preText]);
        }

    });
    return p;
};

let getTouchProps = (other) => {
    let touchType = touchTypes[other.touchType] || 'TouchableWithoutFeedback';
    let props: any = {};

    let hitSlop: any = {};
    if (other.touchHitSlopTop) {
        hitSlop.top = other.touchHitSlopTop;
    }
    if (other.touchHitSlopLeft) {
        hitSlop.left = other.touchHitSlopLeft;
    }
    if (other.touchHitSlopBottom) {
        hitSlop.bottom = other.touchHitSlopBottom;
    }
    if (other.touchHitSlopRight) {
        hitSlop.right = other.touchHitSlopRight;
    }

    let propsStr = '';

    if (Object.keys(hitSlop).length > 0) {
        let hitSlopStr = JSON.stringify(hitSlop);
        hitSlopStr = hitSlopStr.replace(/\"(\w+)\":/g, '$1:');
        // props.hitSlop = hitSlopStr;
        propsStr += 'hitSlop={' + hitSlopStr + '} ';
    }

    if (other.touchOnPress) {
        propsStr += 'onPress={this.' + other.touchOnPress + '} ';
        // props.onPress = other.touchOnPress;
    }
    if (other.touchOnLongPress) {
        propsStr += 'onPress={this.' + other.touchOnPress + '} ';
        // props.onLongPress = other.touchOnLongPress;
    }
    return {type: touchType, props: propsStr};

};

let getCode = (tree, cData, space) => {
    let code = '';
    Object.keys(tree).map(k => {
        let child = tree[k];
        let cType = cData.data[k].type;
        let cProperty: any = {};
        Object.keys(cData.property[k]).map((pKey) => {
            let v = cData.property[k][pKey];
            if (v != null) {
                cProperty[pKey] = v;
            }
        });

        let childCode = getCode(child, cData, space + '\t');

        if (cType == 'TextInput') {
            if (!cProperty.paddingTop) {
                cProperty.paddingVertical = 0;
            }

            if (!cProperty.paddingLeft) {
                cProperty.paddingLeft = 0;
            }
        }

        let styleStr = JSON.stringify(cProperty);
        styleStr = styleStr.replace(/\"(\w+)\":/g, '$1:');

        let cCode = '';
        if (cType == 'Image') {
            if (childCode != '') {
                cCode = stringFormat(imgCode, ['ImageBackground', styleStr, childCode, space, cData.other[k].source]);
            } else {
                cCode = stringFormat(imgCode, [cType, styleStr, childCode, space, cData.other[k].source]);
            }
        } else if (cType == 'Text') {
            cCode = stringFormat(textCode, [cType, styleStr, cData.other[k].text, space, '']);
        } else if (cType == 'TextInput') {

            let otherData = cData.other[k];
            otherData.underlineColorAndroid = 'transparent';

            let p = getOtherCode(cData.other[k], space + '\t');
            cCode = stringFormat(textInputCode,
                                 [cType, styleStr, p, space]);

        } else {
            cCode = stringFormat(componetCode, [cType, styleStr, childCode, space]);
        }

        if (cData.other[k].isTouch) {
            // let tType = 'TouchableWithoutFeedback';
            let touchP = getTouchProps(cData.other[k]);
            let tCode = stringFormat(touchCode, [touchP.type, touchP.props, cCode, space]);
            code += tCode;
        } else {
            code += cCode;
        }

    });

    return code;
};

export const generateCode = () => {
    return (dispatch, getState) => {
        let cData = getState()[componentsDataKey];
        let code = getCode(cData.tree, cData, '');

        console.log(code);

        dispatch({
            type: SETCODE,
            code: code,
        });
    };
};

export const initData = () => {
    // todo

};