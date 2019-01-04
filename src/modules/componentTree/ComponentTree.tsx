/**
 * [exports description]
 * @author lei on 2018/12/29
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { Tree } from 'antd';
import { componentMenuVisible, ICIMenuParams, selectMenu } from '../../actions/commonAction';
import { commonKey } from '../../reducers/commonReducer';
import { componentsDataKey } from '../../reducers/componentsDataReducer';

const DirectoryTree = Tree.DirectoryTree;
const { TreeNode } = Tree;

class ComponentTree extends React.Component<any, any> {

    onSelect = (checkedKeys, info) => {
        console.log(checkedKeys);
        this.props.selectMenu(checkedKeys[0]);
    }

    onRightClick = ({event, node}) => {
        // todo
        console.log(event.pageX);
        console.log(event.pageY);
        console.log(node.props.title);
        console.log(node.props.eventKey);

        this.props.selectMenu(node.props.eventKey);
        this.props.componentMenuVisible({visible: true,
            x: event.pageX,
            y: event.pageY,
            menuId: node.props.eventKey,
            // title: node.props.title
        });

    }

    renderTreeNodes = data => Object.keys(data).map((item) => {
        if (this.props.treeData[item]) {
            let itemData = this.props.treeData[item];
            return (
                <TreeNode title={itemData.type} key={itemData.key} dataRef={itemData}>
                    {this.renderTreeNodes(data[item])}
                </TreeNode>
            );
        }
        return null;
    })

    render() {
        return (
            <Tree showLine={true}
                  onSelect={this.onSelect}
                  selectedKeys={[this.props.selectMenuId]}
                  onRightClick={this.onRightClick}>
                {this.renderTreeNodes(this.props.tree)}
            </Tree>
        );
    }
}

function mapState(state: any, ownProps: any) {
    return {
        selectMenuId: state[commonKey].selectMenuId,
        tree: state[componentsDataKey].tree,
        treeData: state[componentsDataKey].data,
    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return {
        componentMenuVisible: (data: ICIMenuParams) => dispatch(componentMenuVisible(data)),
        selectMenu: (menuId) => dispatch(selectMenu(menuId))
    };
}

export default connect(mapState, mapDispatch)(ComponentTree);