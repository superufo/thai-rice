import { stringify } from 'qs';
import request from '../utils/request';

export async function queryMenu() {
    return request('/api/getmenu');
}

export async function queryAdv(params) {
    return request('/api/getAdv', {method: 'GET', body: params});
}

export async function queryShopInfo(params) {
    return request('/api/getShopInfo', {method: 'GET', body: params});
}

export async function queryNotice(params) {
    return request('/api/getNotice', {method: 'GET', body: params});
}

export async function queryArticles(params) {
    return request('/api/getArticles', {method: 'GET', body: params});
}

export async function queryArticleById(params) {
    return request('/api/getArticleById', {method: 'GET', body: params});
}

// export async function addRule(params) {
//   return request('/api/rule', {
//     method: 'POST',
//     body: {
//       ...params,
//       method: 'post',
//     },
//   });
// }

// export async function fakeSubmitForm(params) {
//   return request('/api/forms', {
//     method: 'POST',
//     body: params,
//   });
// }
//
// export async function fakeChartData() {
//   return request('/api/fake_chart_data');
// }

// export async function queryTags() {
//   return request('/api/tags');
// }
//
// export async function queryBasicProfile() {
//   return request('/api/profile/basic');
// }
//
// export async function queryAdvancedProfile() {
//   return request('/api/profile/advanced');
// }
//
// export async function queryFakeList(params) {
//   return request(`/api/fake_list?${stringify(params)}`);
// }
//
// export async function fakeAccountLogin(params) {
//   return request('/api/login/account', {
//     method: 'POST',
//     body: params,
//   });
//}

// export async function fakeRegister(params) {
//   return request('/api/register', {
//     method: 'POST',
//     body: params,
//   });
// }
//
// export async function queryNotices() {
//   return request('/api/notices');
// }
