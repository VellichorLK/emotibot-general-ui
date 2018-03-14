export default {
  privileges: {
    role: '角色',
    role_name: '角色名',
    privileges: '权限',

    actions: {
      edit: '编辑',
      view: '查看',
      add: '新增',
    },
  },
  login: {
    title: '用户登陆',
    login: '登入',
    account_place: '请输入帐号',
    password_place: '请输入密码',
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
    synonym_note: '单个词长度最多35，总长度不可超过5000',

    err_synonym_length: '单个词长度超过{length}',
    err_synonym_total_length: '总长度超过{length}',

    import_history: '导入纪录',

    batch_status: '导入结果',
    batch_import: '批量导入词库',
    batch_export: '批量导出词库',
    download_batch_import_template: '下载批量导入词库模板',
    description: '提示：',
    version: '词库版本',
    last_version: '上一个版本',
    current_version: '当前版本',
    last_import_result: '上次上传结果',
    result: {
      success: '导入成功',
      fail: '导入失败',
      loading: '导入中',
      empty: '尚未导入',
    },
    wait_for_result: '导入处理中，请五分钟后查看结果',
    download_import_result: '下载已导入词库',
  },
  qatest: {
    submit: '送出',
    unknown: '未知',
    qatest: '对话测试',
    analysis: '句子分析',
    match_result: '匹配结果',
    token: '分词',
  },
  qalist: {
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
      qalist: '问答库',
      qatest: '对话测试',
    },
  },
  general: {
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
    default: '默认',
    indicate: '指定',
    force_cancel: '强制取消',
  },
  dimension: {
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
  },
  error_msg: {
    client_error: '呼叫端口错误',
    server_error: '伺服器错误',
    request_fail: '请求失败',

    success: '设定成功',
    time_format_error: '输入不符合规范，请重新输入',
  },
  http_status: {
    default: '伺服器错误',
    401: '授权已失效，请重新登录',
    404: '伺服器错误，API未实作',
    413: '上传文档大小超过要求',
  },
};
