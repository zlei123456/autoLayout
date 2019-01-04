/**
 * [exports description]
 * @author lei on 2018/12/5
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { InputNumber, Input, Select } from 'antd';
import { componentsDataKey } from '../../reducers/componentsDataReducer';
import { setProperty } from '../../actions/componentsDataAction';

class LInputNumber extends React.Component<any, any> {

    render() {
        return (
            <div>
                <span className={'perText'}>{this.props.preText + ': '}</span>
                <InputNumber className={'baseInput'}
                             id={this.props.preText}
                             value={this.props.value}
                             onChange={this.changeInputNumber}
                />
            </div>
        );

    }

    changeInputNumber = (num) => {
        console.log(num);
        this.props.setProperty(this.props.preText, num);
    }

}

function mapState(state: any, ownProps: any) {
    return {
        value: state[componentsDataKey].property[ownProps.selectMenuId][ownProps.preText]
    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return {
        setProperty: (key, value) => dispatch(setProperty(key, value)),
    };
}

export default connect(mapState, mapDispatch)(LInputNumber);