import { object, boolean, array, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withMarkdownNotes } from '@storybook/addon-notes';
import DropdownSelect from '../../components/DropdownSelect';
import DropdownCascader from '../../components/basic/DropdownCascader';
import README from './README.md';
import READMECascader from './README_Cascader.md';

export default [{
  name: 'DropdownSelect',
  func: withMarkdownNotes(README)(() => {
    const options = [{
      value: 'opt1',
      text: '選項1',
    }, {
      value: 'opt2',
      text: '選項2',
    }];
    const multiChoiceDft = false;
    const checkValues = array('value', []);
    const multiChoice = boolean('multiChoice', multiChoiceDft);
    const showCheck = boolean('showCheck', true);
    const width = text('width', '150px');
    const option = object('options', options);
    const fixedListWidth = boolean('fixedListWidth', true);

    const template = `
      <div>
        <div style="height:500px">
          <dropdown-select
            :options=option
            :multi=multiChoice
            :showCheck=showCheck
            :width=width
            :fixedListWidth="fixedListWidth"
            v-model="checkValues"
            @input="input"
          />
        </div>
      </div>`;

    return {
      components: {
        DropdownSelect,
      },
      data() {
        return {
          option,
          showCheck,
          multiChoice,
          checkValues,
          width,
          fixedListWidth,
        };
      },
      methods: {
        input(val) {
          action('input')(val);
        },
      },
      template,
    };
  }),
},
{
  name: 'DropdownCascader',
  func: withMarkdownNotes(READMECascader)(() => {
    const options = [
      {
        text: '第一層沒選項',
        value: 'first-no-data',
      },
      {
        text: '第一層',
        value: 'first-layer',
        options: [{
          text: '第二層',
          value: 'second-layer',
        }, {
          text: '第二層很長很長很長很長很長很長很長很長很長',
          value: 'seconde-layer-longer',
        }],
      },
      {
        text: '第一層很長很長很長很長很長很長很長很長很長',
        value: 'first-layer-longer',
        options: [{
          text: '第二層-2',
          value: 'second-layer-2',
        }, {
          text: '第二層-2很長很長很長很長很長很長很長很長很長',
          value: 'seconde-layer-longer2',
        }],
      },
      {
        text: '哈囉你好嗎',
        value: 'hello',
        options: [{
          text: '哈囉第一個',
          value: 'hello-1',
        }, {
          text: '哈囉第二個',
          value: 'hello-2',
        }, {
          text: '哈囉第三個',
          value: 'hello-3',
        }, {
          text: '哈囉第四個',
          value: 'hello-4',
        }, {
          text: '哈囉第五個很長很長很長很長很長',
          value: 'hello-5',
        }],
      },
      {
        text: '再來一組',
        value: 'onemore',
        options: [{
          text: '更多',
          value: 'more more',
        }],
      },
      {
        text: '第五組',
        value: 'fifth',
        options: [{
          text: '第五組的項目',
          value: 'fifth option',
        }],
      },
    ];

    const checkValues = array('value', []);
    const option = object('options', options);
    const width = text('width', '300px');
    const placeholder = text('placeholder', '請選擇');

    const template = `
      <div>
        <div style="height:700px">
          <dropdown-cascader
            :options=option
            :width=width
            v-model="checkValues"
            :placeholder="placeholder"
            @input="input"
          />
        </div>
      </div>`;

    return {
      components: {
        DropdownCascader,
      },
      data() {
        return {
          option,
          checkValues,
          width,
          placeholder,
        };
      },
      methods: {
        input(val) {
          action('input')(val);
        },
      },
      template,
    };
  }),
}];
