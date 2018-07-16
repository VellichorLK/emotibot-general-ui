import md5 from 'md5';

const ENTERPRISES_URL = '/auth/v3/enterprises';
const ENTERPRISE_URL = '/auth/v3/enterprise';

const BF2_ENTERPRISE_URL = '/api/v1/bf/enterprise';
const BF2_USER_URL = '/api/v1/bf/user';

function getEnterprises() {
  return this.$reqGet(ENTERPRISES_URL).then(rsp => rsp.data.result);
}

function getEnterpriseModules(id) {
  return this.$reqGet(`${ENTERPRISE_URL}/${id}/modules`).then(rsp => rsp.data.result);
}

function deleteEnterprise(id) {
  return this.$reqDelete(`${ENTERPRISE_URL}/${id}`).then(rsp => rsp.data.result);
}

function addEnterprise(info) {
  // basic check of input parameter
  if (!info.name || !info.modules || !info.admin) {
    return new Promise((_, reject) => {
      reject('Invalid parameter');
    });
  }
  const data = {
    ...info,
  };
  window.test = md5;
  data.modules = JSON.stringify(info.modules);
  data.admin.password = md5(info.admin.password);
  data.admin = JSON.stringify(info.admin);

  return this.$reqPostForm(ENTERPRISE_URL, data)
    .then(rsp => rsp.data.result)
    .then(enterprise => this.$reqPostForm(BF2_ENTERPRISE_URL, {
      id: enterprise.id,
      name: enterprise.name,
    })
    .then(() => {
      const admins = enterprise.admins;
      if (admins.length > 0) {
        return admins[0];
      }
      return {};
    })
    .then(admin => this.$reqPostForm(BF2_USER_URL, {
      id: admin.id,
      account: info.admin.username,
      password: md5(info.admin.password),
      enterprise: enterprise.id,
    })));
}

function updateEnterprise() {

}

export default {
  getEnterprises,
  getEnterpriseModules,
  addEnterprise,
  updateEnterprise,
  deleteEnterprise,
};
