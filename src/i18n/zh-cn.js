export default {
  privileges: {
    role: '角色',
    user: '用户',
    password: '密码',
    role_name: '角色名',
    user_name: '用户名',
    privileges: '权限',
    user_count: '用户数',

    placeholder_user_name: '请输入用户名',
    placeholder_password: '请输入密码',
    placeholder_modify_password: '若要变更则输入密码',

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
      statistic_daily: '日志管理',
      statistic_audit: '操作日志',

      qalist: '问答库',
      qatest: '对话测试',
      qa_chat_skill: '话术设置',
      qa_tag: '标签管理',
      qa_activity: '活动管理',

      robot_profile: '机器人形象',
      wordbank: '词库',
      task_engine: '任务引擎',

      management: '权限管理',
    },
  },
  login: {
    title: '用户登陆',
    login: '登入',
    account_place: '请输入帐号',
    password_place: '请输入密码',
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
    audit_record_filename: 'VCA操作日志',

    keyword_search: '关键词查询',
    time_range: '时间段',
    user_id: '用户ID',
    user_nick: '用户昵称',
    module: '模组',
    action: '动作',

    filter: '筛选条件',

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
    modify_qas: '修改语料',

    weather: '天气模块',
    computation: '数学计算模块',
    joke: '笑话模块',
    story: '讲故事模块',
    riddle: '猜谜语模块',
    chengyu: '成语模块',
    all_active: '全部开启',
    all_deactive: '全部关闭',
  },
  wordbank: {
    add_folder: '新增目录',
    add_dictionary: '新增词库',
    edit_dictionary: '编辑词库',

    word: '词语',
    synonym: '同义词',
    synonym_note: '单个词长度最多35，各单词间使用 "," 隔开，总长度不可超过5000',
    sensitive_wordbank: '敏感词库',
    sensitive_answer: '敏感问回答',
    sensitive_answer_note: '当用户问句中包含此敏感词库时，可自订回复答案',
    default_answer: '预设答案',
    custom_answer: '自订答案',
    custom_answer_note: '请输入自订的机器人回答',

    err_synonym_length: '单个词长度超过{length}',
    err_synonym_total_length: '总长度超过{length}',
    err_name_empty: '词语不可为空',
    err_wordbank_not_found: '该词库已被删除',

    import_history: '导入纪录',

    batch_status: '导入结果',
    batch_import: '批量导入词库',
    batch_export: '批量导出词库',
    download_batch_import_template: '下载批量导入词库模板',
    download_current_dictionary: '下载当前词库',
    description: '提示：',
    version: '词库版本',
    last_version: '上一个版本',
    current_version: '最后导入版本',
    last_import_result: '上次上传结果',
    result: {
      success: '导入成功',
      fail: '导入失败',
      loading: '导入中',
      empty: '尚未导入',
    },
    wait_for_result: '导入处理中，请五分钟后查看结果',
    download_import_result: '下载已导入词库',

    delete_wordbank_name: '确定要删除词库 {name}',
    delete_wordbank_dir: '确定要删除词库目录 {name} 与其底下所有的词库',
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
    token: '分词',
    similar_question: '相似问题',
    similar_score: '相似分数',
  },
  qalist: {
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
    batch_import: '批量导入',
    batch_export: '批量导出',
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
    label_name: '标签名称',
    rule_count: '规则连结数',
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
  chat_skill: {
    group_basic: '基本话术',
    group_timeout: '答案失效话术',
    group_emotion: '情绪相关话术',
    save_success_msg: '保存{item}成功',
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
    privileges: {
      module_name: '权限管理',
      role_manage: '角色管理',
      user_manage: '用户管理',
    },
    robot_setting: {
      module_name: '机器人设置',
      robot_profile: '机器人形象',
      robot_function: '机器人功能',
    },
    wordbank: {
      module_name: '词库',
      wordbank_list: '词库关系',
      wordbank_upload: '词库导入',
    },
    ssm: {
      module_name: '问答管理',
      ssm: '常用标准问题',
    },
    faq: {
      module_name: '问答管理',
      qalist: '问答库',
      qatest: '对话测试',
      qa_chat_skill: '话术设置',
      qa_label: '标签管理',
      qa_rule: '规则管理',
      qa_learning: '自学习',
    },
    statistics: {
      module_name: '数据优化',
      statistic_dash: '统计概览',
      statistic_analysis: '统计分析',
      statistic_daily: '日志管理',
      statistic_audit: '操作日志',
    },
    task_engine: {
      module_name: '任务引擎',
      task_engine_scenario: '场景编辑',
      task_engine_upload: '上传转换数据',
    },
    error: '',
  },
  general: {
    custom: '自订',
    yes: '是',
    no: '否',
    operation: '操作',
    search: '搜寻',
    all: '全部',
    add: '新增',
    actions: '操作',
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
    time_format_error: '输入不符合规范，请重新输入',
    empty_data: '无资料',
    data_format_err: '资料格式错误',
    update_qa_error: '问答更新失败',
    input_empty: '输入不可为空',
    auth_expire: '授权已失效，请重新登入',
    no_page_priv: '无法浏览此页面',
  },
  http_status: {
    default: '伺服器错误',
    400: '请求内容错误',
    401: '授权已失效，请重新登录',
    404: '伺服器错误，API未实作',
    413: '上传文档大小超过要求',
  },
};
