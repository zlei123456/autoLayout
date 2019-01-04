/**
 * [exports description]
 * @author lei on 2018/11/30
 */

import * as React from 'react';
import { connect } from 'react-redux';
import LInputNumber from './LInputNumber';
import LInput from './LInput';
import LSelect from './LSelect';
import { commonKey } from '../../reducers/commonReducer';
import { componentsDataKey } from '../../reducers/componentsDataReducer';
import componentProperty from '../../data/componentProperty';
import './Property.css';

class Property extends React.Component<any, any> {

    render() {
        let style = {
            type: 'dir',
            Children: {
                flex: {
                    type: 'input',
                    limit: 'number',
                },
                flexDirection: {
                    type: 'select',
                    limit: 'row,column',
                },
                marginTop: {
                    type: 'input',
                    limit: 'number',
                }
            }
        };
        let c = style.Children;

        if (this.props.selectMenuId != '' && this.props.treeData[this.props.selectMenuId]) {
            let d = this.props.treeData[this.props.selectMenuId];
            if (d.type && componentProperty[d.type]) {
                let t = componentProperty[d.type];

                return (
                    <div id={'propertyDiv'}>
                        <div className={'titleDiv'}>
                            <p>
                                {'style'}
                            </p>
                        </div>
                        <div className={'propertyConDiv'}>
                            {
                                this.getItem(t.style)
                            }
                        </div>

                    </div>
                );

            }
        }

        return (
            <div>

            </div>
        );

    }

    getItem = (data) => Object.keys(data).map(k => {
        let v = data[k];
        if (v.type == 'input' && v.limit == 'number') {
            return (<LInputNumber preText={k} item={v} selectMenuId={this.props.selectMenuId}/>);
        } else if (v.type == 'input') {
            return (<LInput preText={k} item={v} selectMenuId={this.props.selectMenuId}/>);
        } else if (v.type == 'select') {
            return (<LSelect preText={k} option={v.limit} item={v} selectMenuId={this.props.selectMenuId}/>);
        }
    })

}

function mapState(state: any, ownProps: any) {
    return {
        selectMenuId: state[commonKey].selectMenuId,
        treeData: state[componentsDataKey].data,
    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return {

    };
}

export default connect(mapState, mapDispatch)(Property);