<template>
  <div>
    <div class="col">
      <h3>Draggable 1</h3>
      <draggable
        class="drag"
        :list="list1"
        ghost-class="ghost"
        :group="{ name: 'people', pull: 'clone', put: true }"
        :clone="clone"
        handle=".handle"
      >
        <transition-group type="transition" name="flip-list">
          <div class="element" v-for="element in list1" :key="element.id">
            <span class="handle"></span> {{ element.name }}
          </div>
        </transition-group>
      </draggable>
    </div>
    <div class="col">
      <h3>Draggable 2</h3>
      <draggable
        class="drag"
        :list="list2"
        ghost-class="ghost"
        group="people"
        handle=".handle"
      >
        <transition-group type="transition" name="flip-list">
          <div class="element" v-for="element in list2" :key="element.id">
            <span class="handle"></span> {{ element.name }}
          </div>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  data() {
    return {
      idGlobal: 12,
      list1: [
        { id: 1, name: "a" },
        { id: 2, name: "b" },
        { id: 3, name: "c" },
        { id: 4, name: "d" },
        { id: 5, name: "e" },
        { id: 6, name: "f" }
      ],
      list2: [
        { id: 7, name: "g" },
        { id: 8, name: "h" },
        { id: 9, name: "i" },
        { id: 10, name: "j" },
        { id: 11, name: "k" },
        { id: 12, name: "l" }
      ]
    };
  },
  methods: {
    clone(item) {
      return {
        ...item,
        id: ++this.idGlobal
      };
    }
  }
};
</script>
<style scoped>
.col {
  display: inline-block;
  width: 50%;
}
.drag {
  min-height: 40px;
}
.element {
  padding: 5px;
  border: 1px solid #ddd;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.handle {
  float: left;
  width: 20px;
  height: 20px;
  background: #ddd;
  cursor: pointer;
}
.flip-list-move {
  transition: transform 0.5s;
}
</style>
