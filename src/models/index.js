import { parse, stringify } from 'qs';
import modelExtend from 'dva-model-extend';

import { model } from './common';
import { queryMenu } from '../services/api';
// import JsonUtils from '../utils/jsonUtils';

export default modelExtend(model, {
  namespace: 'index',
  state: {
    menu: [],
    adv: [{ id: '1' }, { id: '2' }],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        console.log(`pathname:${pathname}`);
        if (pathname === '/index' || pathname === '/') {
          dispatch({ type: 'query', payload: {} });
        }
      });
    },
  },

  effects: {
    *query({ payload }, { call, put }) {
      const response = yield call(queryMenu, payload);
      console.log('8888888888888888888888888888');
      console.log(response);
      const {
        status, msg, data,
      } = response;

      console.log(`query msg:${msg}`);
      console.log(`query status:${status}`);
      console.log(`query data:${data}`);
      if (status != 'ok') {
        throw data;
      }

      // const menuRes = state.menu;
      // for (let k = 0, length = data.length; k < length; k++) {
      //     menuRes.concat(data[k]);
      // }

      yield put({
        type: 'updateState',
        payload: {
          menu:data
        },
      });

      //const advs = [{ id: '3' }, { id: '4' }];
      // const res = state.adv;
      // for (let k = 0, length = advs.length; k < length; k++) {
      //   res.concat(advs[k]);
      // }

      yield put({
        type: 'updateAdvState',
        payload: [{ id: '3' }, { id: '4' }]
      });
    },
  },

  // 放到公用函數裏面
  reducers: {
    updateAdvState(state, { payload: advs }) {
      console.log('payload11111:');
      // console.log(payload);
      console.log(advs);
      const adv = state.adv.concat(advs);
      return { ...state, adv };
    },
  },
});
