
<template>
  <div id="card-content" class="card">
    <div id="card-content-header">
      <search-input v-model="commandKeyword"></search-input>
    </div>
    <div id="card-content-content">
      <div id="toolbar">
        <text-button
          v-if="canCreate"
          button-type="primary"
          @click="popAddCommand">
          {{ $t('robot_command.add_command') }}
        </text-button>
        <text-button 
          v-if="canDelete"
          @click="deleteMultiCommand"
          :button-type="this.checkedCommand.length === 0 ? 'disable' : 'error'">
          {{ $t('robot_command.delete') }}
        </text-button>
        <!-- <text-button 
          v-if="canEdit"
          @click="popMoveToCategory"
          :button-type="this.checkedCommand.length === 0 ? 'disable' : 'default'">
          {{ $t('robot_command.moveto') }}
        </text-button> -->
      </div>
      <general-table id="content-table" 
        :tableHeader="tableHeader" :tableData="tableData" :action="tableAction"
        @checkedChange="handleCheckedChange" checkbox
        showEmpty></general-table>
    </div>
    <div id="card-content-footer">
      <v-pagination size="small" :total="curTotal" :pageIndex="curPageIdx" :pageSize="pageLimit" :layout="['prev', 'pager', 'next', 'jumper']" @page-change="handlePageChange"></v-pagination>
    </div>

    <div id="content-blocker" v-if="isEditMode"></div>
  </div>
</template>
<script>
import labelAPI from '@/modules/SSM/_api/qalabel';
import CommandEditPop from './RobotCommandEditPop';
import api from '../_api/command';

