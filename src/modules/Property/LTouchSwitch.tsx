/**
 * [exports description]
 * @author lei on 2019/1/21
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Switch, Select } from 'antd';
import { setOther } from '../../actions/componentsDataAction';
import { componentsDataKey } from '../../reducers/componentsDataReducer';
const Option = Select.Option;

class LTouchSwitch extends React.Component<any, any> {

    render() {
        let arr = ['none', 'opacity', 'highlight'];
        return (
            <div>
                <span>
                    {'是否可点击'}
                </span>
                <Switch checkedChildren="开" unCheckedChildren="关" checked={this.state.isPhoneVisible}
                        onChange={this.switchTouch}
                />
                <div>
                    <span className={'perText'}>{'点击类型: '}</span>
                    <Select value={this.props.touchType}
                            style={{ width: 120 }}
                            onChange={this.setTouchType}
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
            </div>
        );
    }

    switchTouch = (isOpen) => {
        this.props.setOther('isTouch', isOpen);
    }

    setTouchType = (type) => {
        this.props.setOther('touchType', type);
    }
}

function mapState(state: any, ownProps: any) {
    return {
        isTouch: state[componentsDataKey].other[ownProps.selectMenuId].isTouch,
        touchType: state[componentsDataKey].other[ownProps.selectMenuId].touchType,
    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return{
        setOther: (key, value) => dispatch(setOther(key, value)),
    };
}

export default connect(mapState, mapDispatch)(LTouchSwitch);