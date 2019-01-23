/**
 * [exports description]
 * @author lei on 2019/1/18
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { CSSProperties } from 'react';
import { getX, getY } from './phoneUtils';
import { getStyle } from '../../utils/utils';
import { commonKey } from '../../reducers/commonReducer';

interface IPView {
    cData: any;
    style: any;
    other: any;
    isBorderVisible: boolean;
}
class PView extends React.Component<IPView, any> {
    render() {
        // let divStyle: CSSProperties = {
        //     width: '100px',
        //     height: '100px',
        //     background: '#ff0'
        // };
        let divStyle = getStyle(this.props.style);
        if (this.props.isBorderVisible) {
            divStyle.borderWidth = '1px';
            divStyle.borderColor = '#0dafc1';
            divStyle.borderStyle = 'dotted';
            divStyle.boxSizing = 'content-box';
        }

        return (
            <div style={divStyle}>
                {this.props.children}
            </div>
        );
    }

}

function mapState(state: any, ownProps: any) {
    return {
        isBorderVisible: state[commonKey].borderVisible
    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return{

    };
}

export default connect(mapState, mapDispatch)(PView);