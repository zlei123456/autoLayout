/**
 * [exports description]
 * @author lei on 2019/1/17
 */

import * as React from 'react';
import { connect } from 'react-redux';

interface IPTitle {
    title: any;
    onChange: any;
}

class PTitle extends React.Component<IPTitle, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        return (
            <div className={'titleDiv'} onClick={this.onClick}>
                {this.props.title}
            </div>
        );
    }

    onClick = () => {
        this.setState({isOpen: !this.state.isOpen});
        this.props.onChange(this.state.isOpen);
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

export default connect(mapState, mapDispatch)(PTitle);