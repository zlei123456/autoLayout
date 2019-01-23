/**
 * [exports description]
 * @author lei on 2019/1/11
 */
import { CSSProperties } from 'react';
import { getX, getY } from '../modules/phone/phoneUtils';

export const stringFormat = (str: string, args: Array<string>) => {
    for (let i = 0; i < args.length; i++) {
        let re = new RegExp('\\{' + (i) + '\\}', 'gm');
        str = str.replace(re, args[i]);
    }
    return str;
};

export const getStyle = (style): CSSProperties => {
    let divStyle: CSSProperties = {};
    // let style = ;
    if (style.width) {
        divStyle.width = getX(style.width) + 'px';
    }

    if (style.height) {
        divStyle.height = getY(style.height) + 'px';
    }

    if (style.flexDirection == 'row') {
        divStyle.display = 'flex';
        divStyle.flexDirection = 'row';
    } else {
        divStyle.display = 'flex';
        divStyle.flexDirection = 'column';
    }
    if (style.justifyContent || style.justifyContent != 'flex-start') {
        divStyle.justifyContent = style.justifyContent;
    }

    if (style.alignItems || style.alignItems != 'flex-start') {
        divStyle.alignItems = style.alignItems;
    }

    if (style.margin) {
        divStyle.margin = getX(Number(style.margin)) + 'px';
    }
    if (style.marginHorizontal) {
        divStyle.marginLeft = getX(Number(style.marginHorizontal)) + 'px';
        divStyle.marginRight = getX(Number(style.marginHorizontal)) + 'px';
    }
    if (style.marginVertical) {
        divStyle.marginTop = getX(Number(style.marginVertical)) + 'px';
        divStyle.marginBottom = getX(Number(style.marginVertical)) + 'px';
    }
    if (style.padding) {
        divStyle.padding = getX(Number(style.padding)) + 'px';
    }
    if (style.paddingHorizontal) {
        divStyle['padding-left'] = getX(Number(style.paddingHorizontal)) + 'px';
        divStyle['padding-right'] = getX(Number(style.paddingHorizontal)) + 'px';
    }
    if (style.paddingVertical) {
        divStyle['padding-top'] = getX(Number(style.paddingVertical)) + 'px';
        divStyle['padding-bottom'] = getX(Number(style.paddingVertical)) + 'px';
    }

    // let replaceStylePx = {'marginTop': 'margin-top', 'marginBottom': 'margin-bottom',
    //     'marginLeft': 'margin-left', 'marginRight': 'margin-right',
    //     'paddingTop': 'padding-top', 'paddingBottom': 'padding-bottom',
    //     'paddingLeft': 'padding-left', 'paddingRight': 'padding-right',
    //     'minWidth': 'min-width', 'maxWidth': 'max-width',
    //     'minHeight': 'min-height', 'maxHeight': 'max-height',
    //     'top': 'top', 'left': 'left', 'bottom': 'bottom', 'right': 'right'
    // };
    let replaceStylePxArr = ['marginTop', 'marginBottom', 'marginLeft', 'marginRight',
        'paddingTop', 'paddingRight', 'paddingLeft', 'paddingRight',
        'minWidth', 'maxWidth', 'minHeight', 'maxHeight', 'top', 'left', 'bottom', 'right',
        'fontSize'
    ];
    replaceStylePxArr.map( v => {
        // let v = replaceStylePx[k];
        if (style[v]) {
            divStyle[v] = getX(Number(style[v])) + 'px';
        }
    });

    let replaceStyle = {'position': 'position', 'color': 'color'
    };
    Object.keys(replaceStyle).map( k => {
        let v = replaceStyle[k];
        if (style[k]) {
            divStyle[v] = style[k];
        }
    });

    // divStyle.fontSize = '10px';
    // divStyle.background = '#f00';

    return divStyle;
};
