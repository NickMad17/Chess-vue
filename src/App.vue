<template>
  <div class="app">
    <board-component :board="board"
                     :this-player="thisPlayer"
                     @createBoard="updateBoard"
                     @swapPlayer="updatePlayer"
    />
  </div>

</template>

<script>
import BoardComponent from "./components/BoardComponent.vue";
import {Board} from "./models/Board.ts";
import {Player} from "./models/Player.ts";
import {Colors} from "./models/Colors.ts";

export default {
  components: {BoardComponent},
  data () {
    return {
      board : new Board(),
      whitePlayer: new Player(Colors.WHITE),
      blackPlayer: new Player(Colors.BLACK),
      thisPlayer:  null
    }
  }
  ,

  methods: {
    restart () {
      const newBoard = new Board();
      newBoard.initCalls()
      newBoard.addFigures()
      this.board = newBoard
    },

    updateBoard(newBoard) {
      this.board = newBoard
    },

    updatePlayer() {
      this.thisPlayer = this.thisPlayer?.color === Colors.WHITE ? this.blackPlayer : this.whitePlayer
    }
  },

  mounted() {
    this.restart()
    this.thisPlayer = this.whitePlayer
  }
}

</script>

<style lang="scss" scoped>

.app {
  max-width: 100vw;
  overflow-x: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}




</style>