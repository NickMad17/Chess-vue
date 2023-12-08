<template>
  <div class="app">
    <board-component v-bind:board="board"/>
  </div>

</template>

<script>
import BoardComponent from "./components/BoardComponent.vue";
import {Board} from "./models/Board.ts";

export default {
  components: {BoardComponent},
  data () {
    return {
      board : new Board()
    }
  }
  ,

  methods: {
    restart () {
      const newBoard = new Board();
      newBoard.initCalls()
      this.board = newBoard
      console.log(newBoard, "pwldwld-w-d-w")

    }
  },

  mounted() {
    this.restart()
  }
}

</script>

<style lang="scss" scoped>

.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}



</style>