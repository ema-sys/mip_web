<template>
  <v-text-field height="25" v-model="matterNoVal" label="案件番号（部分入力）" maxlength="12" clearable></v-text-field>
</template>

<script>
export default {
  props: {
    value: String
  },
  computed: {
    matterNoVal: {
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
