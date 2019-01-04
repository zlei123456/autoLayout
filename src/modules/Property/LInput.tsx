/**
 * [exports description]
 * @author lei on 2018/12/6
 */

/**
 * [exports description]
 * @author lei on 2018/12/5
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { InputNumber, Input, Select } from 'antd';
import { componentsDataKey } from '../../reducers/componentsDataReducer';
import { setProperty } from '../../actions/componentsDataAction';

class LInput extends React.Component<any, any> {

    render() {
        return (
            <div>
                <span className={'perText'}>{this.props.key + ': '}</span>
                <Input className={'baseInput'}
                       id={this.props.key}
                       value={this.props.value}
                       onChange={this.changeInputNumber}
                />
            </div>
        );

    }

    changeInputNumber = (value) => {
        console.log(value);
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

export default connect(mapState, mapDispatch)(LInput);