<template>
  <v-text-field height="25" v-model="matterNameVal" label="案件名（部分入力）" maxlength="30" clearable></v-text-field>
</template>

<script>
export default {
  props: {
    value: String
  },
  computed: {
    matterNameVal: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss">
</style>
