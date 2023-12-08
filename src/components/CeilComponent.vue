<template>
  <div class="cell" v-bind:class="cell.color">
  </div>
</template>

<script>
export default {
  props:{
    cell: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.cell {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}



</style>