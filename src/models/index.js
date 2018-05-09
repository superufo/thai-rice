import { parse, stringify } from 'qs';
import modelExtend from 'dva-model-extend';

import { model } from './common';
import { queryMenu, queryAdv } from '../services/api';
// import JsonUtils from '../utils/jsonUtils';

export default modelExtend(model, {
  namespace: 'index',
  state: {
    menu: [],
    adv: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        console.log(`pathname:${pathname}`);
        if (pathname === '/index' || pathname === '/') {
          dispatch({ type: 'query', payload: { userId:'1' } });
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

      yield put({
        type: 'updateState',
        payload: {
          menu: data,
        },
      });

      // const res = state.adv;
      // for (let k = 0, length = advs.length; k < length; k++) {
      //   res.concat(advs[k]); const adv = state.adv.concat(advs);
      // }
      const responseAdv = yield call(queryAdv, payload);
      console.log('9999999999999999999');
      console.log(responseAdv.data);

      yield put({
        type: 'updateAdvState',
        payload: { adv : responseAdv.data },
      });
    },
  },

  // 放到公用函數裏面
  reducers: {
    updateAdvState(state, { payload: advs }) {
      console.log('payload11111:');
      console.log(advs);
      const { adv } = advs;
      return { ...state, adv };
    },
  },
});
