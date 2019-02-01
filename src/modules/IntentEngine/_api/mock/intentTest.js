import testRecordData from './testRecordData';
import testRecordsData from './testRecordsData';
import testIntentsData from './testIntentsData';

function startMock(mock) {
  mock.onGet('/api/v1/intent_tests')
  .reply(200, testRecordsData.testRecordsResponse);
  mock.onGet('/api/v1/intent_tests/intents')
  .reply(200, testIntentsData.testIntentsResponse);
  mock.onGet('/api/v1/intent_tests/540000199801149697')
  .reply(200, testRecordData.testRecordResponse);
}

export default {
  startMock,
};
