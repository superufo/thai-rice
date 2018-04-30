import { Tabs, WhiteSpace } from 'antd-mobile';


// const tabs = [
//     { title: '1 Tab' },
//     { title: '2 Tab' },
//     { title: '3 Tab' },
// ];


class ChdMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var tabs = this.props.content.cmenu;

        return (<div style={{height: 200}}>
            <flex/>
            <Tabs tabs={tabs}
                  initalPage={'t2'}
                  tabBarPosition="left"
                  tabDirection="vertical"
            >
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '150px',
                    backgroundColor: '#fff'
                }}>
                    111111111111111111111111111111
                </div>
            </Tabs>
            <flex/>
        </div>);
    }
}

export default ChdMenu;