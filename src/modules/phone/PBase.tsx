/**
 * [exports description]
 * @author lei on 2019/1/18
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { componentsDataKey } from '../../reducers/componentsDataReducer';
import PView from './PView';
import PImage from './PImage';
import PText from './PText';
import { ReactElement } from 'react';
import PTextInput from './PTextInput';

class PBase extends React.Component<any, any> {
    render() {
        if (this.props.cData.type == 'View') {
            return (<PView cData={this.props.cData}
                           style={this.props.style}
                           other={this.props.other}
            >
                {this.props.children}
            </PView>);
        } else if (this.props.cData.type == 'Image') {
            return (<PImage cData={this.props.cData}
                           style={this.props.style}
                           other={this.props.other}
            >
                {this.props.children}
            </PImage>);
        } else if (this.props.cData.type == 'Text') {
            if (Object.keys(this.props.tree).length > 0) {
                let cWithProps = React.Children.map(this.props.children, (child: ReactElement<any>) =>
                    React.cloneElement(child, {
                    parent: 'Text'
                }));
                return (
                    <div>
                        <PText cData={this.props.cData}
                               style={this.props.style}
                               other={this.props.other}
                        />
                        {cWithProps}
                    </div>
                );
            } else if (this.props.parent == 'Text') {
                return (
                    <PText cData={this.props.cData}
                            style={this.props.style}
                            other={this.props.other}
                    >
                    </PText>);

            } else {
                return (
                    <div>
                        <PText cData={this.props.cData}
                               style={this.props.style}
                               other={this.props.other}
                        >
                        </PText>
                    </div>
                );
            }

        } else if (this.props.cData.type == 'TextInput') {
            return (<PTextInput cData={this.props.cData}
                                style={this.props.style}
                                other={this.props.other}
            >
            </PTextInput>);
        } else {
            return (
                <div>

                </div>
            );
        }
    }
}

function mapState(state: any, ownProps: any) {
    return {
        cData: state[componentsDataKey].data[ownProps.id],
        style: state[componentsDataKey].property[ownProps.id],
        other: state[componentsDataKey].other[ownProps.id],
    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return {

    };
}

export default connect(mapState, mapDispatch)(PBase);