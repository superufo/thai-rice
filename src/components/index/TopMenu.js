import { Tabs, WhiteSpace,WingBlank } from 'antd-mobile';
import { PubSub } from 'pubsub-js';

import ChdMenu from './ChdMenu';
import StringUtils from '../../utils/stringUtils';

class TopMenu extends React.Component {
    constructor(props){
        super(props);
    }

    state = {
        tabs: [],
    }

    componentWillReceiveProps(tabs) {
        this.setState({
            tabs: this.props.tabs
        });
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
            console.log(111111111);
            //console.log(this.prop.tabs);
            //console.log(tab);
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
                <Tabs tabs={this.state.tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
                    {this.renderContent}
                </Tabs>
                <WingBlank />
            </div>
        );
    }
}

export default TopMenu;