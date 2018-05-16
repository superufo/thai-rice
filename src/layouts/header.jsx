import React from 'react';
import PropTypes from 'prop-types';
import { NavBar, Icon, Menu, ActivityIndicator,NoticeBar } from 'antd-mobile';

import styles from './header.less';

const languages = [{label:'中文',value:'zhCN'}, {label:'English', value:'enUS'},{label:'ภาษาไทย', value:'tnTK',isLeaf: true},];

class  Header  extends  React.Component  {
    constructor(...args) {
        super(...args);
        this.state = {
            languageLabel:'中文',
            initData: false,
            show: false,
        };
    }

    componentDidMount(){
        document.body.addEventListener('click', this._onBlurHandler, false);

    }

    componentWillUnmount(){
        document.body.removeEventListener('click', this._onBlurHandler, false);
    }

    changeLanguage = (value) => {
        let label = '';
        languages.forEach((dataItem) => {
            if (dataItem.value === value[0]) {
                label = dataItem.label;
                if (dataItem.children && value[1]) {
                    dataItem.children.forEach((cItem) => {
                        if (cItem.value === value[1]) {
                            label += ` ${cItem.label}`;
                        }
                    });
                }
            }
        });
        console.log(label);
    }

    showLanguage = (e)=>{
        //console.log("e:");
        //console.log(e);
        // if (e.cancelable) {
        //     // 判断默认行为是否已经被禁用
        //     if (!e.defaultPrevented) {
        //         e.preventDefault();
        //     }
        // }

        //e.stopPropagation();
        this.setState({
            show: !this.state.show,
        });

        if ( !this.state.initData ) {
            setTimeout(() => {
                this.setState({
                    initData: languages,
                });
            }, 500);
        }
    }

    onMaskClick = () => {
        this.setState({
            show: false,
        });
    }

    render() {
        const { initData, show } = this.state;
        const { logo } = this.props.headerInfo;

        let noticeControl = '';
        if(  this.props.notice.content!="" ){
             noticeControl = (<NoticeBar mode="link" onClick={() => alert('1')}>`{this.props.notice.title}:${this.props.notice.content}`</NoticeBar>);
        }
        // console.log("logo：");
        // console.log(logo);

        const menuEl = (
            <Menu
                className={styles.singleFooMenu}
                data={initData}
                value={['zhCN']}
                level={1}
                onChange={this.changeLanguage}
                height={ document.documentElement.clientHeight * 0.6 }
            />
        );

        const loadingEl = (
            <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </div>
        );

        return (
            <div className={show ? styles.singleMenuActive  : ''} >
                <div>
                    <NavBar
                        mode="light"
                        icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg" className="am-icon am-icon-md" alt="" />}
                        leftContent={<div style={{verticalAlign: 'middle', fontSize: '16px'}} onClick={this.showLanguage}>
                            {this.state.languageLabel}
                            <svg className={styles.iconSvg} aria-hidden="true" >
                                <use xlinkHref="#down" />
                            </svg>
                        </div>}
                        onLeftClick={this.showLanguage}
                        rightContent={
                            <Icon key="0" type="ellipsis" />
                        }
                        className= {styles.singleTopNavBar}
                    >
                        <img src={require(`../public/img/shop001.jpg`)} style={{height: '25px', width: '25px', marginRight: '5px'}}/>
                        <div style={{verticalAlign: 'middle', fontSize: '16px', color: '#ffffff'}}>
                            {this.props.headerInfo.shopName}
                        </div>
                    </NavBar>
                </div>

                {noticeControl}

                {show ? initData ? menuEl : loadingEl : '' }
                {show ? <div className={styles.menuMask}  onClick={this.onMaskClick} /> : ''}

            </div>
        );
    }
}

export default Header;