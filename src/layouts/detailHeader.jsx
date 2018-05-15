import React from 'react';
import PropTypes from 'prop-types';
import { routerRedux } from 'dva/router';
import { NavBar, Icon, Menu, ActivityIndicator,NoticeBar } from 'antd-mobile';
import styles from './header.less';

const languages = [{label:'中文',value:'zhCN'}, {label:'English', value:'enUS'},{label:'ภาษาไทย', value:'tnTK',isLeaf: true},];

class  DetailHeader  extends  React.Component  {
    constructor(...args) {
        super(...args);
        this.state = {
            languageLabel:'中文',
            initData: false,
            show: false,
        };
    }

    handleBackClick(e){
        //const dispatch = this.props.dispatch;
        //dispatch(routerRedux.push(`/discovery`));
        this.props.history.goBack();
        this.props.history.push();
    }

    render() {
        return (
             <div>
                 <NavBar
                     mode="dark"
                     icon={<Icon type="left" />}
                     onLeftClick={this.handleBackClick.bind(this)}
                     rightContent={[
                         <Icon key="1" type="ellipsis" />,
                     ]}
                 >文章详情</NavBar>
             </div>
        );
    }
}

export default DetailHeader;