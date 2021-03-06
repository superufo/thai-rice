import modelExtend from 'dva-model-extend';

const model = {
  reducers: {
    updateState(state, { payload }) {
      // console.log('payload:');
      // console.log(payload);

      return {
        ...state,
        ...payload,
      };
    },

    updateShopState(state, { payload: headerInfoSet }) {
          const {headerInfo} = headerInfoSet;
          return { ...state, headerInfo };
    },

    updateNoticeState(state, { payload: noticeInfo }) {
          const { notice }  = noticeInfo;
          return { ...state, notice};
    },
  },
};

const pageModel = modelExtend(model, {
  state: {
    list: [],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `Total ${total} Items`,
      current: 1,
      total: 0,
      pageSize: 10,
    },
  },

  reducers: {
    querySuccess(state, { payload }) {
      const { list, pagination } = payload;
      return {
        ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination,
        },
      };
    },
  },

});


module.exports = {
  model,
  pageModel,
};
