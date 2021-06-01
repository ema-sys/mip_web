<template>
  <v-btn small @click="clickHandler(item)" color="#50aec8" class="white--text font-weight-bold">
    構&nbsp;成&nbsp;変&nbsp;更
  </v-btn>
</template>

<script>
export default {
  methods: {
    clickHandler: function (item) {
      if (this.disabled) {
        return
      }
      this.$emit('click', item)
    }
  }
}
</script>

<style lang="scss">
</style>
