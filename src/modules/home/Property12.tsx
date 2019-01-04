/**
 * [exports description]
 * @author lei on 2018/9/29
 */

import { InputNumber, Input, Select } from 'antd';
import * as React from 'react';
import './Home.css';
const Option = Select.Option;

class Property12 extends React.Component {
    public render() {
        let names = ['aa', 'bb', 'cc'];
        return (
            <div>
                <div>
                    <span>{'名 字: '}</span>
                    <Input className={'baseInput'}
                           id={'name'}
                           onChange={this.changeInput}
                    />
                </div>
                <div>
                    <span>{'数字: '}</span>
                    <InputNumber className={'baseInput'}
                           id={'number'}
                           onChange={this.changeInputNumber}
                    />
                </div>

                <div>
                    <span>{'选择器: '}</span>
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                        {
                            names.map(v => {
                                return (
                                    <Option value={v}>{v}</Option>
                                );
                            })
                        }
                    </Select>

                </div>

            </div>

        );
    }

    changeInput = (e: any) => {
        // e.target.id
        console.log(e.target);
    }

    changeInputNumber = (e: any) => {
        console.log(e.target.id);
    }

    handleChange = (value: string) => {
        console.log(value);
    }
}

export default Property12;