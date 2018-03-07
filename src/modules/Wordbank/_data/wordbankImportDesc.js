export default {
  'zh-cn': [
    {
      info: 'excel导入文件',
      content: [
        '请在excel导入文件的“词库模板”sheet页，填写所有词库内容，请勿修改第一行名称，否则无法读取;',
        'excel文件中，若词库名和同义词两列均为空，则系统不对导入文件做检测;',
        'excel文件中，若词库名或同义词两列中有内容，则词库导入后，会将此次导入之前的词库内容全部替换，请谨慎检查;',
      ],
    },
    {
      info: '目录',
      content: [
        '一级目录有且只有两个，名称分别为：敏感词库；专有词库。请勿修改一级目录名称；',
        '当一个父目录包含几个子目录时，表格中不需要在不同行多次填写父目录名称，只需要在第一个子目录的同一行填写一次；',
        '目录之间不可有空白目录列。例如一级目录、二级目录、四级目录有内容，三级目录为空 —> 上传后会报错；',
        '目录字数限制：1~20字;',
      ],
    },
    {
      info: '词库名',
      content: [
        '词库名字数限制：1~35字;',
      ],
    },
    {
      info: '词语',
      content: [
        '一组词需填写在“词语”列的同一单元格中，使用逗号分隔;',
        '词语单元格字数限制：50000字(包括符号);',
        '每个词语的字数限制：1~35字;',
        '词库名加所有词语，总数不超过100000个;',
        '词库名和词语不可以均为空;',
      ],

    },
    {
      info: '其他',
      content: [
        '如果词语单元格中有内容，二级目录、三级目录、四级目录对应单元格的内容可以为空，代表词语属于此行最后一个不为空的目录;',
        '如果词语单元格中有内容，词库名对应单元格的内容不可以为空；即词语必须属于某个词库;',
        '如果词语单元格中无内容，二级目录、三级目录、四级目录和词库名都可以为空；即只有分类结构，分类目录中没有词;',
        '词语中的每个词是系统最终识别的对象，词库名和目录仅是分类名称。如需系统识别词库名或者目录名，请将这些名称也填入词语单元格中;',
      ],
    },
  ],
  'zh-tw': [
    {
      info: 'excel導入文件',
      content: [
        '請在excel導入文件的“詞庫模板”sheet頁，填寫所有詞庫內容，請勿修改第一行名稱，否則無法讀取;',
        'excel文件中，若詞庫名和同義詞兩列均為空，則系統不對導入文件做檢測;',
        'excel文件中，若詞庫名或同義詞兩列中有內容，則詞庫導入後，會將此次導入之前的詞庫內容全部替換，請謹慎檢查;',
      ],
    },
    {
      info: '目錄',
      content: [
        '一級目錄有且只有兩個，名稱分別為：敏感詞庫；專有詞庫。請勿修改一級目錄名稱；',
        '當一個父目錄包含幾個子目錄時，表格中不需要在不同行多次填寫父目錄名稱，只需要在第一個子目錄的同一行填寫一次；',
        '目錄之間不可有空白目錄列。例如一級目錄、二級目錄、四級目錄有內容，三級目錄為空 —> 上傳後會報錯；',
        '目錄字數限制：1~20字;',
      ],
    },
    {
      info: '詞庫名',
      content: [
        '詞庫名字數限制：1~35字;',
      ],
    },
    {
      info: '詞語',
      content: [
        '一組詞需填寫在“詞語”列的同一單元格中，使用逗號分隔;',
        '詞語單元格字數限制：50000字(包括符號);',
        '每個詞語的字數限制：1~35字;',
        '詞庫名加所有詞語，總數不超過100000個;',
        '詞庫名和詞語不可以均為空;',
      ],

    },
    {
      info: '其他',
      content: [
        '如果詞語單元格中有內容，二級目錄、三級目錄、四級目錄對應單元格的內容可以為空，代表詞語屬於此行最後一個不為空的目錄;',
        '如果詞語單元格中有內容，詞庫名對應單元格的內容不可以為空；即詞語必須屬於某個詞庫;',
        '如果詞語單元格中無內容，二級目錄、三級目錄、四級目錄和詞庫名都可以為空；即只有分類結構，分類目錄中沒有詞;',
        '詞語中的每個詞是系統最終識別的對象，詞庫名和目錄僅是分類名稱。如需系統識別詞庫名或者目錄名，請將這些名稱也填入詞語單元格中;',
      ],
    },
  ],
};
