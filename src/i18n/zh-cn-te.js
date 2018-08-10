export default {
  task_engine_v2: {
    scenario_edit_page: {
      tabs: {
        node: '节点',
      },
      node_type: {
        dialogue: '对话节点',
        restful: 'RESTful数据调用节点',
        nlu_pc_node: 'nlu参数收集节点',
        parameter_collecting: '参数收集节点',
        router: '转发',
      },
    },
    node_edit_page: {
      tabs: {
        trigger: '触发',
        setting: '基本设置',
        edge: '连线',
      },
    },
  },
  task_engine_v3: {
    wizard_mode: {
      side_menu_tab: {
        scenario_list: '场景列表',
        entity_list: '自定义实体(TBA)',
      },
    },
    scenario_list_page: {
      button_create_new_scenario: '创建场景',
      button_import_scenario: '导入',
      scenario_list: '新版场景列表',
      ask_delete_confirm: '确认要删除场景：{scenario}',
    },
    import_scenario_pop: {
      label_title: '导入场景',
      radio_json_format: '原文件(JSON格式)',
      radio_xlsx_format: 'Spreadsheet 格式',
      button_upload_file: '上传档案',
      label_choose_file: '请选择档案',
      button_download_template: '下载 Spreadsheet 范本',
      tooltip_json_import: '手动新增的场景，导出为JSON格式，可再导入使用',
      tooltip_xlsx_import: '导入Spreadsheet格式的场景 (支援扩展名.xlsx)',
      upload_file_undefined: '档案无法辨识',
      upload_file_size_error: '档案大小需介于 0 ~ 2M',
      upload_file_type_invalid: '档案格式限 {format} 档',
    },
    scenario_edit_page: {
      main_skill: '主任务',
      placeholder_name_the_scenario: '为场景取名',
      tab: {
        trigger: '触发场景',
        entity_collecting: '收集信息',
        action: '执行动作',
      },
      toast_save_success: '储存成功！',
      button_save_and_next_step: '储存并下一步',
      switch_on: '启动',
      switch_off: '停用',
      tooltip_skill_edit: '场景的任务管理',
    },
    condition_card: {
      if: '当',
      and: '而且',
      operators: {
        present: '存在',
        not_present: '不存在',
        contain: '包含',
        not_contain: '不包含',
        greater_than: '大于',
        smaller_than: '小于',
        equal_to: '等于',
        not_equal_to: '不等于',
        belong_to: '属于',
        not_belong_to: '不属于',
      },
      context_targets: {
        on_complete: '蒐集完所有参数',
        on_cancel: '用户取消参数蒐集',
        on_transfer_to_manual: '触发转人工意图',
        on_parse_fail: '用户发话理解失败',
      },
      target_type: {
        entity: '信息实体',
        context: '场景现况',
      },
    },
    action_group: {
      button_add_new_condition: '＋过滤条件',
      button_delete_action_group: '移除',
    },
    trigger_page: {
      label_add_trigger: '这个场景会被哪些意图触发？',
      button_add_trigger: '加入',
      description: '设定场景的进入条件，只有当使用者与机器人的对话满足预设的触发条件，会进入此场景，触发相对应的多轮对话。',
      placeholder_import_intent_first: '请先导入意图',
    },
    create_scenario_pop: {
      label_create_new_scenario: '创建新场景',
      label_name_the_scenario: '给场景取个名字：',
      placeholder_enter_scenario_name: '输入场景名称...',
    },
    create_skill_pop: {
      label_title: '创建新任务',
      label_skill_name: '任务名称',
      placeholder_enter_skill_name: '输入任务名称...',
    },
    edit_skill_pop: {
      label_title: '场景任务管理',
      label_skill_name: '任务名称',
      button_add_skill: '新增任务',
      button_delete_skill: '删除',
      tooltip_empty_name: '不能为空白',
      warn_delete_skill: '您确认要删除此任务吗？',
    },
    intent_editor_pop: {
      label_edit_intent: '编辑意图',
      label_add_new_intent: '新增意图',
      label_intent_name: '意图名称：',
      placeholder_intent_name: '输入意图名称...',
      label_training_phrase: '当使用者说出以下句子的时候，此意图会被触发：',
      placeholder_user_says: '使用者怎么说...',
    },
    intent_tester_pop: {
      label_test_intent: '测试意图(TBA)',
      label_intent_test_phrase: '意图测试句：',
      placeholder_user_says: '使用者怎么说...',
      button_start_to_predict: '开始预测(TBA)',
      label_intent_predict_result: '意图预测结果：',
      button_upload_batch_phrases: '上传批量测试资料(TBA)',
    },
    action_page: {
      description: '蒐集所有必要的讯息后，你需要执行什么动作来完成任务？',
      label_add_action: '蒐集所有必要的讯息后，你需要执行什么动作来完成任务？',
      button_add_new_msg: '新增文字回应',
      button_add_new_webhook: '新增外部服务连接',
      button_add_new_goto: '新增下一个任务连接',
    },
    action_card: {
      label_msg_type: '文字回应',
      label_webhook_type: '外部服务连接',
      label_goto_type: '下一个任务连接',
      msg: {
        label_response: '回应',
      },
      webhook: {
        label_variable: 'API回传值存放位置',
        label_method: '调用方法',
        label_url: '服务提供位址(URL)',
        label_content_type: 'Content-Type',
        label_body: 'Body',
        placeholder_input_variable: '请为变量取名',
        placeholder_input_url: 'http://api.server.com/webhook',
        placeholder_input_body: '{"parameter":"value"}',
      },
      goto: {
        label_goto: '前往',
        label_goto_next_skill: '连接下一个任务',
        button_add_new_task: '建立新任务',
        option_finish_scenario: '结束场景',
      },
    },
    entity_collecting_page: {
      title: '在此场景中，您需要收集使用者的哪些信息？',
      title_description: '设定此对话场景需要收集的信息，以及各信息的对应问句',
      advanced_config: '进阶设定',
      add_new_entity_collector: '+新增抽取信息',
      edit_entity_relation: '设置实体关联性',
      edit_sentence_replacement: '设置语句替换',
      edit_tde_setting: '设置TDE属性',
      edit_register_json: '编辑注册JSON',
      order: '排序',
      order_description: '询问用户信息的顺序，可透过拖曳方式改变信息询问的顺序',
      required: '必要',
      required_description: '若勾选代表设定为必要提取信息，则超过重试次数限制后会跳出场景。若没勾选代表设定为非必要提取信息，则超过重试次数限制后会接续下个信息的询问',
      entity_name: '信息名称',
      entity_name_placeholder: '请填入信息名称',
      entity_name_description: '用来识别信息的名称，后续执行动作时可用来作为变量名称使用',
      entity_category: '分类',
      entity_type: '信息实体型别',
      entity_type_description: '请先选择欲使用的实体型别分类，再选择对应的实体型别',
      prompt: '信息对应问句',
      prompt_placeholder: '请填入信息对应问句',
      prompt_description: '用来询问使用者信息的语料，若留空将带入预设语料',
      retry_times: '重试次数',
      retry_times_description: '若无法从用户回答的语句中提取期望信息，将会反覆询问，直到超过重试次数',
      delete: '刪除',
    },
    custom_entity_type_editor_pop: {
      title: '新增自定义实体型别',
      entity_type: '实体型别名称',
      entity_type_description: '实体型别描述',
      entity_category: '实体型别所属分类',
      upload_entity_table: '上传实体列表',
      add_row: '+新增列',
      synonyms_table: {
        entity: '实体',
        entity_placeholder: '请输入实体',
        synonyms: '同义词',
        synonyms_placeholder: '请输入同义词(请使用,分隔)',
      },
    },
    entity_management: {
      title: '自定义实体',
      create_new_entity_type: '新增实体型别',
      search_placeholder: '搜寻...',
      entity_type: '实体型别',
      create_date: '创建日期',
      cagegory: '分类',
      description: '描述',
      operation: '操作',
    },
    prompt_editor_pop: {
      title: '设定信息提取机制',
      set_retry_num: '信息提取失败重试，次数',
      set_as_required: '设定为必要题取信息',
    },
    error_msg: {
      request_failed: '请求失败',
      please_enter_the_scenario_name: '请为场景取名',
      please_enter_the_skill_name: '请为任务取名',
      create_new_scenario_failed: '场景创建失败',
      custom_entity_list_length_must_greater_than_two: '至少两个以上的信息使用自定义实体型别，才可设置实体关联',
    },
    entity_relation_editor_pop: {
      title: '实体关联性设置',
      main_entity: '主要实体',
      related_entity: '关联实体',
      add_row: '新增列',
      add_column: '新增栏',
      entity_type: '实体型别',
      entity: '实体',
    },
    sentence_replacement_editor_pop: {
      title: '语句替换设置',
      pattern: '语句比对模式',
      text: '替换语句',
      pattern_placeholder: '请输入要比对的语句模式',
      text_placeholder: '请输入要替换成的语句',
      add_replacement_rule: '新增',
      delete_replacement_rule: '删除',
    },
    tde_setting_editor_pop: {
      title: 'TDE属性设置',
      nlgTemplate: '模版：',
      service: '服务：',
      jumpOutTimes: '跳出场景重试次数上限值：',
    },
    register_json_editor_pop: {
      title: '编辑注册JSON',
      title_description: '若自行编辑注册JSON，将使用JSON的设定，即原有介面上的设定会失效',
    },
  },
};
