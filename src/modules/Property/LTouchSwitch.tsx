/**
 * [exports description]
 * @author lei on 2019/1/21
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Switch, Select, InputNumber, Input } from 'antd';
import { setOther } from '../../actions/componentsDataAction';
import { componentsDataKey } from '../../reducers/componentsDataReducer';
import { touchTypes } from '../../constant/constant';
const Option = Select.Option;

class LTouchSwitch extends React.Component<any, any> {

    render() {
        let arr = ['none', 'opacity', 'highlight'];
        let hitSlopArr = [{id: 'top', desc: '上(top)', sKey: 'touchHitSlopTop'}, {id: 'left', desc: '左(left)', sKey: 'touchHitSlopLeft'},
            {id: 'bottom', desc: '下(bottom)', sKey: 'touchHitSlopBottom'}, {id: 'right', desc: '右(right)', sKey: 'touchHitSlopRight'},
        ];
        return (
            <div>
                <span>
                    {'是否可点击'}
                </span>
                <Switch checkedChildren="开" unCheckedChildren="关" checked={this.props.isTouch}
                        onChange={this.switchTouch}
                />

                {
                    this.props.isTouch ? (
                        <div>
                            <div>
                                <span className={'perText'}>{'点击类型: '}</span>
                                <Select value={this.props.touchType}
                                        style={{ width: 120 }}
                                        onChange={this.setTouchType}
                                        size={'small'}
                                >
                                    {
                                        Object.keys(touchTypes).map(v => {
                                            return (
                                                <Option value={v}>{v}</Option>
                                            );
                                        })
                                    }
                                </Select>
                            </div>

                            <div>
                                <span className={'perText'}>{'点击外延范围: '}</span>
                                <div>
                                    {
                                        hitSlopArr.map(v => {
                                            return (
                                                <InputNumber style={{margin: '2px 5px 2px 5px', width: '80px'}}
                                                             id={v.id}
                                                             value={this.props[v.sKey]}
                                                             onChange={(num) => this.changeInputNumber(v.sKey, num)}
                                                             size={'small'}
                                                             placeholder={v.desc}
                                                />
                                            );
                                        })
                                    }
                                </div>

                            </div>

                            <div>
                                <span className={'perText'}>{'点击函数: '}</span>
                                <Input className={'baseInput'}
                                       id={'onPress'}
                                       value={this.props.touchOnPress}
                                       onChange={(e) => this.changeInput('touchOnPress', e)}
                                       size={'small'}
                                />
                            </div>

                            <div>
                                <span className={'perText'}>{'长按函数: '}</span>
                                <Input className={'baseInput'}
                                       id={'onLongPress'}
                                       value={this.props.touchOnLongPress}
                                       onChange={(e) => this.changeInput('touchOnLongPress', e)}
                                       size={'small'}
                                />
                            </div>
                        </div>
                    ) : null
                }

            </div>
        );
    }

    switchTouch = (isOpen) => {
        this.props.setOther('isTouch', isOpen);
    }

    setTouchType = (type) => {
        this.props.setOther('touchType', type);
    }
    changeInputNumber = (sKey, num) => {
        // todo
        // console.log(num);
        this.props.setValue(sKey, num);
    }

    changeInput = (sKey, e) => {
        this.props.setValue(sKey, e.target.value);
    }

}

function mapState(state: any, ownProps: any) {
    return {
        isTouch: state[componentsDataKey].other[ownProps.selectMenuId].isTouch,
        touchType: state[componentsDataKey].other[ownProps.selectMenuId].touchType,
        touchHitSlopTop: state[componentsDataKey].other[ownProps.selectMenuId].touchHitSlopTop,
        touchHitSlopLeft: state[componentsDataKey].other[ownProps.selectMenuId].touchHitSlopLeft,
        touchHitSlopBottom: state[componentsDataKey].other[ownProps.selectMenuId].touchHitSlopBottom,
        touchHitSlopRight: state[componentsDataKey].other[ownProps.selectMenuId].touchHitSlopRight,
        touchOnPress: state[componentsDataKey].other[ownProps.selectMenuId].touchOnPress,
        touchOnLongPress: state[componentsDataKey].other[ownProps.selectMenuId].touchOnLongPress,

    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return{
        setOther: (key, value) => dispatch(setOther(key, value)),
    };
}

export default connect(mapState, mapDispatch)(LTouchSwitch);