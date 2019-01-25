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
        let preText = (this.props.item.cn || '') + '(' +  this.props.preText + ')';
        return (
            <div key={this.props.key}>
                <span className={'perText'}>{preText + ': '}</span>
                <Input className={'baseInput'}
                       id={this.props.key}
                       value={this.props.value}
                       onChange={this.changeInput}
                       size={'small'}
                />
            </div>
        );

    }

    changeInput = (e) => {
        console.log(e.target.value);
        this.props.setValue(this.props.preText, e.target.value);
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

export default connect(mapState, mapDispatch)(LInput);