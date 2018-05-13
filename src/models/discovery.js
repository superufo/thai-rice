import modelExtend from 'dva-model-extend';
import { model } from './common';
import { queryShopInfo } from '../services/api';

export default modelExtend(model, {
  namespace: 'discovery',

  state: {
    headerInfo: {
      shopId: '', shopName: '', logo: '', desc: '', owner: '', country: '', city: '', address: '', telephone: '', mobile: '',
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        console.log(` discovery pathname:${pathname}`);
        if (pathname === '/discovery') {
          dispatch({ type: 'query', payload: { shopId: '1' } });
        }
      });
    },
  },

  effects: {
    *query({ payload }, { call, put }) {
      const shopInfoResponse = yield call(queryShopInfo, payload);

      if (shopInfoResponse.status != 'ok') {
        throw shopInfoResponse.data;
      }

      yield put({
        type: 'updateShopState',
        payload: {
          headerInfo: shopInfoResponse.data,
        },
      });
    },
  },
});
