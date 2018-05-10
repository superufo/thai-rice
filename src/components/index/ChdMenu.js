import { Tabs, WhiteSpace,List, Stepper } from 'antd-mobile';

const Item = List.Item;


class ChdMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 3,
            cmenu:this.props.content.cmenu
        };
    }


    onChange = (tIdx,xindex,val) => {
        // console.log("tIdx:");
        // console.log(tIdx);
        // console.log("xindex:");
        // console.log(xindex);
        // console.log("this.state.cmenu[tIdx].products[xindex].num:");
        // console.log(this.state.cmenu[tIdx].products[xindex].num);
        // console.log(val);

       var tmp =  this.props.content.cmenu;
       tmp[tIdx].products[xindex].num = val;
       this.setState({ cmenu:tmp });
    }

    renderContent = tab => {
            // console.log("tab");
            // console.log(tab);
            // console.log(tab.products);
            // console.log("tab.activeTab");
            // console.log(tab.activeTab);
            // console.log("tab.page");
            // console.log(tab.page);

            const { products } = tab;

            if( products===undefined ||    products===null ){
                return '無產品';
            }

            var tabIdx = -1;
            var length = this.state.cmenu.length;
            for (let k = 0; k < length; k++){
                    if( this.state.cmenu[k].id === tab.id  ){
                        tabIdx=k;
                        break;
                    }
            }

            return  (
                    <List  style={{width: '100%',fontSize:'8px'}}>
                        {
                            products.map((eachitem, index) => {   //console.log("eachitem"); console.log(eachitem);  console.log("index"); console.log(index);
                                    return  (<Item
                                            key={eachitem.proId}
                                            extra={
                                                <Stepper
                                                    style={{width:'100%',fontSize:'8px',marginLeft:'0px', marginRight:'80px',paddingRight:'-90px'}}
                                                    showNumber
                                                    max={1000}
                                                    min={0}
                                                    value={this.state.cmenu[tabIdx].products[index].num}
                                                    onChange={this.onChange.bind(this,tabIdx,index)}
                                                />}
                                            multipleLine
                                        >
                                            <div style={{display:'inline-block',verticalAlign:'middle',}}><img src={eachitem.imagin} style={{height:'80px',width:'80px',marginRight:'5px'}}/> </div>
                                            <div style={{display:'inline-block',verticalAlign:'middle',marginRight:'-25px'}}>
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
        // console.log("this.state.products:");
        // console.log(this.state.cmenu);
        // console.log(this.state.cmenu[1].products);

        return (<div style={{height: 320}}>
                <Tabs tabs={tabs}
                      key={tabs.id}
                      style={{width: '10%',fontSize:'8px'}}
                      initalPage={'t2'}
                      tabBarPosition="left"
                      tabDirection="vertical"
                      renderTabBar={props => <Tabs.DefaultTabBar {...props} page={tabs.id} style={{width: '100%',fontSize:'8px'}} />}
                >
                    {this.renderContent}
                </Tabs>

        </div>);
    }
}

export default ChdMenu;