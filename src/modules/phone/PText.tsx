/**
 * [exports description]
 * @author lei on 2019/1/19
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { getStyle } from '../../utils/utils';

class PText extends React.Component<any, any> {
    render() {
        let textStyle = getStyle(this.props.style);

        return (
            <span style={textStyle}>
                {this.props.other.text}
            </span>
        );
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

export default connect(mapState, mapDispatch)(PText);