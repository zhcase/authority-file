<!--
 * @Author: zeHua
 * @Date: 2021-05-24 09:06:14
 * @LastEditors: zeHua
 * @LastEditTime: 2021-07-05 16:44:35
 * @FilePath: /doc/authority-file/docs/vue.md
-->

# 组件

## Table 表格

对 element-ui 的 table 组件进行封装

### Usage

```vue
<div class="app-container">
    <BasicTable
      :registerTable="table1"
      :basicTableOptions="options"
      :formSchema="schemas"
    >
      <template #form1>
        <el-form-item label="标题3">
          <el-input v-model="form1" />
        </el-form-item>
      </template>
      <template #toolbarLeft>
        <el-button size="mini" @click="handleEdit([tableData[1], tableData[2]])"
          >Edit</el-button
        >
      </template>
      <template #baseTable>
        <el-table-column align="center" label="操作" fixed="right">
          <template>
            <el-button type="text" icon="el-icon-edit">修改</el-button>
            <el-button type="text" icon="el-icon-delete">删除</el-button>
            <el-button type="text" icon="el-icon-plus">添加</el-button>
          </template>
        </el-table-column>
      </template>
    </BasicTable>
  </div>
</template>

<script>
import { getList } from "@/api/table";
import { BasicTable } from "@/components/Table/index";
export default {
  components: {
    BasicTable,
  },

  data() {
    return {
      list: null,
      form1: "",
      listLoading: true,
      options: {
        api: getList,
        basicTableProps: {
          name: 2323,
          height: "auto",
          ref: "multipleTable",
          select: (e) => {
            console.log(e);
          },
        },
        paginationProps: {
          total: 0,
        },
      },
      // 头部表单配置生成
      schemas: [
        {
          field: "field",
          component: "Input",
          label: "字段1",
          colProps: {
            span: 8,
          },
          defaultValue: "1",
          componentProps: {
            placeholder: "自定义placeholder",
            onChange: (e) => {
              console.log(e);
            },
          },
        },
        {
          slot: "form1",
          field: "field11",
        },
        {
          field: "field1",
          component: "Select",
          label: "字段1",
          colProps: {
            span: 8,
          },
          defaultValue: "1",
          componentProps: {
            placeholder: "自定义placeholder",
            options: [
              {
                value: "选项1",
                label: "黄金糕",
              },
              {
                value: "选项2",
                label: "双皮奶",
              },
              {
                value: "选项3",
                label: "蚵仔煎",
              },
              {
                value: "选项4",
                label: "龙须面",
              },
              {
                value: "选项5",
                label: "北京烤鸭",
              },
            ],
          },
        },
        {
          field: "field2",
          component: "Input",
          label: "字段1",
          colProps: {
            span: 8,
          },
          defaultValue: "1",
          componentProps: {
            placeholder: "自定义placeholder",
            onChange: (e) => {
              console.log(e);
            },
          },
        },
        {
          field: "field3",
          component: "Input",
          label: "字段1",
          colProps: {
            span: 8,
          },
          defaultValue: "1",
          componentProps: {
            placeholder: "自定义placeholder",
            onChange: (e) => {
              console.log(e);
            },
          },
        },
      ],

      // table 索引
      table1: [
        {
          label: "id",
          value: "id",
          width: 200,
        },
        {
          label: "管理员账号",
          value: "author",
          "show-overflow-tooltip": true,
          width: 200,
        },
        {
          label: "title",
          value: "title",
          "show-overflow-tooltip": true,
          width: 200,
        },

        {
          label: "用户状态",
          value: "status",

          // options: [
          //   {
          //     label: false,
          //     value: 1,
          //   },
          //   { label: true, value: 0 },
          // ],
        },
        {
          label: "付费状态",
          value: "chargingStatus",
          options: [
            {
              label: "高级会员",
              value: 1,
            },
            { label: "普通会员", value: 0 },
          ],
        },
        {
          slot: "baseTable",
          attr: {
            fixed: "right",
          },
        },
      ],
    };
  },
  methods: {
    // 重置自定义表单
    resetForm() {
      this.form1 = "";
    },
    handleEdit(row) {
      console.log(this.$refs.table.$refs.multipleTable);
      console.log(this.$refs.table.$refs.multipleTable.setCurrentRow(row));
    },
    // 改变表格switch
    changeSwitch(val, cab) {
      console.log(val);
      cab(true);
    },
    // 当分页改变的时候将会被触发
    handleChangePage(val) {
      console.log(val);
    },
  },
};
</script>
```

参数 registerTable 例:

```json
{
label: "标题",
value: "索引值",
width: 200,
"show-overflow-tooltip": true,
// ...内部设置值

},
```

如果要设置状态如 (例：1:男，2:女) 配置如下:

```json
{
label: "标题",
value: "索引值",
options: [
    {
     label: "男",
     value: 1,
     },
    {
     label: "女",
     value: 0
     },
    ],
attr: {
// ...内部设置值
},
},
```

参数 tableData 例:

```js
tableData: [
  {
    索引值: '值1',
  },
  {
    索引值: '值2',
  },
];
```

参数

|       参数        |                  说明                  |  类型  | 可选值 | 默认值 |
| :---------------: | :------------------------------------: | :----: | ------ | ------ |
|   registerTable   |           表格索引值与 标题            | Array  | —      | []     |
|     tableData     |                表格数据                | Array  | —      | []     |
| basicTableOptions |                组件配置                | object | —      | {}     |
|    formSchema     | 当有头部表单的时候将用 json 的形式配置 | object | —      | {}     |

222
