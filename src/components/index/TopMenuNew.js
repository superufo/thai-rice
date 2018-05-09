import { Tabs, WhiteSpace,WingBlank } from 'antd-mobile';
import { PubSub } from 'pubsub-js';

import ChdMenu from './ChdMenu';

import StringUtils from '../../utils/stringUtils';


class TopMenu extends React.Component {
    state = {
        tabs: [ { title: '招牌菜' },
                { title: '中餐'  },
                { title: '水果'  },
                { title: '饮料',  cmenu: [ {title:'热饮料','id':'11'},{title:'冻饮料','id':'12'},{title:'咖啡','id':'13'}, {title:'茶','id':'14'}] },
                { title: '沙拉'  },
                { title: '泰菜'  },
                { title: '米饭'  },
                { title: '其他'  },
                { title: '定制'  }],
        imgHeight: 176,
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                tabs: this.props.tabs
            });
        }, 100);
    }

    constructor(props){
        super(props);
    }

    renderContent = tab => {
        if ( StringUtils.isEmpty(tab.cmenu) )
        {
           console.log(tab.cmenu);
           return  (<div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '150px',
                backgroundColor: '#fff'
            }}>
                <p>Content of {tab.title}</p>
            </div>);
        } else {
            return (<div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '250px',
                backgroundColor: '#fff'
            }}>
                <ChdMenu content={tab} />
            </div>);
        }
    }


    render() {
        return (
            <div>
                <WingBlank />
                    <Tabs tabs={this.state.tabs}  key='1243' renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
                        {this.renderContent}
                    </Tabs>
                <WingBlank />
            </div>
        );
    }
}

export default TopMenu;