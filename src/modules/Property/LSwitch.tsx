/**
 * [exports description]
 * @author lei on 2019/1/23
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'antd';

class LSwitch extends React.Component<any, any> {
    render() {
        let preText = (this.props.item.cn || '') + '(' +  this.props.preText + ')';
        return (
            <div key={this.props.key}>
                <span className={'perText'}>{preText + ': '}</span>
                <Switch checkedChildren="开" unCheckedChildren="关"
                        checked={this.props.value}
                        onChange={this.switchTouch}
                />
            </div>
        );
    }

    switchTouch = (isOpen) => {
        this.props.setValue(this.props.preText, isOpen);
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

export default connect(mapState, mapDispatch)(LSwitch);