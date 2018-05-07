import { parse } from 'url';


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
    cmenu: [{ title: '热饮料', id: '11' }, { title: '冻饮料', id: '12' }, { title: '咖啡', id: '13' }, { title: '茶', id: '14' }],
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
