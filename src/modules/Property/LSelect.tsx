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
const Option = Select.Option;

class LSelect extends React.Component<any, any> {

    render() {
        let arr = this.props.option.split(',');
        arr.push('空');
        return (
            <div className={'pItem'} key={this.props.key}>
                <span className={'perText'}>{this.props.preText + ': '}</span>
                <Select value={this.props.value}
                        style={{ width: 120 }}
                        onChange={this.handleChange}
                        size={'small'}
                >
                    {
                        arr.map(v => {
                            return (
                                <Option value={v}>{v}</Option>
                            );
                        })
                    }
                </Select>
            </div>
        );

    }

    handleChange = (value) => {
        // console.log(value);
        if (value == '' || value == '空') {
            value = null;
        }
        // this.props.setProperty(this.props.preText, value);
        this.props.setValue(this.props.preText, value);
    }

}

function mapState(state: any, ownProps: any) {
    return {
        // value: state[componentsDataKey].property[ownProps.selectMenuId][ownProps.preText]
    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return {
        // setProperty: (key, value) => dispatch(setProperty(key, value)),
    };
}

export default connect(mapState, mapDispatch)(LSelect);