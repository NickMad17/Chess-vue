<template>
  <div class="board">
    <div v-for="(row, index) of board.cells"
         :key="index">
        <ceil-component v-bind:cell="cell" class="white" v-for="(cell, index) in row" :key="index"/>
    </div>

  </div>
</template>

<script>
import CeilComponent from "./CeilComponent.vue";

export default {
  components: {CeilComponent},
  props:{
    board: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.board {
  overflow: hidden;
  width: calc(80px * 8);
  height: calc(80px * 8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}

.white {
  background: #858383;
}

.black {
  background: #414141;
}

@media (max-width : 700px) {
  .cell {
    width: 60px;
    height: 60px;
  }
}
</style>