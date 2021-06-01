<template>
  <v-text-field height="25" v-model="customerNameVal" label="得意先名（部分入力）" maxlength="20" clearable></v-text-field>
</template>

<script>
export default {
  props: {
    value: String
  },
  computed: {
    customerNameVal: {
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
