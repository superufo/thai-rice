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
    * query({ payload }, { call, put }) {
      console.log('start .....');
      const response = yield call(queryMenu, payload);
      console.log(`yield finish  response : ${stringify(response)}`);
      const {
        status, msg, data,
      } = response;

      console.log(`query data:${data}`);
      if (status != 'ok') {
        throw data;
      }

      yield put({
        type: 'updatestat',
        payload: {
          data,
        },
      });
    },
  },

  // 放到公用函數裏面
  // reducers: {
  //   updatestat(state, { payload }) {
  //     const { data } = payload;
  //     return { ...state, data };
  //   },
  // },
});
