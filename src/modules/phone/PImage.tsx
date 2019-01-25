/**
 * [exports description]
 * @author lei on 2019/1/18
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { getImgChildStyle, getStyle } from '../../utils/utils';
import imgMgr from '../../utils/imgMgr';
import { CSSProperties } from 'react';

class PImage extends React.Component<any, any> {
    render() {
        let style = this.props.style;
        let divStyle = getStyle(style);
        let src: any = {};
        if (!this.props.other || this.props.other == '') {
            src = imgMgr.getImg('defaultIMG.png');
        } else {
            src = imgMgr.getImg(this.props.other.source);
        }

        let wh = this.getwh(style);
        divStyle.position = 'relative';
        divStyle.padding = 0;
        divStyle.paddingTop = 0;
        divStyle.paddingBottom = 0;
        divStyle.paddingLeft = 0;
        divStyle.paddingRight = 0;

        let imgStyle: CSSProperties = {};
        if (this.props.other.resizeMode == 'cover') {
            // 宽度和高度都大于容器尺寸
            imgStyle.minWidth = wh.w;
            imgStyle.minHeight = wh.h;
        } else if (this.props.other.resizeMode == 'contain') {
            // 宽度和高度都小于容器尺寸
            imgStyle.maxWidth = wh.w;
            imgStyle.maxHeight = wh.h;
        } else if (this.props.other.resizeMode == 'stretch') {
            // 宽度和高度平铺容器尺寸
            imgStyle.width = wh.w;
            imgStyle.height = wh.h;
        } else {
            imgStyle.minWidth = wh.w;
            imgStyle.minHeight = wh.h;
        }

        let divCStyle: CSSProperties = getImgChildStyle(style);
        divCStyle.width = wh.w;
        divCStyle.height = wh.h;
        divCStyle.position = 'absolute';

        // width={wh.w} height={wh.h}
        return (
            <div style={divStyle}>
                <img src={src.url} style={imgStyle}>
                    {/*{this.props.children}*/}
                </img>
                {
                    React.Children.count(this.props.children) > 0 ? (
                        <div style={divCStyle}>
                            {this.props.children}
                        </div>
                    ) : null
                }

            </div>
        );
    }

    getwh = (style) => {
        // 计算图片高宽
        let dw = style.width;
        let dh = style.height;
        if (style.padding) {
            dw = dw - style.padding;
            dh = dh - style.padding;
        } else {
            if (style.paddingHorizontal) {
                dw = dw - style.paddingHorizontal;
            }
            if (style.paddingVertical) {
                dh = dh - style.paddingVertical;
            }

            dw = dw - (style.paddingLeft || 0) - (style.paddingRight || 0);
            dh = dh - (style.paddingTop || 0) - (style.paddingBottom || 0);
        }

        return {w: dw, h: dh};
    }
}

function mapState(state: any, ownProps: any) {
    return {

    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return{

    };
}

export default connect(mapState, mapDispatch)(PImage);