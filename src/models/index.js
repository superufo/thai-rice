import modelExtend from 'dva-model-extend';

import { model } from './common';
import { queryMenu, queryAdv, queryShopInfo } from '../services/api';

export default modelExtend(model, {
  namespace: 'index',
  state: {
    menu: [],
    adv: [],
    headerInfo: {
      shopId: '', shopName: '', logo: '', desc: '', owner: '', country: '', city: '', address: '', telephone: '', mobile: '',
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        console.log(`pathname:${pathname}`);
        if (pathname === '/index' || pathname === '/') {
          dispatch({ type: 'query', payload: { shopId: '1' } });
        }
      });
    },
  },

  effects: {
    *query({ payload }, { call, put }) {
      const response = yield call(queryMenu, payload);
      const {
        status, msg, data,
      } = response;

      if (status != 'ok') {
        throw data;
      }

      yield put({
        type: 'updateState',
        payload: {
          menu: data,
        },
      });


      const shopInfoResponse = yield call(queryShopInfo, payload);
      console.log('shopInfoResponse.data');
      console.log(shopInfoResponse.data);

      if (shopInfoResponse.status != 'ok') {
        throw shopInfoResponse.data;
      }

      yield put({
        type: 'updateShopState',
        payload: {
          headerInfo: shopInfoResponse.data,
        },
      });

      // const res = state.adv;
      // for (let k = 0, length = advs.length; k < length; k++) {
      //   res.concat(advs[k]); const adv = state.adv.concat(advs);
      // }
      const responseAdv = yield call(queryAdv, payload);

      yield put({
        type: 'updateAdvState',
        payload: { adv: responseAdv.data },
      });
    },
  },

  reducers: {
    updateAdvState(state, { payload: advs }) {
      const { adv } = advs;
      return { ...state, adv };
    },

    updateShopState(state, { payload: headerInfoSet }) {
      const {headerInfo} = headerInfoSet;
      return { ...state, headerInfo };
    },
  },
});
