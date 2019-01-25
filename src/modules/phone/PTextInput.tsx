/**
 * [exports description]
 * @author lei on 2019/1/23
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { getStyle } from '../../utils/utils';

class PTextInput extends React.Component<any, any> {
    render() {
        let inputStyle = getStyle(this.props.style);
        // inputStyle.borderWidth = '0px';

        return (
            <div>
                <input style={inputStyle} type={'text'}/>

            </div>
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

export default connect(mapState, mapDispatch)(PTextInput);