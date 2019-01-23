/**
 * [exports description]
 * @author lei on 2019/1/17
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { setOther, setProperty } from '../../actions/componentsDataAction';
import { componentsDataKey } from '../../reducers/componentsDataReducer';
import LInputNumber from './LInputNumber';
import LSelect from './LSelect';
import LInput from './LInput';
import LSwitch from './LSwitch';

class LBase extends React.Component<any, any> {

    render() {
        let k = this.props.itemKey;
        let v = this.props.item;
        if (v.type == 'input' && v.limit == 'number') {
            return (<LInputNumber preText={k}
                                  item={v}
                                  selectMenuId={this.props.selectMenuId}
                                  key={k}
                                  lType={this.props.lType}
                                  value={this.props.value}
                                  setValue={this.setValue}
            />);
        } else if (v.type == 'input') {
            return (<LInput preText={k}
                            item={v}
                            selectMenuId={this.props.selectMenuId}
                            key={k}
                            lType={this.props.lType}
                            value={this.props.value}
                            setValue={this.setValue}
            />);
        } else if (v.type == 'select') {
            return (<LSelect preText={k}
                             option={v.limit}
                             item={v}
                             selectMenuId={this.props.selectMenuId}
                             key={k}
                             lType={this.props.lType}
                             value={this.props.value}
                             setValue={this.setValue}
            />);
        } else if (v.type == 'switch') {
            return (<LSwitch preText={k}
                             option={v.limit}
                             item={v}
                             selectMenuId={this.props.selectMenuId}
                             key={k}
                             lType={this.props.lType}
                             value={this.props.value}
                             setValue={this.setValue}
            />);
        } else if (v.type == 'title') {
            return (
                <div >
                    {k}
                </div>
            );
        } else {

            return (<div />);
        }
    }

    setValue = (key: string, value: any) => {
        if (this.props.lType == 'other') {
            this.props.setOther(key, value);
        } else {
            this.props.setProperty(key, value);
        }
    }

}

function mapState(state: any, ownProps: any) {
    let t = 'property';
    if (ownProps.lType == 'other') {
        t = 'other';
    }

    return {
        value: state[componentsDataKey][t][ownProps.selectMenuId][ownProps.itemKey]
    };
}

function mapDispatch(dispatch: any, ownProps: any) {
    return{
        setProperty: (key, value) => dispatch(setProperty(key, value)),
        setOther: (key, value) => dispatch(setOther(key, value)),
    };
}

export default connect(mapState, mapDispatch)(LBase);