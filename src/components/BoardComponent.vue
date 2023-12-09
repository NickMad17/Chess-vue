<template>
  <div class="board">
    <div v-for="(row, index) of board.cells"
         :key="index">
        <ceil-component :cell="cell" @click="addActive(cell)" :class="{selected: cell?.x === this.selectedSell?.x && cell?.y === this.selectedSell?.y}" v-for="(cell, index) in row" :key="index"/>
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
  },
  data () {
    return {
      selectedSell: null
    }
  },

  methods: {
    addActive (cell) {
      if (cell.figure) {
        this.selectedSell = cell
      }
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

.selected {
  background: rgba(91, 101, 164, 0.79);
}

@media (max-width : 700px) {
  .cell {
    width: 60px;
    height: 60px;
  }
}
</style>