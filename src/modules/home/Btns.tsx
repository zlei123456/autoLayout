/**
 * [exports description]
 * @author lei on 2019/1/4
 */

import * as React from 'react';
import { Button, Switch } from 'antd';
import { connect } from 'react-redux';
import { componentsDataKey } from '../../reducers/componentsDataReducer';
import { generateCode, openProject } from '../../actions/componentsDataAction';
import { commonKey } from '../../reducers/commonReducer';
import imgMgr from '../../utils/imgMgr';
import { colorModalVisible } from '../../actions/commonAction';
// import saveAs from 'file-saver';
var FileSaver = require('file-saver');

class Btns extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            storeIsVisible: false
        };
    }
    render() {
        return (
            <div>
                <Switch checkedChildren="开" unCheckedChildren="关" checked={this.state.storeIsVisible}
                        onChange={this.storeVisible}
                />
                {
                    this.state.storeIsVisible ? (
                        <pre className={'showText'}>
                            {JSON.stringify(this.props.componentsData, null, 2)}
                        </pre>
                    ) : null
                }

                <Button type="primary" onClick={this.copy}>复制工程配置</Button>
                <Button type="primary" onClick={this.write}>写入</Button>
                <Button type="primary" onClick={() => this.props.generateCode()}>生成代码</Button>
                <Button type="primary" onClick={this.getImageInfo}>得到图片信息</Button>
                <Button type="primary" onClick={this.addColor}>增加颜色</Button>

                <input type="file" id="projectInput"/>

                <pre className={'codeText'}>
                    {this.props.code}
                </pre>
            </div>
        );
    }

    componentDidMount() {
        document.getElementById('projectInput')
            .addEventListener('change', (event: any) => {
                // todo
                console.log(event.target.files[0]);
                let resultFile = event.target.files[0];
                if (resultFile) {
                    var reader = new FileReader();
                    reader.readAsText(resultFile);
                    reader.onload = (function (that: any) {
                        return function (e: any) {
                            var urlData = this.result;
                            console.log(urlData);
                            that.props.openProject(urlData);
                        };
                    })(this);

                }

        });
    }

    storeVisible = (visible) => {
        this.setState({storeIsVisible: visible});
    }

    copy = () => {
        let input = document.createElement('input');
        input.value = JSON.stringify(this.props.componentsData);
        document.body.appendChild(input);
        input.select();
        input.setSelectionRange(0, input.value.length), document.execCommand('Copy');
        document.body.removeChild(input);
        alert('复制成功');
    }

    write = () => {
        let content = '这是直接使用HTML5进行导出的';
        let blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
        FileSaver.saveAs(blob, 'file.txt'); // saveAs(blob,filename)
    }

    getImageInfo = () => {
        imgMgr.getImgs();
    }

    addColor = () => {
        this.props.colorModalVisible(true);
    }
}

function mapState(state: any, ownProps: any) {
    return {
        componentsData: state[componentsDataKey],
        code: state[commonKey].code,
    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return{
        openProject: (data) => dispatch(openProject(data)),
        generateCode: () => dispatch(generateCode()),
        colorModalVisible: (visible) => dispatch(colorModalVisible(visible)),
    };
}

export default connect(mapState, mapDispatch)(Btns);