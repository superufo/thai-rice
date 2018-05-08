import mockjs from 'mockjs';
import { getMenu } from './mock/menu';
import { format, delay } from 'roadhog-api-doc';

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
const proxy = {
    // 支持值为 Object 和 Array
    'GET /api/getmenu':(req, res) => {  console.log(`start 22222.....`);
        res.send({
            status: 'ok',
            msg: '成功',
            data: getMenu
       });
    },
    'GET /api/getProduct': (req, res) => {
            const { id } = req.body;
            res.send({
                status: 'ok',
                msg: '成功',
                data: [{

                    },{

                    },{

                    }]
            });
    },
    'GET /api/getAdv': (req, res) => {
        const { id } = req.body;
        res.send({
            status: 'ok',
            msg: '成功',
            data: [
                    {
                        'id':'1',
                        'imagin':Random.dataImage('345x184', '广告1'),
                        'src':Random.url()
                    },{
                        'id':'2',
                        'imagin':Random.dataImage('345x184', '广告2'),
                        'src':Random.url()
                    },{
                        'id':'3',
                        'imagin':Random.dataImage('345x184', '广告3'),
                        'src':Random.url()
                    }
            ]
        });
    },
};

export default (noProxy ? {} : delay(proxy, 1000));