export default {
  api: [labelAPI, api],
  props: {
    value: {
      type: Array,
      default() {
        return [];
      },
    },
    isEditMode: {
      type: Boolean,
      default: false,
    },
    currentCategoryId: {
      type: Number,
      default: -1,
    },
    canEdit: {
      type: Boolean,
      default: false,
    },
    canDelete: {
      type: Boolean,
      default: false,
    },
    canCreate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      appid: this.getAppID('appid'),
      labels: [],

      commands: [],
      filteredCommands: [],
      currentCommands: [],

      commandKeyword: '',
      tableHeader: [
        {
          key: 'command',
          text: this.$t('robot_command.command_name'),
          width: '160px',
        },
        {
          key: 'keyword',
          text: this.$t('robot_command.command_keyword'),
          width: '180px',
        },
        {
          key: 'tag',
          text: this.$t('robot_command.command_tag'),
          type: 'tag',
        },
        {
          key: 'status',
          text: this.$t('robot_command.command_status'),
          type: 'toggle',
          width: '60px',
        },
      ],
      tableAction: [],

      checkedCommand: [],

      curPageIdx: 1,
      pageLimit: 20,
    };
  },
  computed: {
    tableData() { // This is curPage
      const that = this;
      // Handle empty data cause curPageIdx to zero;
      if (that.curPageIdx <= 0) {
        that.toFirstPage();
      }

      const startIdx = (that.curPageIdx - 1) * that.pageLimit;
      const endIdx = startIdx + that.pageLimit;

      function getKeyword(rules) {
        const keywordRules = rules.filter(rule => rule.type === 'keyword')
                                  .map(rule => rule.value[0]);
        return keywordRules.join('/');
      }
      function getLabelName(tags) {
        return that.labels.filter(label => tags.indexOf(label.id) !== -1)
                          .map(label => label.name);
      }
      return that.currentCommands.slice(startIdx, endIdx)
        .map((cmd) => {
          const tablerow = {
            id: cmd.id,
            command: cmd.name,
            keyword: getKeyword(cmd.rule),
            tag: getLabelName(cmd.labels),
            status: {
              val: cmd.status,
              onclick: that.toggleCommandStatus,
            },
          };
          return tablerow;
        });
    },
    curTotal() {
      return this.currentCommands.length;
    },
    lastPageIdx() {
      return Math.floor((this.curTotal - 1) / this.pageLimit) + 1;
    },
  },
  watch: {
    value() {
      this.loadCurrentCommands();
      this.currentCommands = this.commands;
    },
    commands() {
      this.commandKeyword = '';
      this.currentCommands = this.commands;
      this.filteredCommands = [];
    },
    // currentCategory() {
    //   this.loadCurrentCommands();
    //   this.currentCommands = this.commands;
    // },
    commandKeyword() {
      if (this.commandKeyword !== '') {
        this.filteredCommands = this.commands
          .filter(cmd => cmd.name.indexOf(this.commandKeyword) !== -1);
        this.currentCommands = this.filteredCommands;
      } else {
        this.currentCommands = this.commands;
        this.filteredCommands = [];
      }
      this.toFirstPage();
    },
    lastPageIdx() {
      if (this.curPageIdx > this.lastPageIdx) {
        this.toCurPage(this.lastPageIdx);
      }
    },
  },
  methods: {
    loadTableActionByPrivilege() {
      if (this.canEdit) {
        this.tableAction.push({
          text: this.$t('robot_command.edit'),
          type: 'primary',
          onclick: this.editCommand,
        });
      }
      if (this.canDelete) {
        this.tableAction.push({
          text: this.$t('robot_command.delete'),
          type: 'error',
          onclick: this.deleteCommand,
        });
      }
    },
    toFirstPage() {
      this.curPageIdx = 1;
    },
    toCurPage(page) {
      this.curPageIdx = page;
    },
    handlePageChange(page) {
      if (page <= 0) {
        this.toFirstPage();
      } else {
        this.toCurPage(page);
      }
    },
    toggleCommandStatus(data) {
      const command = this.currentCommands.find(cmd => cmd.id === data.id);
      command.status = !command.status;
      this.$api.editRobotCommand(command)
        .then((rsp) => {
          const rspCommand = this.parseCommand(rsp);
          const theCommandIdx = this.currentCommands
            .findIndex(cmd => cmd.id === rspCommand.id);
          this.currentCommands.splice(theCommandIdx, 1, command);
        })
        .catch((err) => {
          console.log(err);
          this.$notifyFail(this.$t('robot_command.error.edit_command_fail'));
          // should reset status in tableData
          const theCommandIdx = this.currentCommands
            .findIndex(cmd => cmd.id === command.id);
          this.currentCommands.splice(theCommandIdx, 1, command);
        });
    },
    editCommand(data) {
      const command = this.currentCommands.find(cmd => cmd.id === data.id);
      this.popEditCommand(command);
    },

    popAddCommand() {
      const command = {
        id: undefined,
        status: false,
        name: '',
        target: 0,
        response_type: 0,
        begin_time: null,
        end_time: null,
        answer: '',
        rule: [],
        labels: [],
      };
      const options = {
        component: CommandEditPop,
        title: this.$t('robot_command.add_command'),
        data: {
          command,
        },
        validate: true,
        callback: {
          ok: (addedCommand) => {
            const cid = this.currentCategoryId;
            this.$api.addRobotCommand(cid, addedCommand)
            .then((cmd) => {
              this.commands.splice(0, 0, cmd);
              this.loadLabels();
            })
            .catch((err) => {
              console.log(err);
              this.$notifyFail(this.$t('robot_command.error.add_command_fail'));
            });
          },
        },
      };
      this.$pop(options);
    },
    popEditCommand(command) {
      const options = {
        component: CommandEditPop,
        title: this.$t('robot_command.edit_command'),
        data: {
          command,
        },
        validate: true,
        callback: {
          ok: (editedCommand) => {
            this.$api.editRobotCommand(editedCommand)
            .then((rspCommand) => {
              const theCommandIdx = this.commands
                .findIndex(cmd => cmd.id === rspCommand.id);
              this.commands.splice(theCommandIdx, 1, rspCommand);
              this.loadLabels();
            })
            .catch((err) => {
              console.log(err);
              this.$notifyFail(this.$t('robot_command.error.edit_command_fail'));
            });
          },
        },
      };
      this.$pop(options);
    },
    // popMoveToCategory() {
    //   if (this.checkedCommand.length === 0) {
    //     return;
    //   }
    //   // const commandsToMove = this.checkedCommand;
    //   const options = {
    //     // component: MoveToPop,
    //     title: this.$t('wordbank.moveto_wordbank'),
    //     validate: true,
    //     callback: {
    //       ok: (toCid) => {
    //         console.log(toCid);
    //       },
    //     },
    //   };
    //   this.$pop(options);
    // },
    deleteCommand(data) {
      const option = {
        data: {
          msg: this.$t('robot_command.delete_command_msg', { name: data.command }),
        },
        callback: {
          ok: () => {
            this.confirmDeleteCommand(data.id);
          },
        },
      };
      this.$popCheck(option);
    },
    confirmDeleteCommand(id) {
      // api call
      this.$api.deleteRobotCommand(id)
        .then(() => {
          const theCommandIdx = this.commands
            .findIndex(cmd => cmd.id === id);
          this.commands.splice(theCommandIdx, 1);
        })
        .catch((err) => {
          console.log(err);
          this.$notifyFail(this.$t('robot_command.error.delete_command_fail'));
        });
    },
    deleteMultiCommand() {
      if (this.checkedCommand.length === 0) {
        return;
      }
      const option = {
        data: {
          msg: this.$t('robot_command.delete_multi_command_msg'),
        },
        callback: {
          ok: () => {
            let cmd = this.checkedCommand.shift();
            while (cmd !== undefined) {
              this.confirmDeleteCommand(cmd.id);
              cmd = this.checkedCommand.shift();
            }
          },
        },
      };
      this.$popCheck(option);
    },
    handleCheckedChange(checked) {
      this.checkedCommand = checked;
    },
    loadCurrentCommands() {
      if (!this.isEditMode) {
        this.commands = this.value.map(rule => this.parseCommand(rule));
      }
    },
    parseCommand(cmd) {
      return {
        id: cmd.id,
        name: cmd.name,
        labels: cmd.labels,
        begin_time: cmd.begin_time,
        end_time: cmd.end_time,
        rule: cmd.rule,
        status: cmd.status,
        target: cmd.target,
        answer: cmd.answer,
        response_type: cmd.response_type,
      };
    },
    loadLabels() {
      const that = this;
      that.$emit('startLoading');
      that.$api.loadLabels(that.appid).then((labels) => {
        if (labels.error_code === 0) {
          that.labels = labels.data.tag;
        } else {
          that.$popError(labels.error_message);
        }
      }, () => {
        // TODO: handle error if status code is not 500,
      })
      .then(() => {
        that.$emit('endLoading');
      });
    },
    getAppID(name) {
      const label = `${name}=`;
      const ca = document.cookie.split(';');
      let appId = '';
      ca.forEach((val) => {
        let c = val;
        if (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(label) !== -1) {
          appId = c.substring(label.length, c.length);
          return true;
        }
        return true;
      });
      return appId;
    },
  },
  mounted() {
    this.loadLabels();
    this.loadTableActionByPrivilege();
  },
};
</script>
<style lang="scss" scoped>
@import 'styles/variable';
#card-content {
  position: relative;
  display: flex;
  flex-direction: column;
  #card-content-header {
    flex: 0 0 72px;
    padding: 20px;
    padding-bottom: 24px;
    border-bottom: 1px solid $color-borderline;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #io-buttons {
      display: flex;
      justify-content: space-between;
      .text-button {
        margin: 0 5px;
      }
      :last-child {
        margin-right: 0px;
      }
    }
  }
  #card-content-content {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    #toolbar {
      flex: 0 0 auto;
      margin: 10px 20px;
      display: flex;
      .text-button {
        margin: 0 5px;
      }
      :first-child {
        margin-left: 0px;
      }
    }

    #content-table {
      overflow: hidden;
    }
  }
  #card-content-footer {
    border-top: 1px solid $color-borderline;
    flex: 0 0 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  #content-blocker {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.55);
  }
}
</style>