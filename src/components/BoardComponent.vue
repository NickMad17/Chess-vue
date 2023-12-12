<template>
  <h1 class="heading">Current Player: <span class="player" :class="thisPlayer?.color === 'white'? 'white-player': 'black-player'">{{thisPlayer?.color}}</span></h1>
<!--  <p v-if="shah" style="color: red; font-size: 30px">Шах</p>-->
  <div class="board" >
    <div v-for="(row, index) of board.cells"
         :key="index">
      <ceil-component
                      :cell="cell"
                      @click="addActive(cell)"
                      :class="{selected: cell?.x === this.selectedSell?.x && cell?.y === this.selectedSell?.y && cell?.figure && cell?.figure?.color === 'white',
                               selectedBlack: cell?.x === this.selectedSell?.x && cell?.y === this.selectedSell?.y && cell?.figure && cell?.figure?.color === 'black'}"
                      v-for="(cell, index) in row"
                      :key="index"
                      :shah="shah"

      />
    </div>

  </div>
</template>

<script>
import CeilComponent from "./CeilComponent.vue";
import {FigureNames} from "../models/figures/Figure.ts";

export default {
  components: {CeilComponent},
  props: {
    board: {
      type: Object,
      required: true
    },
    thisPlayer: {
      type: Object,
    }
  },
  data() {
    return {
      selectedSell: null,
      shah : false
    }
  },

  methods: {
    addActive(cell) {
      if (this.selectedSell && this.selectedSell !== cell && this.selectedSell.figure?.canMove(cell)) {
        this.selectedSell.moveFigure(cell);
        this.selectedSell = null
        this.$emit('swapPlayer')
      } else {
        if (cell.figure?.color === this.thisPlayer?.color){
          this.selectedSell = cell
        }
      }
    },

    highlightCells() {
      this.board.highlightCells(this.selectedSell)
      this.updateBoard()
    },

    updateBoard() {
      const newBoard = this.board.getCopyBoard()
      this.$emit('createBoard', newBoard)
    },

  },

  watch: {
    selectedSell() {
      this.highlightCells()
    }
  }
}
</script>

<style lang="scss" scoped>

.heading {
  color: #81eae1;
  font-size: 25px;
  margin-bottom: 10px;
}

.player{
  margin-left: 5px;
  padding: 5px 10px;
  border-radius: 10px;
}

.white-player{
  border: 3px #ffffff solid;
  background: #414141;
  color: white;
}

.black-player{
  border: 3px rgb(60, 106, 159) solid;
  background: rgba(255, 255, 255, 0.73);
  color: black;
}


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
  background: rgb(119, 28, 63);

}

.selectedBlack {
  background: rgb(60, 106, 159);
}

@media (max-width: 700px) {
  .cell {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 500px) {
  .cell {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 400px) {
  .cell {
    width: 40px;
    height: 40px;
  }
}
</style>