<template>
  <v-btn @click="clickHandler" color="#50aec8" class="white--text font-weight-bold">
    新&nbsp;規&nbsp;登&nbsp;録
  </v-btn>
</template>

<script>
export default {
  methods: {
    clickHandler: function (e) {
      if (this.disabled) {
        return
      }
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss">
</style>
