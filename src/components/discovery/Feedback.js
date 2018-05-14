import {Tabs, WhiteSpace, List, Stepper,InputItem,Toast,Button,WingBlank} from 'antd-mobile';

import {createForm} from 'rc-form';
import PubSub from 'pubsub-js';

const Item = List.Item;

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            type: 'money',
            mobile:'',
            name:'',
            age:''
        };
    }

    onChangeMobile = (value) => {
        console.log(value);
        if (value.replace(/\s/g, '').length < 11) {
            this.setState({
                hasError: true,
            });
        } else {
            this.setState({
                hasError: false,
            });
        }
        this.setState({
            mobile:value,
        });
    }

    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('Please enter 11 digits');
        }
    }

    handleClick = () => {
        this.customFocusInst.focus();
    }

    render() {
        const { getFieldProps } = this.props.form;
        const { type } = this.state;

        return (
            <div style={{ width:'100%',height: '100%', alignItems: 'left', justifyContent: 'left',backgroundColor: '#fff' }}>
                <WingBlank>
                <List renderHeader={() => '留言信息'}>
                    <InputItem
                        {...getFieldProps('money2', {
                            normalize: (v, prev) => {
                                if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                                    if (v === '.') {
                                        return '0.';
                                    }
                                    return prev;
                                }
                                return v;
                            },
                        })}
                        type={type}
                        placeholder="money format"
                        ref={el => this.customFocusInst = el}
                        clear
                    >最低价位</InputItem>

                    <InputItem
                        {...getFieldProps('digit')}
                        type="digit"
                        placeholder="click to show native number keyboard"
                    >最高价位</InputItem>
                </List>

                <List renderHeader={() => '个人信息'}>
                    <InputItem
                        type="text"
                        clear
                        placeholder="name"
                        ref={el => this.autoFocusInst = el}
                        value=""
                     >姓名</InputItem>
                    <InputItem
                        type="phone"
                        placeholder="input your phone"
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChangeMobile}
                        value={this.state.mobile}
                    >手机号码</InputItem>
                </List>

                </WingBlank>

                <List>
                   <Button type="ghost" inline size="small" style={{ marginRight: '10px',  marginRight: '4px' }}>提交</Button>
                   <Button type="ghost" inline size="small" style={{ marginRight: '10px',  marginRight: '4px' }}>重置</Button>
                </List>

            </div>
        );
      }
}

export default createForm()(Feedback);