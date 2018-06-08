import qs from 'qs';

const ROLE_URL = '/admin/v1/role';
const ROLES_URL = '/admin/v1/roles';
const ROLE_REGISTER_URL = '/admin/v1/role/register';

// const V2_PREFIX = '/auth/v2';
const V3_PREFIX = '/auth/v3';

function getRolesURL(enterpriseID) {
  return `${V3_PREFIX}/enterprise/${enterpriseID}/roles`;
}
function getRoleURL(enterpriseID) {
  return `${V3_PREFIX}/enterprise/${enterpriseID}/role`;
}

function getEnterpriseRoles(enterprise) {
  const rolesURL = getRolesURL(enterprise);
  return this.$reqGet(rolesURL).then(rsp => rsp.data.result);
}
function getEnterpriseRole(enterprise, id) {
  const roleURL = getRoleURL(enterprise);
  return this.$reqGet(`${roleURL}/${id}`).then(rsp => rsp.data.result);
}
function updateEnterpriseRole(enterprise, id, role) {
  const roleURL = getRoleURL(enterprise);
  const options = {
    name: role.name,
    privilege: JSON.stringify(role.privileges),
  };

  return this.$reqPut(`${roleURL}/${id}`, qs.stringify(options), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}
function addEnterpriseRole(enterprise, role) {
  const roleURL = getRoleURL(enterprise);
  const options = {
    name: role.name,
    privilege: JSON.stringify(role.privileges),
  };

  return this.$reqPost(`${roleURL}`, qs.stringify(options), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}
function deleteEnterpriseRole(enterprise, id) {
  const roleURL = getRoleURL(enterprise);
  return this.$reqDelete(`${roleURL}/${id}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

function deleteRole(id) {
  return this.$reqDelete(`${ROLE_URL}/${id}`).then(rsp => rsp.data);
}

function getRole(id) {
  return this.$reqGet(`${ROLE_URL}/${id}`).then((rsp) => {
    const role = rsp.data.result;
    return {
      role_name: role.role_name,
      role_id: role.role_id,
      privileges: JSON.parse(role.privilege),
    };
  });
}

function updateRole(id, role) {
  const options = {
    role_name: role.name,
    privilege: JSON.stringify(role.privileges),
  };

  return this.$reqPatch(`${ROLE_URL}/${id}`, qs.stringify(options), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

function getRoles() {
  return this.$reqGet(ROLES_URL).then((rsp) => {
    const ret = [];
    rsp.data.result.forEach((role) => {
      ret.push({
        role_name: role.role_name,
        role_id: role.role_id,
        privileges: JSON.parse(role.privilege),
      });
    });
    return ret;
  });
}

function addRole(name, privileges) {
  const options = {
    role_name: name,
    privilege: JSON.stringify(privileges),
  };

  return this.$reqPost(ROLE_REGISTER_URL, qs.stringify(options), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

export default {
  getRoles,
  getRole,
  addRole,
  updateRole,
  deleteRole,

  getEnterpriseRoles,
  getEnterpriseRole,
  updateEnterpriseRole,
  addEnterpriseRole,
  deleteEnterpriseRole,
};