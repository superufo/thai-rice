import React from 'react';
import PropTypes from 'prop-types';
import { NavBar, Icon, Menu, ActivityIndicator,NoticeBar } from 'antd-mobile';
import styles from './header.less';

class  Detail  extends  React.Component  {
    constructor(...props) {
        super(...props);
        console.log('this.props:',this.props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {this.props.childrens}
            </div>
        );
    }
}

export default Detail;