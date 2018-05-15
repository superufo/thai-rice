import modelExtend from 'dva-model-extend';
import {model} from './common';
import {queryShopInfo,queryNotice} from '../services/api';

export default modelExtend(model, {
    namespace: 'app',

    state: {
        headerInfo: {
            shopId: '',
            shopName: '',
            logo: '../public/img/shop002.jpg',
            desc: '',
            owner: '',
            country: '',
            city: '',
            address: '',
            telephone: '',
            mobile: '',
        },
        notice: {title: '暂无通告', id: '', content: ''},
    },

    subscriptions: {
        setup({dispatch, history}) {
            dispatch({type: 'query', payload: {shopId: '1'}});
        },
    },

    effects: {
        * query({payload}, {call, put}) {
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

            const noticeResponse = yield call(queryNotice, payload);
            // console.log('noticeResponse.data');
            // console.log(noticeResponse.data);

            if (noticeResponse.status != 'ok') {
                throw noticeResponse.data;
            }

            yield put({
                type: 'updateNoticeState',
                payload: {
                    notice: noticeResponse.data,
                },
            });
        },
    },
});
