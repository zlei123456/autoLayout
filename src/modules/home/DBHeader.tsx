/**
 * [exports description]
 * @author lei on 2019/1/2
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import { newProject, save } from '../../actions/componentsDataAction';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class DBHeader extends React.Component<any, any> {
    state = {
        current: 'mail',
    };

    handleClick = (e) => {
        console.log('click ', e);
        // e.key
        if (e.key == 'newProject') {
            this.props.newProject('new1');
        } else if (e.key == 'save') {
            // save
            this.props.save();
        }

    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                mode="horizontal"
            >
                <SubMenu title={<span><Icon type="file" />{'项目'}</span>}>
                    <Menu.Item key="newProject">{'新建项目'}</Menu.Item>
                    <Menu.Item key="openProject">{'打开项目'}</Menu.Item>
                    <Menu.Item key="save">{'保存'}</Menu.Item>
                </SubMenu>
             </Menu>
        );
    }
}

function mapState(state: any, ownProps: any) {
    return {

    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return{
        newProject: (name) => dispatch(newProject(name)),
        save: () => dispatch(save()),
    };
}

export default connect(mapState, mapDispatch)(DBHeader);