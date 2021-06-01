<template>
  <v-row>
    <v-col cols="11" sm="5" md="5" lg="5" xl="5" :class="colclazz">
      <den-date-input v-model="dateFrom" :height="height" :label="label" :placeholder="placeholder" />
    </v-col>
    <v-col cols="1" sm="1" md="1" lg="1" xl="1" :class="colclazz" style="margin-top: 20px">
      &nbsp; ～ &nbsp;
    </v-col>
    <v-col cols="11" sm="5" md="5" lg="5" xl="5" :class="colclazz">
      <den-date-input v-model="dateTo" :height="height" :label="label" :placeholder="placeholder" />
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
import DenDateInput from './DenDateInput'

export default {
  components: {
    DenDateInput
  },
  props: {
    fromVal: String,
    toVal: String,
    height: Number,
    label: String,
    placeholder: String,
    colclazz: String
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
