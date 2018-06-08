<template>
  <div class="robot-special-words">
    <div class="card w-fill h-fill">
      <nav-bar :options=pageMap v-model="currentPage"></nav-bar>
      <div class="words-list">
        <div class="words"
          v-for="words in wordsList" :key="words.type"
          v-if="words.page === currentPage">
          <div class="words-title">
            <div class="title-text">{{ words.name }}</div>
            <div class="icon-container" @mouseover.stop="showTooltip($event, words.type)" @mouseout.stop="hideTooltip(words.type)">
              <icon icon-type="help" :size="13"></icon>
              <div class="tooltip" :ref="`tooltip_${words.type}`">{{ words.comment }}</div>
            </div>
          </div>
          <div class="button-container">
            <text-button button-type="primary" @click="popAddWordsContent(words)">{{ $t('general.add') }}</text-button>
          </div>
          <div class="words-contents">
            <div class="row header">
              <div class="content">{{ $t('chat_skill.chat_skill') }}</div>
              <div class="command">{{ $t('general.operation') }}</div>
              <div class="command"></div>
            </div>
            <template v-if="words.contents.length === 0">
              <div class="row">
                <div class="empty-row">{{ $t('chat_skill.add_new_msg', {item: words.name}) }}</div>
              </div>
            </template>
            <div v-for="content in words.contents" :key="content.id" class="row">
              <div class="content">{{content.content}}</div>
              <div class="command edit" @click="popEditWordsContent(words, content)">
                {{ $t('general.edit') }}
              </div>
              <div class="command delete" @click="popDeleteWordsContent(words, content)">
                {{ $t('general.delete') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavigationBar';
import EditPop from './_components/RobotWordsEdit';
import api from './_api/chatskill';

const pageGroup = {
  basic: [1, 2, 3, 4, 5, 6, 12, 13],
  emotion: [9, 10, 11],
  timeout: [7, 8],
};

export default {
  path: 'robot-chat-skill',
  privCode: 'robot_chat_skill',
  displayNameKey: 'robot_chat_skill',
  icon: 'white_chat',
  name: 'robot-chat-skill',
  components: {
    NavBar,
  },
  api,
  data() {
    return {
      currentPage: 'basic',
      pageMap: {
        basic: this.$t('chat_skill.group_basic'),
        emotion: this.$t('chat_skill.group_emotion'),
        timeout: this.$t('chat_skill.group_timeout'),
      },
      wordsList: [],
    };
  },
  methods: {
    popAddWordsContent(words) {
      const that = this;
      that.$pop({
        title: `${that.$t('general.add')}${words.name}`,
        component: EditPop,
        data: {
          words,
        },
        validate: true,
        bindValue: false,
        callback: {
          ok(content) {
            that.addWordsContent(words, content);
          },
        },
      });
    },
    popEditWordsContent(words, contentObj) {
      const that = this;
      that.$pop({
        title: `${that.$t('general.edit')}${words.name}`,
        component: EditPop,
        data: {
          words,
          content: contentObj.content,
        },
        validate: true,
        bindValue: false,
        callback: {
          ok(content) {
            that.updateWordsContent(words, contentObj.id, content);
          },
        },
      });
    },
    popDeleteWordsContent(words, contentObj) {
      const that = this;
      that.$popCheck({
        title: `${that.$t('general.delete')}${words.name}`,
        data: {
          msg: that.$t('chat_skill.delete_check_msg', { item: contentObj.content }),
        },
        callback: {
          ok() {
            that.deleteWordsContent(words, contentObj.id);
          },
        },
      });
    },
    callAPI(calledAPI, ...params) {
      const that = this;
      that.$emit('startLoading');
      calledAPI.bind(this)(...params)
        .catch((err) => {
          that.$notifyFail(that.$t('error_msg.request_fail'));
          console.log(err);
        })
        .finally(() => that.loadRobotWords());
    },
    addWordsContent(words, content) {
      const that = this;
      that.callAPI(that.$api.addRobotChatContentV2, words.type, content);
    },
    updateWordsContent(words, contentID, content) {
      const that = this;
      that.callAPI(that.$api.updateRobotChatContentV2, words.type, contentID, content);
    },
    deleteWordsContent(words, contentID) {
      const that = this;
      that.callAPI(that.$api.deleteRobotChatContentV2, words.type, contentID);
    },
    showTooltip(e, wordsType) {
      let tooltip = this.$refs[`tooltip_${wordsType}`];
      if (tooltip.length > 0) {
        tooltip = tooltip[0];
      }

      const target = e.currentTarget;
      const boundedBox = target.getBoundingClientRect();

      tooltip.style.visibility = 'visible';
      tooltip.style.position = 'fixed';
      tooltip.style.top = `${boundedBox.top - tooltip.clientHeight - 16}px`;
      tooltip.style.left = `${boundedBox.left - 20}px`;
    },
    hideTooltip(wordsType) {
      let tooltip = this.$refs[`tooltip_${wordsType}`];
      if (tooltip.length > 0) {
        tooltip = tooltip[0];
      }
      tooltip.style.visibility = 'hidden';
    },
    loadRobotWords() {
      const that = this;
      that.$emit('startLoading');
      that.$api.getRobotChatListV2()
      .then((data) => {
        that.wordsList = data;
        that.wordsList.forEach((words) => {
          Object.keys(pageGroup).forEach((page) => {
            if (pageGroup[page].indexOf(words.type) >= 0) {
              words.page = page;
            }
          });
        });
      })
      .finally(() => {
        that.$emit('endLoading');
      });
    },
  },
  mounted() {
    this.loadRobotWords();
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/variable.scss';

$words-title-font-size: 16px;
$words-title-line-height: 24px;
$words-title-color: #666666;

$words-list-font-size: 14px;
$words-list-header-bg: #f7f7f7;
$words-list-edit-color: #1875f0;
$words-list-delete-color: #f76260;

$tooltip-border-radius: 4px;
$tooltip-font-size: 12px;
$tooltip-line-height: 18px;
$tooltip-color: #666666;

.words-list {
  display: flex;
  flex-direction: column;

  overflow-y: auto;
  max-height: calc(100% - 60px);
  .words {
    padding: 20px 0;
    .words-title {
      display: flex;
      align-items: center;
      padding: 0 20px;
      padding-bottom: 16px;
      .title-text {
        color: $words-title-color;
        font-size: $words-title-font-size;
        line-height: $words-title-line-height;
        margin-right: 5px;
      }
      .icon-container {
        position: relative;
        .tooltip {
          visibility: hidden;
          position: absolute;
          font-size: $tooltip-font-size;
          line-height: $tooltip-line-height;
          color: $tooltip-color;
          width: 190px;
          padding: 8px 6px 8px 16px;
          box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
          background: white;
          border-radius: $tooltip-border-radius;
          &::before{
            border-top: 6px solid white;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            content: "";
            position: absolute;
            left: 25px;
            top: 100%;
          }
        }
      }
    }
    .button-container {
      padding: 0 20px;
    }
    .words-contents {
      padding-top: 11px;
      font-size: $words-list-font-size;

      display: flex;
      flex-direction: column;
      .row {
        flex: 0 0 50px;

        display: flex;
        align-items: center;
        box-shadow: inset 0 -1px 0 0 #e9e9e9;
        &.header {
          background: $words-list-header-bg;
        }
        .content {
          flex: 1;
          padding: 0 20px;
        }
        &:not(.header) {
          .command {
            @include click-button();
          }
        }
        .command {
          flex: 0 0 50px;
          padding: 0 10px;

          &.edit {
            color: $words-list-edit-color;
          }
          &.delete {
            color: $words-list-delete-color;
          }
        }
        .empty-row {
          flex: 1;
          padding: 0 20px;
        }
      }
    }
  } 
}
</style>