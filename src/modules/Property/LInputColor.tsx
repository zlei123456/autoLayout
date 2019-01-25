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
import { InputNumber, Input, Select, Icon } from 'antd';
import { componentsDataKey } from '../../reducers/componentsDataReducer';
import { setProperty } from '../../actions/componentsDataAction';
import { CSSProperties } from 'react';

const Option = Select.Option;

class LInputColor extends React.Component<any, any> {

    render() {
        let preText = (this.props.item.cn || '') + '(' +  this.props.preText + ')';
        return (
            <div key={this.props.key}>
                <span className={'perText'}>{preText + ': '}</span>
                <Select value={this.props.value}
                        style={{ width: 150 }}
                        onChange={this.handleChange}
                        size={'small'}
                >
                    {
                        Object.keys(this.props.colors).map(k => {
                            let v: any = this.props.colors[k];
                            let cStyle: CSSProperties = {};
                            cStyle.backgroundColor = v.color;
                            cStyle.width = '30px';
                            cStyle.height = '6px';
                            cStyle.float = 'right';
                            cStyle.marginTop = '8px';
                            cStyle.borderStyle = 'solid';
                            cStyle.borderWidth = '1px';
                            cStyle.borderColor = '#494949';

                            return (
                                <Option key={k} value={k}>
                                    <div style={{flexDirection: 'row', justifyContent: 'center'}}>
                                        <span style={{float: 'left'}}>
                                            {k}
                                        </span>
                                        <div style={cStyle}>

                                        </div>
                                    </div>
                                  </Option>
                            );
                        })
                    }
                </Select>

                {/*<Select*/}
                    {/*defaultValue="lucy"*/}
                {/*style={{ width: 120 }}*/}
                {/*dropdownRender={menu => (*/}
                {/*<div>*/}
                    {/*{menu}*/}
                    {/*<div style={{ padding: '8px', cursor: 'pointer' }}>*/}
                        {/*<Icon type="plus" /> Add item*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*)}*/}
                {/*>*/}
                {/*<Option value="jack">Jack</Option>*/}
                {/*<Option value="lucy">Lucy</Option>*/}
            {/*</Select>*/}
            </div>
        );

    }

    handleChange = (value) => {
        if (value == '' || value == '空') {
            value = null;
        }
        if (this.props.colors[value]) {
            this.props.setValue(this.props.preText, this.props.colors[value].color);
        }
    }

}

function mapState(state: any, ownProps: any) {
    return {
        colors: state[componentsDataKey].colors
    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return {
    };
}

export default connect(mapState, mapDispatch)(LInputColor);