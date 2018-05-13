import { Tabs, WhiteSpace,WingBlank,Drawer } from 'antd-mobile';
import  PubSub  from 'pubsub-js';

import ChdMenu from './ChdMenu';
import StringUtils from '../../utils/stringUtils';

class TopMenu extends React.Component {
    constructor(props){
        super(props);
    }

    state = {
        tabs: [],
        menuId:''
    }

    componentWillReceiveProps(tabs) {
        this.setState({
            tabs: this.props.tabs
        });
    }

    getProduct(menuId){
        this.setState({
            menuId: menuId
        });
        PubSub.publish('PubSubProId',this.state.menuId);
    }

    renderContent = tab => {
        if ( StringUtils.isEmpty(tab.cmenu) )
        {
            return  (<div style={{
                display: 'flex',
                alignItems: 'top',
                justifyContent: 'center',
                height: '320px',
                backgroundColor: '#fff'
            }}>
                <p>Content of {tab.title}</p>
            </div>);
        } else {
            return (<div style={{
                display: 'flex',
                alignItems: 'top',
                justifyContent: 'center',
                height: '320px',
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
                <Tabs tabs={this.state.tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />} onTabClick={this.getProduct.bind(this,2)}>
                    {this.renderContent}
                </Tabs>
                <WingBlank />
            </div>
        );
    }
}

export default TopMenu;