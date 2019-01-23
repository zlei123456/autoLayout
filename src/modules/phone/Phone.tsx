/**
 * [exports description]
 * @author lei on 2019/1/11
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { phoneHeight, phoneScale, phoneWidth } from '../../constant/constant';
import './Phone.css';
import { getX, getY } from './phoneUtils';
import PLayout from './PLayout';

class Phone extends React.Component<any, any> {
    render() {
        let w = getX(phoneWidth / 2) + 2;
        let h = getY(phoneHeight / 2) + 2;
        return (
            <div className={'phoneBorder'} style={{width: w + 'px', height: h + 'px', background: '#f9f9f9'}}>
                <PLayout />

            </div>
        );
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

export default connect(mapState, mapDispatch)(Phone);