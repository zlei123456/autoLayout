/**
 * [exports description]
 * @author lei on 2019/1/4
 */

import * as React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { componentsDataKey } from '../../reducers/componentsDataReducer';

class Btns extends React.Component<any, any> {
    render() {
        return (
            <div>
                <pre className={'showText'}>
                    {JSON.stringify(this.props.componentsData, null, 2)}
                </pre>
                {/*<input id="storeData" type="text" value="234243sdfasfas" disabled={true}/>*/}
                <Button type="primary" onClick={this.copy}>Primary</Button>
            </div>
        );
    }

    copy = () => {
        let input = document.createElement('input');
        input.value = JSON.stringify(this.props.componentsData);
        document.body.appendChild(input);
        input.select();
        input.setSelectionRange(0, input.value.length), document.execCommand('Copy');
        document.body.removeChild(input);
        alert('复制成功');
    }
}

function mapState(state: any, ownProps: any) {
    return {
        componentsData: state[componentsDataKey]
    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return{

    };
}

export default connect(mapState, mapDispatch)(Btns);