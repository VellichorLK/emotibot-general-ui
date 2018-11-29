export default {
  task_engine_v2: {
    err_empty: '不可为空',
    scenario_list_page: {
      button_create_new_scenario: '创建场景',
      button_import_scenario: '导入',
      button_export_all_scenarios: '导出全部场景',
      scenario_list: '场景列表',
      ask_delete_confirm: '确认要删除场景：{scenario}',
      publish: '发布',
      edit: '编辑',
      publish_succeed: '场景发布成功',
      publish_failed: '场景发布失败',
      create_new_scenario_failed: '场景建立失败',
      start_scenario: '开始创建您的第一个多轮场景吧！',
      help_video: '教学视频',
      upload_transfor_data: '上传转换数据',
    },
    node_type: {
      entry: '入口节点',
      dialogue: '对话节点',
      restful: 'RESTful数据调用节点',
      nlu_pc: 'TDE参数收集节点',
      parameter_collecting: '参数收集节点',
      action: '动作节点',
      dialogue_description: '与使用者进行交互的节点',
      restful_description: '使用RESTful接口调用数据',
      nlu_pc_description: '利用TDE接口收集所需参数的节点',
      parameter_collecting_description: '收集所需参数的节点',
      action_description: '执行动作的节点',
    },
    parser: {
      none: '无',
      common_parser: '通用语句解析器',
      task_parser: '场景语句解析器',
      hotel_parser: '酒店预定语句解析器',
    },
    to_node_option: {
      exit: 'Exit',
      do_nothing: 'do nothing',
      parse_fail: '解析失败处理',
      add_new_dialogue_node: '新增对话节点',
    },
    scenario_edit_page: {
      tabs: {
        node: '节点',
      },
      ask_delete_node_confirm: '确认要删除节点：{node}',
      setting: '设置',
      global_var_template: '变量模版',
      global_edge: '通用连线',
      global_js_code: 'JS脚本',
      export: '导出',
      publish: '发布',
      add_node: '新增节点',
      add_node_instruction: '拖拉下方的节点至场景中',
      new_edge_exceed_then_goto: '当出话超过上限',
      new_edge_else_into: '当所有规则都无法符合时',
      new_edge_normal: '自定义',
      new_edge_restful_success: '当调用成功',
      new_edge_restful_fail: '当调用失败',
      new_edge_pc_success: '成功取得所有参数',
      new_edge_pc_fail: '连续解析失败超过上限',
      back_to_scenario_list: '返回',
      advanced_config: '更多操作',
    },
    node_edit_page: {
      tabs: {
        trigger: '触发',
        setting: '基本设置',
        edge: '连线',
        params_collecting: '参数设置',
        action: '动作',
      },
      confirm_to_save_changes: '节点内容已被更动，请问是否需要保存？',
    },
    scenario_settings_edit_pop: {
      scenario_name: '场景名称',
      err_empty_scenario_name: '场景名称不可为空',
      scenario_dialogue_cnt_limit: '全场景对话数',
      err_empty_scenario_dialogue_cnt_limit: '全场景对话数不可为空',
      default_node_dialogue_cnt_limit: '预设节点对话数',
      err_empty_default_node_dialogue_cnt_limit: '预设节点对话数不可为空',
      confirm_to_save_changes: '场景基本设置已被更动，请问是否需要保存？',
    },
    var_template_edit_pop: {
      instruction: '为每个变量设定显示模版',
      label_key: '键',
      err_empty_label_key: '键不可为空',
      label_template: '模版',
      err_empty_label_template: '模版不可为空',
      button_add_template: '＋增加模版',
      confirm_to_save_changes: '变量模版设置已被更动，请问是否需要保存？',
    },
    global_edge_edit_pop: {
      instruction: '为每个节点增加通用的连线',
      add_new_dialogue_node: '新增对话节点',
      button_add_edge: '＋增加连线',
      confirm_to_save_changes: '通用连线设置已被更动，请问是否需要保存？',
    },
    trigger_edit_tab: {
      instruction: '设置触发此场景的条件',
      button_add_rule: '＋增加规则',
    },
    setting_edit_tab: {
      node_type: '节点类型',
      node_name: '节点名称',
      default_q: '预设文本',
      insert_var: '插入变量',
      insert_sys_var: '插入系统变量',
      all_sys_var: '所有系统变量',
      unconfirmed_sys_var: '尚未确认的系统变量',
      parse_text: '语句解析',
      parse_fail_q: '解析失败文本',
      parser: '解析器：',
      target_data: '提取数据 (可多选)：',
      skip_if_exist: '若已提取以下任一数据则跳过出话和数据提取：',
      parse_from_this_node: '限定由此节点提取：',
    },
    params_collecting_tab: {
      button_add_params: '＋增加参数',
      parser: '解析器',
      required: '必要',
      button_add_parser: '＋增加解析器',
      msg: '参数询问文本（询问使用者参数的语句）',
      msg_description: '当收集框中所有被勾选为必要的参数『全部都还没有』收集到时，才会使用此参数询问文本做询问。如果已经收集到其中一个必要参数，则会跳过此收集框。建议为每一个必要参数都另外设置一个单独的收集框，以确保有任何一个必要参数时缺少时都有相对应的询问话术。',
      parse_failed_msg: '解析失败文本（参数解析失败时，回复给使用者的语句）',
      skip_if_key_exit: '参数检查',
      skip_if_key_exit_info: '当收集到以下参数则跳过问句，请使用逗号分隔参数名称',
      label_enable_confirm_msg: '收集完成确认文本：',
    },
    params_collecting_edge_tab: {
      succeed: '成功',
      succeed_description: '取得所有必要参数',
      failed: '失敗',
      failed_description: '参数连续解析失败',
      virtual_global_edges: '通用连线',
      virtual_global_edges_description: '在这个位置插入通用连线',
    },
    edge_edit_tab: {
      instruction: '使用连线连接此节点与其他节点',
      button_add_edge: '＋增加连线',
      label_then_goto: '则前往',
      label_exceed_limit: '超过轮次',
      instruction_exeed_limit: '当此节点出话超过',
      label_time: '次',
      label_default_goto: '预设前往',
      instruction_default_goto: '当所有规则都无法符合时',
    },
    restful_setting_edit_tab: {
      restful_data_retrieve: 'RESTful数据调用',
      data_save_in_key: '数据存放变量（key）：',
      method: '调用方法：',
      url: '调用URL：',
    },
    restful_edge_edit_tab: {
      success: '调用成功',
      fail: '调用失败',
      label_then_goto: '则前往',
    },
    action_edit_tab: {
      wait_for_response: '等待用户回复：',
    },
    condition_block: {
      label_content: '内容',
      button_add: '＋增加',
      button_remove: '移除',
      label_pattern: '模式',
      label_nth_match: '第几符合词',
      label_mapping_table: '转换数据',
      label_source_key: '来源键',
      label_target_key: '目的键',
      label_link: '连结',
      label_similarity_threshold: '相似度门槛',
      label_sentence: '句子',
      label_compare_operator: '比较方式',
      label_key: '键',
      label_value: '值',
      node_counter: '若超过节点对话轮数限制',
      scenario_counter: '若超过全场景对话轮数限制',
      source: {
        text: '用户输入文本',
        global_info: '场景已收集数据',
        cu: '语句解析数据',
      },
      func: {
        match: '完全相符',
        contains: '包含文本',
        regular_exp: '正则表示式',
        hotel_parser: '酒店预定语句解析器',
        common_parser: '通用语句解析器',
        task_parser: '场景语句解析器',
        user_custom_parser: '转换数据解析器',
        polarity_parser: '是否判断解析器',
        api_parser: 'Web API 调用',
        qq: '语句相似度',
        key_val_match: '键值匹配',
        key_key_match: '键键匹配',
        contain_key: '包含键',
        not_contain_key: '不包含键',
        list_length_match: '序列长度匹配',
        counter_check: '轮次检查',
        user_custom_transform: '转换数据',
        regular_exp_from_var: '正则表示式',
        assign_value: '赋值',
        remove_key: '删除键',
        cu_parser: '语句解析数据提取',
        custom_cu_parser: '自定义语句解析数据提取',
        intent_parser: '意图',
        js_code: 'JS脚本',
      },
      operator: {
        equal_to: '等于',
        not_equal_to: '不等于',
        greater_than: '大于',
        greater_or_equal_to: '大于等于',
        less_than: '小于',
        less_or_equal_to: '小于等于',
        ignore_case_compare: '忽略大小写等于',
        reg_exp: '正则表示式',
        in: '包含于',
      },
      intent: 'Intent',
    },
    warnings: {
      has_exit_connection: '出口节点',
      missing_inbound_connection: '请新增至少一个指向此节点的连线',
      missing_outbound_connection: '请在此节点新增至少一个指向其他节点的连线',
      missing_entry_trigger: '缺少触发条件',
      missing_response: '预设文本栏位不能为空白，请填入询问语句。',
      missing_failure_response: '解析失败文本栏位不能为空白，请填入解析失败时的提示语句。',
      missing_pc_response: '参数询问文本栏位不能为空白，请填入询问语句。',
      missing_pc_failure_response: '解析失败文本栏位不能为空白，请填入解析失败时的提示语句。',
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
      scenario_list: 'TDE场景列表',
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
      label_create_new_scenario: '创建场景',
      label_name_the_scenario: '场景名称：',
      placeholder_enter_scenario_name: '输入场景名称',
      placeholder_enter_template: '请选择场景模版',
      create_scenario: '场景创建',
      scenario_name: '场景名称',
      scenario_temp: '场景模版',
      comfire_create: '确定创建',
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
      description_2_0: '蒐集所有必要的讯息后，你需要执行什么动作来完成任务？',
      label_add_action_2_0: '蒐集所有必要的讯息后，你需要执行什么动作来完成任务？',
      description: '进入此节点后，你需要执行什么动作来完成任务？',
      label_add_action: '进入此节点后，你需要执行什么动作来完成任务？',
      button_add_new_msg: '新增文字回应',
      button_add_new_webhook: '新增外部服务连接',
      button_add_new_goto: '新增下一个任务连接',
      button_add_new_edge: '新增连线',
    },
    action_card: {
      label_msg_type: '文字回应',
      label_webhook_type: '外部服务连接',
      label_goto_type_2_0: '下一个任务连接',
      label_goto_type: '连线至下一个节点',
      msg: {
        label_response: '回应',
      },
      webhook: {
        label_variable: 'API回传值存放位置',
        label_method: '调用方法',
        label_url: '服务提供位址(URL)',
        label_content_type: 'Content-Type',
        label_body: 'Body',
        label_webhook_success: '成功时前往',
        label_webhook_fail: '失败时前往',
        placeholder_input_variable: '请为变量取名',
        placeholder_input_url: 'http://api.server.com/webhook',
        placeholder_input_body: '{"parameter":"value"}',
      },
      goto: {
        label_goto: '前往',
        button_add_new_skill: '创建新任务',
        option_finish_scenario: '结束场景',
      },
    },
    entity_collecting_page: {
      title: '在此场景中，您需要收集使用者的哪些信息？',
      title_description: '设定此对话场景需要收集的信息，以及各信息的对应问句',
      advanced_config: '进阶设定',
      add_new_entity_collector: '新增抽取信息',
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
