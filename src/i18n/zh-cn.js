export default {
  privileges: {
    role: '角色',
    user: '用户',
    password: '密码',
    role_name: '角色名',
    user_name: '用户名',
    privileges: '权限',
    user_count: '用户数',
    function_priv: '功能权限',

    placeholder_user_name: '请输入用户名',
    placeholder_password: '请输入密码',
    placeholder_modify_password: '若要变更则输入密码',
    placeholder_input_role_name: '请输入角色名',

    enterprise_admin: '企业管理员',

    no_roles: '无角色存在',
    no_users: '无用户存在',
    all_active: '开启全部',
    all_deactive: '关闭全部',

    check_delete: '确认要删除角色：{role}',
    check_delete_user: '确认要删除用户：{user}',
    delete_success: '删除成功',
    err_need_create_role: '请先新增角色',
    err_role_empty: '角色不可为空',

    actions: {
      edit: '编辑',
      view: '查看',
      create: '新增',
      delete: '删除',
      export: '导出',
      import: '导入',
    },

    modules: {
      statistic_dash: '统计概览',
      statistic_analysis: '统计分析',
      statistic_daily: '日志管理',
      statistic_audit: '操作记录',

      ssm: '常用标准问题',
      qa_label: '标签管理',

      qalist: '问答库',
      qatest: '对话测试',
      qa_chat_skill: '话术设置',
      qa_rule: '规则管理',

      robot_profile: '机器人形象',
      robot_chat_skill: '话术设置',
      robot_function: '技能设置',
      robot_command: '指令设置',
      wordbank: '词库',
      task_engine: '任务引擎',

      management: '权限管理',
    },
    tools: {
      encrypt: {
        title: '加密工具',
        button: '加密',
        copy_button: '复制',
        placeholder: {
          encrypt_from: '输入欲加密的文字',
          encrypt_to: '加密结果会显示在这里',
        },
        fail: '加密失败',
        copied: '已复制加密文字',
      },
    },
  },
  login: {
    title: '用户登陆',
    login: '登入',
    account_place: '输入帐号',
    password_place: '输入密码',
    contact_sm: '无法登陆？请联络管理人员',
  },
  category: {
    all: '全部',
    no_category: '未分类',
    delete_category_msg: '确定要删除分类 {name} 及其子分类吗？',
  },
  statistics: {
    answer: '回答',
    score: '匹配分数',
    chat_num: '聊天数',
    total_asks_num: '提问数',
    session_num: '会话数',
    unique_user: '独立用户',
    time: '时间',
    platform: '平台',
    brand: '渠道',
    sex: '性别',
    age: '年龄段',
    hobbies: '购买爱好',
    day: '天',
    selection: '统计项',
    visit_record: '访问数据统计',
    dimension: '维度',
    qa_record: '问答类别统计',
    user_question: '用户问句',
    count: '提问次数',
    hot_question: '热点问题',
    failed_question: '未匹配问题',
    unresolve_question: '未解决问题',
    standard_question: '标准问题',
    standard_question_path: '所属目录',
    question_first_time: '首次提问时间',
    question_last_time: '末次提问时间',
    audit_record_filename: '操作日志',

    keyword_search: '关键词查询',
    time_range: '时间段',
    user_id: '用户ID',
    user_nick: '用户昵称',
    module: '模组',
    action: '动作',

    filter: '筛选条件',
    export_mode: '高级筛选',
    total_records: '共有 {num} 条日志',

    categories: {
      title: '维度',
      platform: '平台',
      brand: {
        title: '渠道',
        special_app: '特卖会APP',
        baby_app: '母婴APP',
        pc: 'PC端',
        wap: 'WAP端',
        wechat_public: '微信公众号',
        vshhc: '花海仓',
        spiceal_app_new: '特卖会app准新客',
        qq_public: 'QQ公众号',
        lefeng_app: '乐蜂APP',
      },
      sex: {
        title: '性别',
        0: '男',
        1: '女',
      },
      age: '年龄段',
      hobbies: {
        title: '购买爱好',
        0: '非准新客',
        1: '准新客',
      },
    },

    emotions: {
      title: '情感',
      angry: '愤怒',
      not_satisfied: '不满',
      satisfied: '满意',
      neutral: '中性',
    },

    qtypes: {
      title: '问答类别',
      business: '业务',
      chat: '聊天',
      other: '其他',
    },

    audit: {
      op_module: '操作模块',
      op_type: '操作类型',
      user_id: '用户ID',
      nickname: '用户昵称',
      module: '功能名称',
      operation: '动作名称',
      content: '动作描述',
      result: '动作结果',
      create_time: '发生时间',
      ip_source: 'IP地址',
    },

    user_say: '用户提问',
    robot_say: '机器人回答',
  },
  robot_setting: {
    model_rebuild: '重新建模',
    rebuild_msg: '点击“重新建模”，您的所有配置将于10分钟左右生效，在此期间将不能再次点击按钮，建议将所有修改都完成后再点“重新建模”，避免您的等待时间。如果忘记点击也没关系，自动重新建模是一小时一次。',
    chat_info_desc: '我的名字叫 {name}，你可以在下面设置我的形象喔',
    modify_qas: '修改语料',
    input_qa_placeholder: '请输入答案',
    input_qa_ext_placeholder: '请输入答案扩展',

    weather: '天气模块',
    computation: '数学计算模块',
    joke: '笑话模块',
    story: '讲故事模块',
    riddle: '猜谜语模块',
    chengyu: '成语模块',
    all_active: '全部开启',
    all_deactive: '全部关闭',
    general_function: '通用技能',
  },
  robot_command: {
    add_command: '创建指令',
    delete: '删除',
    moveto: '移至',
    edit: '编辑',
    edit_command: '编辑指令',
    command_name: '指令名称',
    command_keyword: '关键字',
    command_tag: '关联标签',
    command_status: '状态',
    delete_command_msg: '确定要删除指令 {name} 吗？',
    delete_multi_command_msg: '确定要删除所选指令吗？',
    editpop: {
      command: {
        title: '指令名称',
      },
      rule: {
        title: '规则适用对象',
        to_question: '用户问题',
        to_answer: '出话内容',
      },
      tag: {
        title: '关联标签',
      },
      keyword: {
        title: '触发关键字',
        advanced: '进阶设定',
        regex: '正则式',
        keyword_placeholder: '关键字以 "/" 隔开',
      },
      datetime: {
        title: '生效时间',
        forever: '永远',
        custom: '自订',
      },
      reply: {
        title: '回复内容',
        intext: '文字格式',
        injson: 'JSON格式',
        intext_placeholder: '纯文字',
        injson_placeholder: '输入JSON',
      },
      reply_place: {
        title: '回复位置',
        replace: '取代问答',
        before: '在回答之前使用',
        after: '在回答之后使用',
      },
    },
    error: {
      load_commands_fail: '载入指令失败',
      add_new_tag_fail: '新增标签失败',
      add_command_fail: '创建指令失败',
      edit_command_fail: '编辑指令失败',
      delete_command_fail: '删除指令失败',
      name_input_empty: '指令名称不得为空',
      date_format_error: '开始时间不得晚于结束时间',
      reply_format_json_error: 'JSON格式错误',
    },
  },
  wordbank: {
    wordbank: '词库',
    synonym: '同义词',
    categories: '分类',
    setting: '设置',
    leave_setting: '离开设置',
    edit: '编辑',
    delete: '删除',
    moveto: '移至',
    add_wordbank: '新增词库',
    edit_wordbank: '编辑词库',
    moveto_wordbank: '移动项目至...',
    add_rootcategory: '新增第一层分类',
    add_subcategory: '新增子分类',
    delete_category: '删除分类',
    delete_category_msg: '确定要删除分类 {name} 及其子分类吗？',
    delete_wordbank_msg: '确定要删除词库 {name} 吗？',
    delete_multi_wordbank_msg: '确定要删除所选词库吗？',
    placeholder_category_name: '输入分类名称',
    placeholder_synonym: '输入同义词， Enter加入下方列表',
    empty_category_search_result: '无符合分类',
    all: '全部',
    no_category: '未分类',
    default: '预设',
    define: '自订',
    sensitive_wordbank: '敏感词库',
    sensitive_word: '敏感词回应',
    batch_import: '批量导入',
    export_all: '全部导出',
    success: {
      moved: '词库已移动',
    },
    error: {
      load_wordbanks_fail: '载入词库失败',
      edit_category_name_fail: '编辑分类名失败',
      add_category_fail: '新增分类失败',
      delete_category_fail: '删除分类失败',
      edit_wordbank_fail: '编辑词库失败',
      add_wordbank_fail: '新增词库失败',
      delete_wordbank_fail: '删除词库失败',
      import_format_invalid: '词库格式错误',
      move_wordbank_fail: '移动词库失败',
      synonym_duplicate: '已有重复同义词',
      wordbank_name_duplicate: '已有重复词库名',
      wordbank_name_empty: '词库名不得为空',
      root_name_duplicate: '已有重复分类',
      item_name_duplicate: '已有重复子分类',
    },

    upload_file_undefined: '档案无法辨识',
    upload_file_size_error: '档案大小需介于 0 ~ 2M',
    upload_file_type_invalid: '档案格式限 .xlsx 档',
    download_template: '下载批量导入模板',
    upload_title: {
      batch_import: '批量导入词库',
      last_import_result: '上次上传结果',
      download_imported_wordbank: '下载已导入词库',
      batch_import_hint: '批量导入词库提示',
    },
    import_button_hint: '支持扩展名：.xlsx',
    result: {
      success: '导入成功',
      fail: '导入失败',
      loading: '导入中',
      empty: '尚未导入',
    },
  },
  qatest: {
    submit: '送出',
    dimension: '维度',
    unknown: '未知',
    unselect: '未选择',
    user_dimension: '用户维度',
    clear_all: '取消全部',
    qatest: '对话测试',
    analysis: '句子分析',
    match_result: '匹配结果',
    similar_question: '相似问题',
    similar_score: '相似分数',
    filter_dimension: '筛选维度',

    sentence_analysis: '句子分析',
    intent: '意图',
    emotion: '情绪',
    module: '来源',
    token: '分词',

    cmd: '指令',
    cmdlist: {
      human: '转人工',
    },
  },
  qalist: {
    import_desc: '导入时将会覆盖所有问答库资料',
    total_row: '共 {num} 条',
    empty_label: '无标签',
    answer_label: '标签',
    sentence: '句子',
    add_answer_sentence: '新增答案句子',
    multi_answer_explain: '答案最多可包含五句',
    no_limit: '无期限',
    forever_valid: '永久有效',
    no_question: '无标准问题',
    header_related_question: '关联问题',
    validated_duration: '生效时间',
    to: '至',
    more: '更多操作',
    filter: '筛选条件',
    keywords: '关键字',
    keywords_enter: '请输入关键字',
    keyword_search: '查询',
    query: '查询',
    batch_import: '备份还原',
    batch_export: '资料备份',
    add_qa: '新增问答',
    delete: '删除',
    tags: '维度',
    all_dimensions: '所有维度',
    command: '指令',
    no_command: '无筛选条件',
    set_command: '指令设置',
    current_command: '当前指令',
    category_search: '分类搜索',
    all_categories: '全部分类',
    un_category: '暂无分类',
    standard_q: '标准问题',
    standard_a: '标准答案',
    dynamic_menu: '动态菜单',
    related_question: '相关问',
    valid_time: '有效时间',
    start_time: '开始时间',
    end_time: '结束时间',
    detail: '详情',
    goto: '前往',
    page: '页',
    all: '全部',
    question: '问题',
    answer: '答案',

    check_export_status: '导出进行中请稍候，完成将提示下载页面',
    check_exrpot_time: '最终确认时间',

    select_related_questions: '指定相关问',
    select_dynamic_menu: '指定动态菜单',
    select_not_in_recommendation: '不在推荐问内显示',
    not_in_recommendation: '推荐问显示',
    indicate_type: '指定类型',
    indicate_question: '指定问题',
    existed_dynamic_menu: '已存在动态菜单',
    existed_related_questions: '已存在相关问',
    warn_auto_deduplicate_input_questions: '标准问题含重复值，是否确定自动删除所有重复值并更新？',
    warn_duplicate_input_questions: '标准问题含重复值，是否删除所有重复值？',
    warn_submit_duplicate: '标准问题具重复值',
    clear_all_rows: '清除全部',
    warn_clear_all_rows: '您确定要清除全部指定问题吗',
    total: '共',
    rows: '条',
    clear_all_dimensions: '清除已选条件',
    export_msg: '正在准备数据, 请稍候刷新本页面',
    add_child_category: '添加子分组',
    rename: '重命名',
    delete_category: '删除分类',
    confirm_delete: '您确定要删除此分类及其子分类？',
    rename_msg: '请输入新的分组名称',
    edit_standard_q: '编辑标准问题',
    delete_standard_q: '删除标准问题',
    delete_selected_standard_q: '确认删除所选问题',
    confirm_delete_standard_q_msg: '您确定要删除该标准问题吗？',
    delete_standard_a: '删除答案',
    confirm_delete_standard_a_msg: '您确定要删除该答案吗？',
    confirm_delete_similar_question: '您确认要删除此相似问？',
    similar_question: '相似问',
    select_import_file: '选择批量导入文件',
    preview: '预览',
    file_not_select: '未选择文件',
    all_update: '全量',
    alpha_update: '增量',
    download_template: '下载批量导入问答库模板',
    download_last_success: '下载上一次成功全量导入版本',
    upload_success: '文件已上传，后台正在处理中，请稍候',
    in_uploading: '文件上传中，请勿关闭分页',
    import_success: '文件处理中，请稍后刷新本页面查看结果',
    set_similar_questoin: '相似问设置',
    please_input: '请输入相似问/关键词搜索',
    sn: '序号',
    no_similar_questions: '暂无相似问',
    add_similar_question: '请输入添加相似问',
    batch_add: '批量输入',
    duplicate_question: '已有重复相似问',
    duplicate_batch_question: '已过滤重复相似问后新增',
    image: '图片',
    remain_content_length: '剩余答案长度',
    belong_categories: '所属分类',
    prepare_export_msg: '正在准备数据,请稍候刷新本页面',
    cancel_export: '取消并重新导出',
    refresh: '刷新',
    export: '重新导出',
    export_download_msg: '数据导出成功，请您下载 数据版本',
    not_in_suggestion: '不在推荐内显示',
    add: '添加',
    permanent: '永久',
    self_defined: '自定义',
    relatedQ_dynamic_alarm_msg: "'指定动态菜单'和'指定相关问'不可同时存在一个标准答案里",
    edit_box_empty_alarm_msg: '文本长度不能超过10000或为空',
    not_indicate: '无指定',
    preparing_data: '正在准备数据，请稍后刷新本页面',
    question_empty_warning_msg: '问题不可为空',
    answer_empty_warning_msg: '默认标准答案不可为空',
    hide: '收起',
    qa_loading_failed_msg: '问答库读取失败,请稍候重试',
    page_selected: '全选当页',
    word_over_limit: '字数超过上限，请修正',
    not_select_any_question: '没有选择任何问题',
    starttime_later_than_endtime_warning: '开始时间不能晚于结束时间',
    operation_failed: '执行失败，请在重试一次',
    related_question_overwrite_warning: '已存在相关问将会被取代',
    dynamic_menu_overwrite_warning: '已存在动态菜单将会被取代',
    current_categories: '当前分类',
    modify_current_categories: '修改当前分类',
    import_fail_msg: '数据有误，请导出文档修改',
    export_file: '导出文档',
    question_exist: '已存在相同标准问题',
    answer_command: {
      no_order: '无指令',
      order_track: '物流信息查询',
      order_info: '订单信息查询',
      scene_id: '场景标识',
      cash: '提现',
      order_cancel: '取消订单',
      apply_for_return: '退货申请',
      exchange_goods: '换货申请',
      vip_finance: '唯品金融',
      query_refund: '查询退款',
      shopping: '购物',
    },
  },
  qa_label: {
    label: '标签',
    label_id: 'ID',
    label_row: '个',
    label_name: '标签名称',
    rule_count: '规则连结数',
    length: '请输入标签, 长度不超过10个字',
    actions: '操作',
    delete_label_name: '确定要删除标签：{tag}',
    err_detele_label_has_rule: '无法删除有规则的标签',
    err_existed_label: '标签名已存在',
  },
  qa_rule: {
    rule: '规则',
    rule_id: 'ID',
    rule_name: '名称',
    label_name: '标签',
    rule_content: '内容',
    rule_time: '有效时间',
    rule_status: '规则状态',
    label_count: '连结标签数',
    link: '连结',
    link_label: '连结标签',

    rule_answer: '文本',
    answer_type_text: '文字',
    answer_type_cmd: '指令',
    answer_cmd_content: '指令内容',
    answer_text_content: '文本内容',

    rule_statue: '状态',
    rule_target: '检查对象',
    rule_target_std: '标准问题',
    rule_target_answer: '出话内容',
    rule_type: '文本使用',
    rule_type_replace: '取代',
    rule_type_front: '附加至前',
    rule_type_behind: '附加至后',

    rule_type_keyword: '关键字',
    rule_type_regex: '正则',

    status_forever: '永久',
    status_timeout: '已过期',
    status_valid: '有效中',
    custom_date: '自订日期',

    delete_rule_name: '确定要删除规则：{rule}',
    update_status_success: '更新规则 {rule} 成功',
    err_rule_invalid: '规则已失效',

    err_existed_rule: '规则名称已存在',
    err_need_label_to_publish: '请先设定活动对应的标签',
    err_time_range: '结束时间不可早于开始时间',

    add_label: '新增标签',
  },
  qa_greeting: {
    question: '问题',
    answer: '答案',
    load_fail: '载入失败',
  },
  chat_skill: {
    chat_skill: '话术',
    group_basic: '基本话术',
    group_timeout: '答案失效话术',
    group_emotion: '情绪相关话术',
    save_success_msg: '保存{item}成功',
    add_new_msg: '新增个{item}吧',
    errorDuplicate: '内容已存在',
    delete_check_msg: '是否要删除话术：{item}',
  },
  task_engine: {
    download_template: '下载模板',
  },

  learning: {
    week_collections: '周报列表',
    clusters: '负反馈对话',
    record_clusters: '对话分组',
    feedback_wording: '优化学习',
    collection_count_info: '发现相似对话{collection_cnt}组, 共{record_cnt}条',
    cluster_index: '第{idx}组',
    label: '对话标签',
    unmatched: '未匹配问题',
    unresolved: '未解决问题',
    collection: {
      weekly_report: '周报',
      timeline: '时间线',
      record: '负反馈对话',
      operation: '操作',
      view: '查看',
      title_info: '我们会在每周一凌晨给您提供过去一周的优化周报，帮助您发现机器人回答中有哪些可以优化的内容，并提供相应的改进工具，建议您每周安排时间处理。',
    },
    cluster: {
      group: '对话分组',
      records: '对话数',
      status: '状态',
      resolve: '处理',
      clusters_tooltip: '负反馈对话包括未匹配/未解决问题明细的内容。',
      group_tooltip: '我使用聚类算法，可以将非业务对话中语义相似的内容聚集成一组，每个聚类中的对话可能属于一个或多个标准问题，便于批量标注。',
      label_tooltip: '在每组相似对话中，出现次数最多的词，可以帮助快速了解这组对话的大致内容。',
      title_template: '第%NUM组',
    },
    feedback: {
      description: '选择对话, 并标注到匹配的标准问题',
      select_quesetion: '选择推荐标准问题',
      add_standardq: '新增标准问题',
      view: '查看语料',
      standardq: '标准问题',
      current_similar_questions: '最近%NUM笔语料',
      start: '为我推荐',
      start_reminder: '先选择一些您认为应该属于一个标准问题的对话，并点击为我推荐，会在这里显示系统推荐的标准问题',
      revoke: '撤销',
      should_select: '请至少选择一个未匹配对话',
      should_select_less: '最多可勾选20个问题！',
      revoke_success: '撤销成功',
      no_recommend_q: '没有找到合适的推荐，你可以搜索所有标准问题，或者新增一个标准问题',
      unmatched_standard_q: '没有搜寻到标准问题，您可以尝试更换关键词，或新增标准问题',
      keyword_emtpy: '搜寻关键字不可为空',
      not_select_question: '没有选择标准问',
    },
  },
  pages: {
    null: '',
    status: {
      module_name: '数据总览',
      statistic_dash: '统计概览',
    },
    ssm: {
      module_name: '问答管理',
      ssm: '常用标准问题',
      qa_label: '标签管理',
    },
    privileges: {
      module_name: '权限管理',
      role_manage: '角色管理',
      user_manage: '用户管理',
      other_tools: '其他工具',
    },
    robot_setting: {
      module_name: '机器人设置',
      robot_profile: '机器人形象',
      robot_function: '技能设置',
      robot_chat_skill: '话术设置',
      robot_command: '指令设置',
    },
    wordbank: {
      module_name: '词库',
      wordbank_list: '词库关系',
      wordbank_upload: '词库导入',
    },
    faq: {
      module_name: '问答管理',
      qalist: '问答库',
      qa_greeting: '寒暄库',
      qatest: '对话测试',
      qa_chat_skill: '话术设置',
      qa_label: '标签管理',
      qa_rule: '规则管理',
      qa_learning: '自学习',
    },
    statistics: {
      module_name: '数据优化',
      statistic_analysis: '统计分析',
      statistic_daily: '日志管理',
      statistic_audit: '操作记录',
      statistic_learning: '负反馈',
    },
    task_engine: {
      module_name: '任务引擎',
      task_engine_scenario: '场景编辑',
      task_engine_upload: '上传转换数据',
    },
    error: '',
  },
  general: {
    robot_list: '机器人列表',
    no_data: '暂无数据',
    reset: '重置',
    chat_test: '对话测试',
    custom: '自订',
    yes: '是',
    no: '否',
    operation: '操作',
    search: '搜寻',
    all: '全部',
    add: '新增',
    actions: '操作',
    status: '状态',
    edit: '编辑',
    delete: '删除',
    question: '问题',
    answer: '答案',
    ext_answer: '答案扩展',
    ok: '确认',
    cancel: '取消',
    loading: '读取中',
    error_code: '错误代码',
    error: '错误',
    upload: '上传',
    browse: '浏览',
    save: '保存',
    saving: '保存中',
    default: '默认',
    indicate: '指定',
    force_cancel: '强制取消',
    export: '导出',
    success: '成功',
    fail: '失败',
    description: '提示',
    file: '档案',
    finish: '完成',
    folder: '目录',
    search_placeholder: '请输入搜索内容',
  },
  dimension: {
    categories: {
      title: '维度',
      platform: '平台',
      brand: {
        title: '渠道',

        phone: '手机银行',
        bejing: '北京分行',
        guangzhou: '广州分行',

        sms: '短信',
        wechat: '微信',
        phone_app: '手机APP',
        e_line: 'E线通',
        fortune_group: '财富圈',
      },
      sex: {
        title: '性别',
        0: '男',
        1: '女',
      },
      age: '年龄段',
      hobbies: {
        title: '购买爱好',
        0: '非准新客',
        1: '准新客',
      },
    },
    emotions: {
      title: '情感',
      angry: '愤怒',
      not_satisfied: '不满',
      satisfied: '满意',
      neutral: '中性',
    },
    qtypes: {
      title: '问答类别',
      business: '业务',
      chat: '聊天',
      other: '其他',
    },
  },
  error_msg: {
    client_error: '呼叫端口错误',
    server_error: '伺服器错误',
    request_fail: '请求失败',

    success: '设定成功',
    save_success: '保存成功',
    save_fail: '保存失败',
    time_format_error: '输入不符合规范，请重新输入',
    empty_data: '无资料',
    data_format_err: '资料格式错误',
    update_qa_error: '问答更新失败',
    input_empty: '输入不可为空',
    auth_expire: '授权已失效，请重新登入',
    no_page_priv: '无法浏览此页面',

    import_success: '导入成功',
  },
  http_status: {
    default: '伺服器错误',
    400: '请求内容错误',
    401: '授权已失效，请重新登录',
    404: '伺服器错误，API未实作',
    413: '上传文档大小超过要求',
  },

  management: {
    robot_group: '机器人群组',
    robots: '机器人',
    robot_list: '机器人列表',

    create_robot: '创建机器人',
    edit_robot: '编辑机器人',
    group_manage: '机器人群组管理',

    robot_name: '机器人名字',
    description: '描述',

    input_placeholder: '输入文字',
    length_50_placeholder: '字数限制50内',

    create_group: '创建群组',
    add_robot: '加入机器人',

    enterprise_privilege_manage: '企业权限管理',
    add_account: '新增帐号',
    edit_account: '编辑人员',
    add_role: '新增权限',
    privilege_setting: '权限设定',

    normal_user: '一般用户',
    enterprise_admin: '企业管理员',
    system_admin: '系统管理员',
    unknown: '未知',

    user_name: 'ID',
    user_type: '帐号类型',
    user_display_name: '姓名',
    phone: '联络电话',
    email: 'Email',
    next_step: '下一步',
    last_step: '上一步',
    set_password: '设置密码',
    check_password: '确认密码',
    modify_password: '修改密码',
    set_passowrd_placeholder: '请输入密码',
    check_password_placeholder: '再输入一次密码',
    assign_robot: '指定机器人',
    privilege_is: '权限为',

    manager_password: '管理员密码',
    new_password: '新密码',
    check_new_password: '确认新密码',

    err_empty_username: 'ID 不可为空',
    err_existed_username: 'ID 已存在',
    err_empty_email: 'Email 不可为空',
    err_empty_password: '密码不可为空',
    err_manager_empty_password: '管理员密码不可为空',
    err_invalid_check_password: '两次密码输入不同',
    update_password_success: '更新密码成功',

    err_role_duplicate: '角色名称已存在',

    go_back: '返回',

    privilege: {
      statistic_dash: {
        view: '统计概览',
      },
      ssm: {
        view: '常用标准问答查看',
        edit: '常用标准问答编辑',
        export: '常用标准问答导出',
        import: '常用标准问答导入',
      },
      qa_label: {
        view: '标签管理查看',
        edit: '标签管理编辑',
      },
      task_engine: {
        edit: '任务引擎编辑',
      },
      wordbank: {
        view: '查看',
        edit: '编辑',
        create: '新增',
        delete: '删除',
        import: '导入',
        export: '导出',
      },
      statistic_analysis: {
        view: '统计分析查看',
        export: '统计分析导出',
      },
      statistic_daily: {
        view: '日志管理查看',
        export: '日志管理导出',
      },
      statistic_audit: {
        view: '操作记录查看',
        export: '操作记录导出',
      },
      robot_profile: {
        view: '机器人形象查看',
        edit: '机器人形象编辑',
      },
      robot_chat_skill: {
        view: '话术设置查看',
        edit: '话术设置编辑',
      },
      robot_function: {
        view: '技能设置查看',
        edit: '技能设置编辑',
      },
      robot_command: {
        view: '指令设置查看',
        edit: '指令设置编辑',
      },
    },
  },
  header: {
    user_info: '个人资料',
    enterprise_privilege_list: '企业权限管理',
    logout: '登出',
  },
};
