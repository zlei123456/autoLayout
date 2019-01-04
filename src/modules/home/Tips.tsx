/**
 * [exports description]
 * @author lei on 2019/1/2
 */

import * as React from 'react';
import { connect } from 'react-redux';
import ComponentItemMenu from '../../components/ComponentItemMenu';
import { commonKey } from '../../reducers/commonReducer';

class Tips extends React.Component<any, any> {
    render() {
        return (
            <div>
                {
                    this.props.componentMenuInfo.visible ? (
                        <ComponentItemMenu componentMenuInfo={this.props.componentMenuInfo}/>
                    ) : null
                }

            </div>
        );
    }
}

function mapState(state: any, ownProps: any) {
    return {
        componentMenuInfo: state[commonKey].componentMenuInfo
    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return{

    };
}

export default connect(mapState, mapDispatch)(Tips);