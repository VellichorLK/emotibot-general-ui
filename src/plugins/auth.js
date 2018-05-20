import md5 from 'js-md5';
import qs from 'qs';
import 'babel-polyfill';

const LOGIN_PATH = '/auth/v2/login';
const ENTERPRISE_PATH = '/auth/v2/enterprise';
const TOKEN_PATH = '/auth/v2/token';

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

function setInfoWithToken(token) {
  const that = this;
  if (token === undefined || token === '' || token === null) {
    return new Promise((r, j) => { j('Invalid token'); });
  }
  const jwt = parseJwt(token);
  const userInfo = jwt.custom;
  const enterprise = userInfo.enterprise;
  let enterpriseInfo = {};
  let modules = [];
  let role = {};

  that.$setReqToken(token);
  return that.$reqGet(`${TOKEN_PATH}`).then(() => {
    if (userInfo.type >= 2) {
      if (userInfo.role === '') {
        throw new Error('Invalid role');
      }
      return that.$reqGet(`${ENTERPRISE_PATH}/${enterprise}/role/${userInfo.role}`);
    }
    return new Promise((r) => {
      r();
    });
  })
  .then((rsp) => {
    if (userInfo.type >= 2) {
      role = rsp.data.result;
    }
  })
  .then(() => that.$reqGet(`${ENTERPRISE_PATH}/${enterprise}`))
  .then((rsp) => {
    const data = rsp.data;
    enterpriseInfo = data.result;
  })
  .then(() => that.$reqGet(`${ENTERPRISE_PATH}/${enterprise}/modules`))
  .then((rsp) => {
    const data = rsp.data;
    modules = data.result;
  })
  .then(() => new Promise((r) => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('token', token);
    localStorage.setItem('enterpriseInfo', JSON.stringify(enterpriseInfo));
    localStorage.setItem('enterprise', JSON.stringify(enterprise));
    localStorage.setItem('modules', JSON.stringify(modules));
    localStorage.setItem('role', JSON.stringify(role));
    r(userInfo);
  }));
}

function login(input) {
  const that = this;
  const params = {
    account: input.account,
    passwd: md5(input.password),
  };

  let token;

  return that.$reqPost(LOGIN_PATH, qs.stringify(params), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  .then((rsp) => {
    const data = rsp.data;
    token = data.result.token;
    localStorage.setItem('token', token);
  });
}

function checkToken(token) {
  return this.$reqGet(`${TOKEN_PATH}/${token}`);
}

function checkPrivilege(moduleCode, cmd) {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const isAdmin = userInfo.type <= 1;

  if (isAdmin) {
    return true;
  }

  const roleInfo = JSON.parse(localStorage.getItem('role'));
  const privilege = roleInfo.privileges;

  if (Object.keys(privilege).indexOf(moduleCode) !== -1) {
    return privilege[moduleCode].indexOf(cmd) !== -1;
  }
  return false;
}

function clearAuth() {
  this.$cookie.delete('appid');
  this.$cookie.delete('user_id');
  localStorage.removeItem('userInfo');
  localStorage.removeItem('token');
  localStorage.removeItem('enterpriseInfo');
  localStorage.removeItem('enterprise');
  localStorage.removeItem('modules');
  localStorage.removeItem('role');
}

function logout() {
  clearAuth.bind(this)();
  window.location = '/login.html';
}

function getToken() {
  return localStorage.getItem('token');
}

function getUserEnterprises() {
  try {
    return JSON.parse(localStorage.getItem('enterpriseInfo'));
  } catch (e) {
    logout();
    return {};
  }
}

function getPrivModules() {
  return JSON.parse(localStorage.getItem('modules'));
}

const MyPlugin = {
  install(Vue) {
    Vue.prototype.$checkPrivilege = checkPrivilege;

    Vue.prototype.$login = login;
    Vue.prototype.$checkToken = checkToken;
    Vue.prototype.$getToken = getToken;
    Vue.prototype.$logout = logout;
    Vue.prototype.$setIntoWithToken = setInfoWithToken;
    Vue.prototype.$getUserEnterprises = getUserEnterprises;
    Vue.prototype.$getPrivModules = getPrivModules;
  },
};

export default MyPlugin;
