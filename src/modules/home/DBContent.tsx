/**
 * [exports description]
 * @author lei on 2019/1/18
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Switch } from 'antd';
import Btns from './Btns';
import Phone from '../phone/Phone';
import { borderVisible } from '../../actions/commonAction';
import { commonKey } from '../../reducers/commonReducer';

class DBContent extends React.Component<any, any> {

    state: any = {
        isPhoneVisible: false,
    };

    render() {
        return (
            <div>
                <span>
                    {'开启显示'}
                </span>
                <Switch checkedChildren="开" unCheckedChildren="关" checked={this.state.isPhoneVisible}
                        onChange={this.phoneVisible}
                />
                <span>
                    {'边框显示'}
                </span>
                <Switch checkedChildren="开" unCheckedChildren="关" checked={this.props.isBorderVisible}
                        onChange={this.borderVisible}
                />

                {
                    this.state.isPhoneVisible ? (
                        <Phone />
                    ) : (
                        <Btns />
                    )
                }

            </div>
        );
    }

    phoneVisible = (visible) => {
        this.setState({isPhoneVisible: !this.state.isPhoneVisible});
    }
    borderVisible = (visible) => {
        this.props.borderVisible(visible);
    }
}

function mapState(state: any, ownProps: any) {
    return {
        isBorderVisible: state[commonKey].borderVisible
    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return{
        borderVisible: (visible) => dispatch(borderVisible(visible)),
    };
}

export default connect(mapState, mapDispatch)(DBContent);