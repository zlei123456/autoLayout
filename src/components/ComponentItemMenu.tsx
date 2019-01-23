/**
 * [exports description]
 * @author lei on 2018/12/29
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { InputNumber, Input, Select, Menu, Icon } from 'antd';
import './ComponentItemMenu.css';
import { commonKey } from '../reducers/commonReducer';
import { componentMenuVisible, ICIMenuParams } from '../actions/commonAction';
import { addComponent } from '../actions/componentsDataAction';
import componentProperty from '../data/componentProperty';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class ComponentItemMenu extends React.Component<any, any> {

    // addMenus = ['View', 'Image', 'ImageBackground', 'Text', 'TextInput'];
    addMenus = Object.keys(componentProperty.components);

    render() {
        let componentMenuInfo: ICIMenuParams = this.props.componentMenuInfo;
        return (
            <div className={'ComponentMenuDiv'} id={'ComponentMenuDiv'}>
                <div className={'componentMenuRect'} style={{position: 'absolute',
                    left: componentMenuInfo.x + 'px',
                    top: componentMenuInfo.y + 'px',
                    width: '120px',
                    border: '1px solid #eee',
                    background: '#fff'
                }}>
                    <Menu
                        onClick={this.handleClick}
                        style={{ width: '120px' }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="vertical"
                    >
                        <SubMenu key="add" title={<span><Icon type="plus-circle" /><span>{'增加'}</span></span>}>
                            {
                                this.addMenus.map((v) => {
                                    return (<Menu.Item key={'add_' + v}>{v}</Menu.Item>);
                                })
                            }
                        </SubMenu>
                        <Menu.Item key="del">
                            <span>
                                <Icon type="delete" />
                                <span>{'删除'}</span>
                            </span>
                        </Menu.Item>
                    </Menu>
                </div>

            </div>
        );
    }

    componentDidMount() {
        let div = document.getElementById('ComponentMenuDiv');
        div.addEventListener('click', (ev) => {
            // todo
            console.log('colse');
            this.props.componentMenuVisible({visible: false});
        });
    }

    handleClick = (e) => {
        // todo
        console.log(e);
        this.props.componentMenuVisible({visible: false});

        let eKey = e.key;
        let arr = eKey.split('_');
        if (arr[0] == 'add') {
            // add
            this.add(arr[1]);
        }
    }
    add = (type) => {
        console.log(type);
        this.props.addComponent({type: type});

    }

    del = () => {
        // todo

    }

}

function mapState(state: any, ownProps: any) {
    return {
    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return {
        componentMenuVisible: (data: ICIMenuParams) => dispatch(componentMenuVisible(data)),
        addComponent: (params: any) => dispatch(addComponent(params)),
    };
}

export default connect(mapState, mapDispatch)(ComponentItemMenu);