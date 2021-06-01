<template>
  <den-date-from-to-input :fromVal.sync="dateFrom" :toVal.sync="dateTo" height="25" label="案件登録日" colclazz="mip-search-item" />
</template>

<script>
import DenDateFromToInput from '@/components/common/DenDateFromToInput'

export default {
  components: {
    DenDateFromToInput
  },
  props: {
    fromVal: String,
    toVal: String
  },
  computed: {
    dateFrom: {
      get () {
        return this.fromVal
      },
      set (val) {
        this.$emit('update:fromVal', val)
      }
    },
    dateTo: {
      get () {
        return this.toVal
      },
      set (val) {
        this.$emit('update:toVal', val)
      }
    }
  }
}
</script>

<style lang="scss">
</style>
