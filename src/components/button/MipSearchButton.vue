<template>
  <v-btn @click="clickHandler" color="#e63232" class="white--text font-weight-bold">
    <v-icon>mdi-magnify</v-icon>&nbsp;検&nbsp;索
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
