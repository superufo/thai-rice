import { Tabs, WhiteSpace, Card, WingBlank, List, Badge } from 'antd-mobile';
import { routerRedux } from 'dva/router';
//import styles from './af.less';

const Item = List.Item;
const Brief = Item.Brief;

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [{
        title: '', content: '', img: '', source: '', type: '',
      }, {}],
    };
  }

  handleArticleClick(id, e) {
      this.props.dispatch(routerRedux.push(`/article/${id}`));
  }

  render() {
    return (<div style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
      <WingBlank size="lg">
        <List
          renderHeader={() => (<div style={{ align: 'left', textAlign: 'left', height: '40px' }} >
            <Badge
              text="推荐阅读"
              style={{
                     marginRight: '12px', padding: '0px 3px', backgroundColor: '#21b68a', borderRadius: 2,
                    }}
            />
            <span style={{ fontSize: '8px' }}> 如何优雅地吃一顿日本传统高级料理？</span>
            <WingBlank size="lg"><p style={{ fontSize: '8px', padingBottom: '-10px' }}>2018-03-14 11:06:37</p></WingBlank>
                               </div>)}
          style={{ flexBasis: 'initial' }}
        >

          <Item extra={<img src={require('../../public/img/shop001.jpg')} style={{ width: '100%', height: '80px' }} />} multipleLine align="top" wrap>
               <p style={{ fontSize: '8px', padingBottom: '-10px' }} >
                    世界上大概没有一个地方像京都那样：永远从容地活在古代，还把吃饭都变成了一种艺术。在京都生活极需要仪式感，我们去寺院看枯山水.......
                    <a href='/article/1'> Read More </a>
                </p>
          </Item>
        </List>
      </WingBlank>
      <WhiteSpace style={{ backgroundColor: '#dbcdcd' }} />

      <WingBlank size="lg">
        <List
          renderHeader={() => (<div style={{ align: 'left', textAlign: 'left', height: '40px' }} >
            <Badge
              text="精华"
              style={{
                     marginRight: '12px', padding: '0px 3px', backgroundColor: '#21b68a', borderRadius: 2,
                    }}
            />
            <span style={{ fontSize: '8px' }}> 烧烤的门道 </span>
            <WingBlank size="lg"><p style={{ fontSize: '8px', padingBottom: '-10px' }} >2018-05-15 11:06:37</p></WingBlank>
                               </div>)}
          style={{ flexBasis: 'initial' }}
        >

          <Item extra={<img src={require('../../public/img/shop001.jpg')} style={{ width: '100%', height: '80px' }} />} multipleLine align="top" wrap>
            <p style={{ fontSize: '8px', padingBottom: '-10px' }} >
                                很多熟悉日式烧烤的人，可能都会对烹饪的细节有所了解。就像分子料理十有八九会用到低温加热设备一样，烧烤也离不开炭这种东西.......
              <a href="#/article/2" onClick={this.handleArticleClick.bind('2')} > Read More </a>
            </p>
          </Item>
        </List>
      </WingBlank>
      <WhiteSpace style={{ backgroundColor: '#dbcdcd' }} />
            </div>
    );
  }
}

export default Article;
