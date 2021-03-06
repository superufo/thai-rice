import  mockjs  from 'mockjs';
import { getMenu } from './mock/menu';
import { getNotice } from './mock/notice';
import { getArticles,getArticleById } from './mock/article';
import { format, delay } from 'roadhog-api-doc';

const Random =  mockjs.Random;

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
const proxy = {
    'GET /api/getNotice':(req, res) => {
        res.send({
            status: 'ok',
            msg: '成功',
            data: getNotice
        });
    },

    // 'GET /api/getArticles':(req, res) => {
    //     res.send({
    //         status: 'ok',
    //         msg: '成功',
    //         data: getArticles
    //     });
    // },
    // 'GET /api/getArticleById':(req, res) => {
    //     res.send({
    //         status: 'ok',
    //         msg: '成功',
    //         data: getArticleById
    //     });
    // },

    'GET /api/getmenu':(req, res) => {
        res.send({
            status: 'ok',
            msg: '成功',
            data: getMenu
       });
    },
    'GET /api/getAdv':(req, res) => {
        res.send({
            status: 'ok',
            msg: '成功',
            data: [
                {
                    id: '1',
                    imagin: Random.image('345x184','#fb0a2a', '广告1'),
                    src: "http://www.google.com"
                }, {
                    id: '2',
                    imagin: Random.image('345x184', '#00405d', '#FFF', '广告2'),
                    src: "http://www.baidu.com"
                }, {
                    id: '3',
                    imagin: Random.image('345x184', '#ffcc33','#FFF', 'png', '广告3'),
                    src: Random.url()
                }
            ]
        });
     },
    'GET /api/getShopInfo': (req, res) => {
        const { shopId } = req.body;
        console.log(`GET /api/getShopInfo.....`);
        res.send({
            status: 'ok',
            msg: '成功',
            data: {
                shopId: '1',
                shopName: '大众餐馆',
                logo:'../public/img/shop001.jpg',
                desc: '大众餐馆,大众口味',
                owner: 'wangxiaol',
                country: '',
                region: Random.region(),
                city: Random.city(),
                address: '',
                telephone: '',
                mobile: '',
              }
        });
    },
};

export default (noProxy ? {} : delay(proxy, 1000));


//345x184