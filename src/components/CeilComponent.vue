<template>
  <div class="cell"
       :class="cell.color,
        {attack: cell.available && cell.figure}">
    <img class="figure" v-if="cell.figure" v-bind:src="cell.figure?.logo" alt="Фигура">
    <div v-if="cell.available && !cell.figure" class="available"></div>
  </div>
</template>

<script>
import {FigureNames} from "../models/figures/Figure.ts";

export default {
  props: {
    cell: {
      type: Object,
      required: true
    }
  },


}
</script>

<style lang="scss" scoped>

.cell {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
}

.figure {
  width: 80%;
  height: 80%;
  position: relative;
}

.available {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: #81eae1;
}

.white {
  background: #858383;
}

.black {
  background: #414141;
}

.attack {
  background: rgb(255, 0, 0);

}

.attackWhite {
  background: rgb(60, 106, 159);
}


</style>