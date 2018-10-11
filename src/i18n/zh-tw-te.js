export default {
  task_engine_v3: {
    wizard_mode: {
      side_menu_tab: {
        scenario_list: '場景列表',
        entity_list: '自定義實體(TBA)',
      },
    },
    scenario_list_page: {
      button_create_new_scenario: '+創建新場景',
      scenario_list: '場景列表',
      placeholder_search: '搜尋...',
      ask_delete_confirm: '是否確認要刪除此場景？',
    },
    scenario_edit_page: {
      main_skill: '主任務',
      placeholder_name_the_scenario: '爲場景取名',
      tab: {
        trigger: '怎麼觸發場景',
        entity_collecting: '要收集哪些信息',
        action: '信息蒐集完要執行什麼動作',
      },
      toast_save_success: '儲存成功！',
      button_save_and_next_step: '儲存並下一步',
    },
    condition_card: {
      columns: {
        intent: '使用者的意圖',
        entity: '信息名稱',
        context: '場景現況',
      },
      if: '當',
      and: '而且',
      comparison_operators: {
        present: '存在',
        not_present: '不存在',
        contain: '包含',
        not_contain: '不包含',
        greater_than: '大於',
        smaller_than: '小於',
        equal_to: '等於',
        not_equal_to: '不等於',
        belong_to: '屬於',
        not_belong_to: '不屬於',
      },
      context_status: {
        on_complete: '蒐集完所有參數',
        on_cancel: '用戶取消參數蒐集',
        on_transfer_to_manual: '觸發轉人工意圖',
        on_parse_fail: '用戶發話理解失敗',
      },
    },
    action_group: {
      button_add_new_condition: '+條件',
      button_send_message: '傳送訊息',
      button_go_to: '前往',
      button_call_api: '調用API',
      button_edit_memory: '修改內存',
    },
    trigger_page: {
      label_title: '這個場景會被哪個意圖觸發？',
      label_title_description: '設定場景的進入條件，只有當使用者與機器人的對話滿足預設的觸發條件，會進入此場景，觸發相對應的多輪對話。',
      label_intent_setting: '設定觸發場景的意圖',
      label_choose_intent: '選擇意圖：',
      button_add_new_intent: '建立新意圖',
      btn_add_new_trigger: '新增觸發條件',
      option_choose_one: '請選擇',
    },
    create_scenario_pop: {
      label_create_new_scenario: '創建場景',
      label_name_the_scenario: '場景名稱：',
      placeholder_enter_scenario_name: '輸入場景名稱',
    },
    create_skill_pop: {
      label_create_new_skill: '創建新任務',
      label_name_the_skill: '給任務取個名字：',
      placeholder_enter_skill_name: '輸入任務名稱...',
    },
    intent_editor_pop: {
      label_edit_intent: '編輯意圖',
      label_add_new_intent: '新增意圖',
      label_intent_name: '意圖名稱：',
      placeholder_intent_name: '輸入意圖名稱...',
      label_training_phrase: '當使用者說出以下句子的時候，此意圖會被觸發：',
      placeholder_user_says: '使用者怎麼說...',
    },
    intent_tester_pop: {
      label_test_intent: '測試意圖(TBA)',
      label_intent_test_phrase: '意圖測試句：',
      placeholder_user_says: '使用者怎麼說...',
      button_start_to_predict: '開始預測(TBA)',
      label_intent_predict_result: '意圖預測結果：',
      button_upload_batch_phrases: '上傳批量測試資料(TBA)',
    },
    action_page: {
      label_title: '蒐集所有必要的訊息後，你需要執行什麼動作來完成任務？',
      button_add_new_msg: '＋文字迴應',
      button_add_new_webhook: '＋Webhook連接外部服務',
      button_add_new_goto: '＋連接下一個任務(TBA)',
    },
    action_card: {
      btn_add_new_condition: '＋加入過濾條件',
      webhook: {
        label_call_webhook: 'Webhook API 調用',
        label_variable: 'API回傳值存放位置',
        label_method: '調用方法',
        label_url: '服務提供位址(URL)',
        label_header_content_type: 'Header(Content-Type)',
        label_body: 'Body',
        placeholder_input_variable_name: '請爲變量取名',
        placeholder_input_url: 'ex. http://api.server.com/webhook',
        placeholder_input_body: '{"parameter":"value"}',
      },
      msg: {
        label_msg_return: '文字迴應',
        label_return_msg: '迴應文字：',
      },
      goto: {
        label_goto_next_skill: '連接下一個任務',
        label_goto: '前往',
        button_add_new_task: '建立新任務',
        option_finish_scenario: '結束場景',
      },
    },
    entity_collecting_page: {
      title: '在此場景中，您需要收集使用者的哪些信息？',
      description: '設定此對話場景需要收集的信息，以及各信息的對應問句',
      add_new_entity_collector: '新增抽取信息',
      edit_entity_relation: '設置實體關聯性',
      edit_sentence_replacement: '設置語句替換',
      edit_tde_setting: '設置TDE屬性',
      order: '排序',
      entity_name: '信息名稱',
      entity_name_placeholder: '請填入信息名稱',
      entity_category: '分類',
      entity_type: '信息實體型別',
      prompt: '信息對應問句',
      prompt_placeholder: '請填入信息對應問句',
    },
    custom_entity_type_editor_pop: {
      title: '新增自定義實體型別',
      entity_type: '實體型別名稱',
      entity_type_description: '實體型別描述',
      entity_category: '實體型別所屬分類',
      upload_entity_table: '上傳實體列表',
      add_row: '+新增列',
      synonyms_table: {
        entity: '實體',
        entity_placeholder: '請輸入實體',
        synonyms: '同義詞',
        synonyms_placeholder: '請輸入同義詞(請使用,分隔)',
      },
    },
    entity_management: {
      title: '自定義實體',
      create_new_entity_type: '新增實體型別',
      search_placeholder: '搜尋...',
      entity_type: '實體型別',
      create_date: '創建日期',
      cagegory: '分類',
      description: '描述',
      operation: '操作',
    },
    prompt_editor_pop: {
      title: '設定信息提取機制',
      set_retry_num: '信息提取失敗重試，次數',
      set_as_required: '設定爲必要題取信息',
    },
    error_msg: {
      request_failed: '請求失敗',
      please_enter_the_scenario_name: '請爲場景取名',
      please_enter_the_skill_name: '請爲任務取名',
      create_new_scenario_failed: '場景創見失敗',
      custom_entity_list_length_must_greater_than_two: '至少兩個以上的信息使用自定義實體型別，纔可設置實體關聯',
    },
    'entity-relation-editor-pop': {
      title: '實體關聯性設置',
      main_entity: '主要實體',
      related_entity: '關聯實體',
      add_row: '新增列',
      add_column: '新增欄',
      entity_type: '實體型別',
      entity: '實體',
    },
    'sentence-replacement-editor-pop': {
      title: '語句替換設置',
      pattern: '語句比對模式',
      text: '替換語句',
      pattern_placeholder: '請輸入要比對的語句模式',
      text_placeholder: '請輸入要替換成的語句',
      add_replacement_rule: '新增替換規則',
    },
    'tde-setting-editor-pop': {
      title: 'TDE屬性設置',
      nlgTemplate: '模版',
      service: '服務',
      jumpOutTimes: '跳出場景重試次數上限值',
    },
  },
};
