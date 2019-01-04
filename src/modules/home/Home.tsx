/**
 * [exports description]
 * @author lei on 2018/9/28
 */

import { Layout, Button } from 'antd';
import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Home.css';
import Property from '../Property/Property';
import ComponentTree from '../componentTree/ComponentTree';
import ComponentItemMenu from '../../components/ComponentItemMenu';
import Tips from './Tips';
import DBHeader from './DBHeader';
import Btns from './Btns';
const { Header, Footer, Sider, Content } = Layout;

// const toCopy = copy;

class Home extends React.Component {
    public render() {
        return (
            <Layout>
                <Header style={{background: '#fff'}}>
                    <DBHeader />
                </Header>
                <Layout style={{height: '400px'}}>
                    <Sider className={'border homeSider'}
                           style={{background: '#fff'}}>
                        <ComponentTree />

                    </Sider>

                    <Content className={'border'} style={{background: '#fff'}}>
                        <CopyToClipboard text={'adfsdfasfvvv'}
                                         onCopy={() => this.setState({copied: true})}>
                            <Button type="primary">Primary</Button>
                        </CopyToClipboard>

                        <Btns />

                    </Content>
                    <Sider className={'border homeSider'}
                           style={{background: '#fff'}}>
                        <Property />
                    </Sider>
                </Layout>
                <Footer>Footer</Footer>

                <Tips />
            </Layout>
        );
    }

    // copyUrl = (data) => {
    //     copy('adbcddfsffffff', {debug: false});
    //     alert('成功复制到剪贴板');
    // }
}

export default Home;
