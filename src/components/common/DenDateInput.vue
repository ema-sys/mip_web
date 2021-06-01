<template>
  <v-text-field v-model="dateval" :height="height" :label="label" :placeholder="placeholder" clearable>
    <template v-slot:append-outer>
      <den-date-picker v-model="dateval"/>
    </template>
  </v-text-field>
</template>

<script>
import DenDatePicker from './DenDatePicker'

export default {
  components: {
    DenDatePicker
  },
  props: {
    value: String,
    height: Number,
    label: String,
    placeholder: String
  },
  computed: {
    dateval: {
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
