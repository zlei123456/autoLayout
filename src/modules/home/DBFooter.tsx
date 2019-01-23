/**
 * [exports description]
 * @author lei on 2019/1/11
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { CSSProperties } from 'react';

class DBFooter extends React.Component<any, any> {
    render() {
        let divStyle: CSSProperties = {
            height: '100px', padding: '20px 0', margin: '0 0 30px 0'
        };
        let btnStyle1: CSSProperties = {
            fontSize: '30px', width: '50%', textAlign: 'center', float: 'left',
            borderBottom: '2px solid red'
        };
        let btnStyle2: CSSProperties = {
            fontSize: '30px', width: '50%', textAlign: 'center', float: 'left',
            borderBottom: '2px solid red'
        };

        return (
            <div style={divStyle}>
                <div id="LoginBtn" style={btnStyle1}>
                    <p>登录</p>
                </div>
                <div id="RegisterBtn" style={btnStyle2}>
                    <p>注册</p>
                </div>
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

export default connect(mapState, mapDispatch)(DBFooter);