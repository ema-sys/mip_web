<template>
  <den-date-input v-model="dateval" height="25" label="案件登録日" />
</template>

<script>
import DenDateInput from '@/components/common/DenDateInput'

export default {
  components: {
    DenDateInput
  },
  props: {
    value: String
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
