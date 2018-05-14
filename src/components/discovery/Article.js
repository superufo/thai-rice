import { Tabs, WhiteSpace,Card,WingBlank,List,Badge } from 'antd-mobile';
import PubSub from 'pubsub-js';
import styles from './af.less';
const Item = List.Item;
const Brief = Item.Brief;

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {articles:[{title:'',content:"",img:"",source:"",type:''},{}]};
    }

    render() {
        return (<div style={{ width:'100%',height: '100%',backgroundColor: '#fff' }}>
                   <WingBlank size="lg">
                     <List renderHeader={ () => (<div style={{align:'left',textAlign:'left'}} >
                                                     <Badge text="推荐阅读" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />
                                                         article title <img src='' /><br/>
                                                  </div>) }
                                  style={{flexBasis: 'initial',}}>

                                <Item extra={<img src='' style={{ width:'100%',height: '60px'}}/>} multipleLine align="top" wrap>
                                    Multiple line and long text will wrap. Long Text Long Text Long Text <br/> <a href=''> Read More </a>
                                </Item>
                      </List>
                    </WingBlank>
                    <WhiteSpace style={{ backgroundColor: '#fff333' }}  />

                    <WingBlank size="lg">
                        <List renderHeader={ () => (<div style={{align:'left',textAlign:'left'}} >
                            <Badge text="精华" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />
                               article title <img src='' /><br/>
                        </div>) }
                              style={{flexBasis: 'initial',}}>

                            <Item extra={<img src='' style={{ width:'100%',height: '60px'}}/>} multipleLine align="top" wrap>
                                Multiple line and long text will wrap. Long Text Long Text Long Text <br/> <a href=''> Read More </a>
                            </Item>
                        </List>
                    </WingBlank>
                    <WhiteSpace style={{ backgroundColor: '#fff333' }}/>
               </div>
        );
    }
}

export default Article;