import {parse} from 'url';
import mockjs from 'mockjs';

const Random = mockjs.Random;

const getMenu = [
    {
        title: '招牌菜',
        id: '1',
    },
    {
        title: '中餐',
        id: '2',
    },
    {
        title: '水果',
        id: '3',
    },
    {
        title: '饮料',
        id: '4',
        cmenu: [
            {
                title: '热饮料',
                id: '11',
                products: [
                    {
                        proId: '1',
                        imagin: Random.image('150x150', '#ffcc33', '#FFF', 'png', '热饮料1'),
                        src: Random.url(),
                        price: '20.00',
                        title: '热饮料1',
                        desc: 'desc',
                        num:'0',
                    },
                    {
                        proId: '2',
                        imagin: Random.image('150x150', '#ffcc33', '#FFF', 'png', '热饮料2'),
                        src: Random.url(),
                        price: '20.00',
                        title: '热饮料2',
                        desc: 'desc',
                        num:'0'
                    },
                    {
                        proId: '3',
                        imagin: Random.image('150x150', '#ffcc33', '#FFF', 'png', '热饮料3'),
                        src: Random.url(),
                        price: '20.00',
                        title: '热饮料3',
                        desc: 'desc',
                        num:'0'
                    },
                    {
                        proId: '4',
                        imagin: Random.image('150x150', '#ffcc33', '#FFF', 'png', '热饮料4'),
                        src: Random.url(),
                        price: '20.00',
                        title: '热饮料4',
                        desc: 'desc',
                        num:'0'
                    },
                    {
                        proId: '5',
                        imagin: Random.image('150x150', '#ffcc33', '#FFF', 'png', '热饮料5'),
                        src: Random.url(),
                        price: '20.00',
                        title: '热饮料5',
                        desc: 'desc',
                        num:'0'
                    },
                    {
                        proId: '6',
                        imagin: Random.image('150x150', '#ffcc33', '#FFF', 'png', '热饮料6'),
                        src: Random.url(),
                        price: '20.00',
                        title: '热饮料6',
                        desc: 'desc',
                        num:'0'
                    },
                    {
                        proId: '7',
                        imagin: Random.image('150x150', '#ffcc33', '#FFF', 'png', '热饮料7'),
                        src: Random.url(),
                        price: '20.00',
                        title: '热饮料7',
                        desc: 'desc',
                        num:'0'
                    },
                    {
                        proId: '8',
                        imagin: Random.image('150x150', '#ffcc33', '#FFF', 'png', '热饮料8'),
                        src: Random.url(),
                        price: '20.00',
                        title: '热饮料8',
                        desc: 'desc',
                        num:'0'
                    }
                ]
            },
            {
                title: '冻饮料',
                id: '12',
                products: [
                    {
                        proId: '9',
                        imagin: Random.image('150x150', '#ffcc33', '#FFF', 'png', '冻饮料1'),
                        src: Random.url(),
                        price: '20.00',
                        title: '冻饮料1',
                        desc: 'desc',
                        num:'0'
                    },
                    {
                        proId: '10',
                        imagin: Random.image('150x150', '#ffcc33', '#FFF', 'png', '冻饮料2'),
                        src: Random.url(),
                        price: '20.00',
                        title: '冻饮料2',
                        desc: 'desc',
                        num:'0'
                    }
                ]
            },
            {title: '咖啡', id: '13'},
            {title: '茶', id: '14'}
        ],
    },
    {
        title: '沙拉',
        id: '5',
    },
    {
        title: '泰菜',
        id: '6',
    }, {
        title: '米饭',
        id: '7',
    },
    {
        title: '其他',
        id: '8',
    }, {
        title: '定制',
        id: '9',
    },
];

export default {
    getMenu,
};
