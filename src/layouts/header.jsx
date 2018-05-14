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
        e.preventDefault(); // Fix event propagation on Android
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

        e.stopPropagation();
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
        console.log("logo：");
        console.log(logo);

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
            <div className={show ? styles.singleMenuActive  : ''}  onClick={ ()=>{ console.log('div1111111   475475675676765767');}}>
                <div onClick={ ()=>{ console.log('div222222   475475675676765767'); } }>
                    <NavBar
                        mode="light"
                        icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg" className="am-icon am-icon-md" alt="" />}
                        leftContent={<div style={{verticalAlign: 'middle', fontSize: '16px'}}>
                            {this.state.languageLabel}
                            <svg className={styles.iconSvg} aria-hidden="true" onClick={ ()=>{ console.log('475475675676765767'); } }  >
                                <use xlinkHref="#down" />
                            </svg>
                        </div>}
                        onLeftClick={this.showLanguage}
                        onClick={this.showLanguage}
                        rightContent={
                            <Icon key="0" type="ellipsis" onClick={ ()=>{ console.log('44444444'); alert(11111);} }  />
                        }
                        className= {styles.singleTopNavBar}
                    >
                        <img src={require(`../public/img/shop001.jpg`)} style={{height: '25px', width: '25px', marginRight: '5px'}} onClick={ ()=>{ e.stopPropagation();console.log('imglllllllllllllll');}   }  />
                        <div style={{verticalAlign: 'middle', fontSize: '16px', color: '#ffffff'}}>
                            {this.props.headerInfo.shopName}
                        </div>
                    </NavBar>
                </div>

                {noticeControl}

                {show ? initData ? menuEl : loadingEl : '' }
                {show ? <div className={styles.menuMask}  onClick={this.onMaskClick} /> : ''}

                {this.props.childrens}
            </div>
        );
    }
}

export default Header;