/**
 * [exports description]
 * @author lei on 2019/1/18
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { getStyle } from '../../utils/utils';
import imgMgr from '../../utils/imgMgr';

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

        return (
            <div style={divStyle}>
                <img src={src.url} width={wh.w} height={wh.h}>
                    {/*{this.props.children}*/}
                </img>
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