import { Tabs, WhiteSpace,Card,WingBlank,List } from 'antd-mobile';
import PubSub from 'pubsub-js';
import styles from './af.less';
const Item = List.Item;
const Brief = Item.Brief;

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {articles:[{title:'',content:"",img:"",source:""},{}]};
    }

    render() {
        return (<div style={{ width:'100%',height: '100%',backgroundColor: '#fff' }}>
               <WingBlank size="lg">
                  <List renderHeader={ () => (<div style={{align:'left',textAlign:'left'}} >article title <img src='' /><br/></div>) } style={{flexBasis: 'initial',}}>

                            <Item extra={<img src='' style={{ width:'100%',height: '60px'}}/>} multipleLine align="top" wrap>
                                Multiple line and long text will wrap. Long Text Long Text Long Text
                            </Item>

                  </List>
                </WingBlank>
               </div>
        );
    }
}

export default Article;