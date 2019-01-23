/**
 * [exports description]
 * @author lei on 2018/12/5
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { InputNumber, Input, Select } from 'antd';
import { componentsDataKey } from '../../reducers/componentsDataReducer';
import { setOther, setProperty } from '../../actions/componentsDataAction';
import LBase from './LBase';

class LInputNumber extends React.Component<any, any> {
    base: any;

    render() {
        return (
            <div key={this.props.key}>
                <span className={'perText'}>{this.props.preText + ': '}</span>
                <InputNumber className={'baseInput'}
                             id={this.props.preText}
                             value={this.props.value}
                             onChange={this.changeInputNumber}
                             size={'small'}
                />
            </div>
        );

    }

    changeInputNumber = (num) => {
        console.log(num);
        this.props.setValue(this.props.preText, num);
    }
}

function mapState(state: any, ownProps: any) {
    return {

    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return {
    };
}

export default connect(mapState, mapDispatch)(LInputNumber);