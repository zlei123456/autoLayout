/**
 * [exports description]
 * @author lei on 2019/1/25
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { commonKey } from '../reducers/commonReducer';
import { colorModalVisible } from '../actions/commonAction';

class ColorModal extends React.Component<any, any> {
    render() {
        return (
            <Modal
                title="Basic Modal"
                visible={this.props.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        );
    }

    handleOk = () => {
        // todo

        this.props.colorModalVisible(false);
    }

    handleCancel = () => {
        // todo

        this.props.colorModalVisible(false);
    }
}

function mapState(state: any, ownProps: any) {
    return {
        visible: state[commonKey].colorModalVisible
    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return {
        colorModalVisible: (visible) => dispatch(colorModalVisible(visible)),
    };
}

export default connect(mapState, mapDispatch)(ColorModal);