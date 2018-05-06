import { parse } from 'qs';
import modelExtend from 'dva-model-extend';

export default modelExtend(model, {
  namespace: 'index',
  state: {},

  subscriptions: {
    setup({ dispatch, history }) {

    },
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
});
