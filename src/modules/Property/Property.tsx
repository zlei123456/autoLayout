/**
 * [exports description]
 * @author lei on 2018/11/30
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'antd';
import LInputNumber from './LInputNumber';
import LInput from './LInput';
import LSelect from './LSelect';
import { commonKey } from '../../reducers/commonReducer';
import { componentsDataKey } from '../../reducers/componentsDataReducer';
import componentProperty from '../../data/componentProperty';
import './Property.css';
import imgMgr from '../../utils/imgMgr';
import LBase from './LBase';

const Panel = Collapse.Panel;

class Property extends React.Component<any, any> {

    render() {

        if (this.props.selectMenuId != '' && this.props.treeData[this.props.selectMenuId]) {
            let d = this.props.treeData[this.props.selectMenuId];
            if (d.type && componentProperty.components[d.type]) {
                let t = componentProperty.components[d.type];
                let otherD  = t.other;

                return (
                    <div className={'propertyDiv'}>
                        <div className={'titleDiv'}>
                            {'样式'}
                        </div>
                        <div className={'propertyConDiv'}>
                            {
                                this.getItem(t.style)
                            }
                        </div>
                        {
                            Object.keys(otherD).length > 0 ? (
                                <div>
                                    <div className={'titleDiv'}>
                                        {'其他'}
                                    </div>

                                    <div className={'propertyConDiv'}>
                                        {
                                            this.getOtherItem(t.other)
                                        }
                                    </div>
                                </div>
                            ) : null
                        }

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
        let child = data[k];
        let v = componentProperty.info[k];
        return (
            <div style={{marginTop: '5px'}}>
                {
                    this.getComponent(k, v, child)
                }
            </div>
        );
    })

    getCollapse = (header, children) => {
        // return (
        //     <div>
        //         <PTitle title={header} onChange={}/>
        //         {
        //             children.map(k => {
        //                 let v = componentProperty.info[k];
        //                 return this.getComponent(k, v);
        //             })
        //         }
        //     </div>
        // );

        return (
            <Collapse bordered={true} defaultActiveKey={[]}>
                <Panel header={header} key="1" style={{padding: '0, 0, 0, 0', background: '#e4e4e4'}}>
                    {
                        children.map(k => {
                            let v = componentProperty.info[k];
                            return this.getComponent(k, v);
                        })
                    }
                </Panel>
            </Collapse>
        );
    }

    getComponent = (k, v, children?: any) => {
        if (children && children.length > 0) {
            return this.getCollapse(this.getComponent1(k, v), children);
        } else {
            return this.getComponent1(k, v);
        }
    }

    getComponent1 = (k, v, type?: string) => {
        return (<LBase item={v}
                       selectMenuId={this.props.selectMenuId}
                       itemKey={k}
                       key={k}
                       lType={type}/>);

    }

    // other 的函数
    getOtherItem = (data) => Object.keys(data).map(k => {
        let v = componentProperty.other[k];
        return (
            <div style={{marginTop: '5px'}}>
                {
                    this.getOtherComponent(k, v, 'other')
                }
            </div>
        );
    })
    getOtherComponent = (k, v, type) => {
        if (v.type == 'selectImg') {
            let imgs = Object.keys(imgMgr.getImgs());

            let d = {
                type: 'select',
                limit: imgs.join(','),
            };
            return this.getComponent1(k, d, type);
        } else {
            return this.getComponent1(k, v, type);
        }

    }

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