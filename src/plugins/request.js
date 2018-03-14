/*
request.js wrapped the axios library
It will do extra operations for all request
ex: add auth token, log request, etc.
After ajax finish, check error code automatically
*/
import axios from 'axios';

let appid = '';

function addCustomHeader(config) {
  let option = Object.assign({}, config);
  if (!config) {
    option = {};
  }
  // TODO: correct header should add here
  if (option.headers) {
    option.headers['X-Custom-Header'] = appid;
  } else {
    option.headers = {
      'X-Custom-Header': appid,
    };
  }
  return option;
}

function handleUnAuthenticated() {

}

function checkAjaxError(context, error) {
  let status;
  if (error.response) {
    status = error.response.status;
  }

  if (status === 401) {
    handleUnAuthenticated();
  }

  if (status >= 400 && status < 500) {
    context.$notify({
      text: `${context.$t(`http_status.${status.toString()}`)} ${status}`,
      type: 'fail',
    });
    // context.$popError(
    //   context.$t('error_msg.client_error'),
    //   `${context.$t(`http_status.${status.toString()}`)} ${status}`);
  } else if (status >= 500) {
    context.$notify({
      text: `${context.$t('general.error_code')} ${status}`,
      type: 'fail',
    });
    // context.$popError(
    //   context.$t('error_msg.server_error'),
    //   `${context.$t('general.error_code')} ${status}`);
  }
  throw error;
}

function ajax(config) {
  const that = this;
  const getConfigWithCustomHeader = addCustomHeader.bind(that);
  return axios(getConfigWithCustomHeader(config)).catch((err) => {
    checkAjaxError(that, err);
  });
}

function get(url, config) {
  let option = Object.assign({}, config);
  if (!config) {
    option = {};
  }
  option.method = 'get';
  option.url = url;
  return this.$reqAjax(option);
}

function post(url, data, config) {
  let option = Object.assign({}, config);
  if (!config) {
    option = {};
  }
  option.data = data;
  option.method = 'post';
  option.url = url;
  return this.$reqAjax(option);
}

const MyPlugin = {
  install(Vue) {
    Vue.prototype.$reqGet = get;
    Vue.prototype.$reqPost = post;
    Vue.prototype.$reqAjax = ajax;

    Vue.prototype.$setupRobot = function setupRobot(id) {
      appid = id;
    };
  },
};

export default MyPlugin;