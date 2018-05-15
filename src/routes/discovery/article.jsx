import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { NavBar, Icon, Menu, ActivityIndicator,NoticeBar,Badge,WingBlank   } from 'antd-mobile';

const Article = ({
                dispatch, article, loading, location,
 }) =>{
    return (
            <div style={{paddingTop:'30px'}}>
                <div style={{align:'left',textAlign:'left',height:'40px',}} >
                    <Badge text="推荐阅读" style={{ marginRight:'12px',padding: '0px 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />
                    <span style={{fontSize:'8px'}}> 如何优雅地吃一顿日本传统高级料理？</span>
                    <WingBlank size="lg"><p style={{fontSize:'8px',padingBottom:'-10px'}}>2018-03-14 11:06:37</p></WingBlank>
                </div>
                <div style={{paddingTop:'10px'}}>
                    <p>

                        世界上大概没有一个地方像京都那样：永远从容地活在古代，还把吃饭都变成了一种艺术。在京都生活极需要仪式感，我们去寺院看枯山水、换上浴衣参加祗园祭、
                        在晚秋的神社里赏枫，再细究下去，就到了一日三餐里面。
                         </p><p>
                        这座曾当过1200多年首都的城市，被称为天皇的厨房，无数名厨巧匠云集于此，发挥着自己的创造力和想象力。虽然京都是内陆城市，海产不够丰富，但出产优质的山野菜，而且自古佛教盛行，因此也就诞生了别具一格的饮食文化——京料理。
                        可以说，所谓京料理，指的是在结合京都地产食材的基础上，奉行保存原味的烹饪理念，致力于表现季节更迭和食材的时令性，同时又注重精致摆盘的料理形式。在日本人的心目中，京料理是凌驾于其他地方料理之上，最为正统、崇高，历史也最悠久的一种料理，严格来说由四部分组成：有职料理、精进料理、京怀石、京都家常料理，如今的语境下，大多指代「京怀石」，基本上可以等同「怀石料理」的概念。
                        凡是到过京都的人，都会被「三步一寺五步一神社」的奇妙宗教氛围所震撼，京都佛教文化兴盛、寺庙众多，自然就催化了一种料理的发扬光大，即以蔬菜、豆类为主面向僧众的精進料理。
                </p><p>比较有代表性的有「大德寺一久」、「一休庵」、「白雲庵」等，而妙心寺附近的「阿じろ」甚至获得了米其林一星的头衔。
                        精進料理最早起源于中国的斋饭，追溯到1227年秋天，到南宋学习佛法的道元禅师学成归国，顺便把这种料理传给了日本僧人。不同于许多地方「仿荤素菜」的习惯，日本的精進料理则是追求味噌等调料与豆腐等食材之间的调和，现在京料理代表的「怀石料理」，可以说就是从精進料理中派生出来的，可惜经历岁月的洗礼，纯素的斋菜渐渐不是日常生活的主流。
                    </p>
                </div>
            </div>
    );
};

Article.propTypes = {
    location: PropTypes.object.isRequired,
};

export default connect(({ article, loading  }) => ({ article, loading  }))(Article);