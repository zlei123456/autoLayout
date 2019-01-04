/**
 * [exports description]
 * @author lei on 2018/12/5
 */
import * as React from 'react';
import { connect } from 'react-redux';

class Dir extends React.Component<any, any> {
    render() {
        return (
            <div>
                {this.props.key}
            </div>
        );

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

export default connect(mapState, mapDispatch)(Dir);