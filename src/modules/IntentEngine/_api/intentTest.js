import './mock/intentTest';

const GET_INTENT_TEST_URL = '/api/v1/intent_tests';
const GET_INTENT_TEST_DATA_URL = '/api/v1/intent_tests/intents';

function getTestRecord(intentTestId) {
  return this.$reqGet(`${GET_INTENT_TEST_URL}/${intentTestId}`).then(rsp => rsp.data.result);
}

function getTestRecords() {
  return this.$reqGet(GET_INTENT_TEST_URL).then(rsp => rsp.data.result);
}

function getTestIntents() {
  return this.$reqGet(GET_INTENT_TEST_DATA_URL).then(rsp => rsp.data.result);
}

function getIntentTestCorpus(intentId) {
  return this.$reqGet(`${GET_INTENT_TEST_DATA_URL}/${intentId}`).then(rsp => rsp.data.result);
}

export default {
  getTestRecord,
  getTestRecords,
  getTestIntents,
  getIntentTestCorpus,
};
