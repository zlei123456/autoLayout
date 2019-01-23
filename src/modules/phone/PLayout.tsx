/**
 * [exports description]
 * @author lei on 2019/1/18
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { componentsDataKey } from '../../reducers/componentsDataReducer';
import PBase from './PBase';
import { getX, getY } from './phoneUtils';
import { phoneHeight, phoneWidth } from '../../constant/constant';

class PLayout extends React.Component<any, any> {
    render() {
        let w = getX(phoneWidth / 2);
        let h = getY(phoneHeight / 2);
        return (
            <div style={{width: w, height: h}}>
                {
                    this.getLayout(this.props.dataTree)
                }
            </div>
        );
    }

    getLayout = (dataTree) => {
        return (
            Object.keys(dataTree).map(id => {
                let children = dataTree[id];

                return (<PBase id={id} key={id} tree={children}>
                    {
                        this.getLayout(children)
                    }
                </PBase>);
            })
        );

    }
}

function mapState(state: any, ownProps: any) {
    return {
        dataTree: state[componentsDataKey].tree
    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return{

    };
}

export default connect(mapState, mapDispatch)(PLayout);