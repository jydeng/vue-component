<template>
  <table>
    <thead>
      <tr>
        <th v-for="(col, i) in columns" :key="i">{{ col.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in data" :key="i">
        <td v-for="(col, k) in columns" :key="k">
          <template v-if="'render' in col">
            <Render :row="row" :column="col" :index="i" :render="col.render"></Render>
          </template>
          <template v-else-if="'slot' in col">
            <slot :row="row" :column="col" :index="i" :name="col.slot"></slot>
          </template>
          <template v-else>{{ row[col.key] }}</template>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import Render from "./render.js";
import SlotScope from "./slot.js";
export default {
  components: { Render, SlotScope },
  provide() {
    return {
      tableRoot: this
    };
  },
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style>
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #e9e9e9;
}
table th {
  background: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
  white-space: nowrap;
}
table td,
table th {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}
</style>
