<template>
  <div>
    <h3>表格组件——Table</h3>
    <table-render :columns="columns" :data="data"></table-render>
  </div>
</template>
<script>
import TableRender from "../components/TableRender/Table";

export default {
  components: { TableRender },
  data() {
    return {
      columns: [
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "年龄",
          key: "age"
        },
        {
          title: "出生日期",
          key: "birthday"
        },
        {
          title: "地址",
          key: "address"
        },
        {
          title: "操作"
        }
      ],
      data: [
        {
          name: "王小明",
          age: 18,
          birthday: "919526400000",
          address: "福建省厦门市思明区"
        },
        {
          name: "张小刚",
          age: 25,
          birthday: "696096000000",
          address: "福建省厦门市湖里区"
        },
        {
          name: "李小红",
          age: 30,
          birthday: "563472000000",
          address: "福建省厦门市翔安区"
        },
        {
          name: "周小伟",
          age: 26,
          birthday: "687024000000",
          address: "福建省厦门市集美区"
        }
      ]
    };
  }
};
</script>