import { Tabs, WhiteSpace,List, Stepper } from 'antd-mobile';

const Item = List.Item;


class ChdMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 3
        };
    }

    onChange = (val) => {
        // console.log(val);
        this.setState({ val });
    }

    renderContent = tab => {
            console.log(tab.products);

            const { products } = tab;

            return  (
                    <List  style={{width: '100%',fontSize:'8px'}}>
                        {
                            products.map((eachitem, index) => { console.log("eachitem"); console.log(eachitem);  console.log("index"); console.log(index);
                                    return  (<Item

                                            extra={
                                                <Stepper
                                                    style={{width:'100%',fontSize:'8px',marginLeft:'0px', marginRight:'100px',paddingRight:'-5px'}}
                                                    showNumber
                                                    max={1000}
                                                    min={0}
                                                    value={this.state.val}
                                                    onChange={this.onChange}
                                                />}
                                            multipleLine
                                        >
                                            <div style={{display:'inline-block',verticalAlign:'middle',}}><img src={eachitem.imagin} style={{height:'80px',width:'80px',marginRight:'5px'}}/> </div>
                                            <div style={{display:'inline-block',verticalAlign:'middle',}}>
                                                <p style={{fontSize:'12px'}}>{eachitem.title}</p>
                                                <Item.Brief style={{fontSize:'8px'}} >{eachitem.price}</Item.Brief>
                                                <Item.Brief style={{fontSize:'8px'}}>{eachitem.desc}</Item.Brief>
                                            </div>
                                        </Item>
                                    )
                            })
                        }
                    </List>
           );
    }

    render() {
        var tabs = this.props.content.cmenu;

        return (<div style={{height: 320}}>
                <Tabs tabs={tabs}
                      style={{width: '10%',fontSize:'8px'}}
                      initalPage={'t2'}
                      tabBarPosition="left"
                      tabDirection="vertical"
                      renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3}  style={{width: '100%',fontSize:'8px'}} />}
                >
                    {this.renderContent}
                </Tabs>

        </div>);
    }
}

export default ChdMenu;