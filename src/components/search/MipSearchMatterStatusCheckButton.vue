<template>
  <v-row>
    <v-col cols="6" sm="3" md="2" lg="2" xl="2" class="mip-search-item">
      <v-checkbox v-model="isProspect" label="見込み" color="#E46C0A"></v-checkbox>
    </v-col>
    <v-col cols="6" sm="3" md="2" lg="2" xl="2" class="mip-search-item">
      <v-checkbox v-model="isDecision" label="確定" color="#0070C0"></v-checkbox>
    </v-col>
    <v-col cols="6" sm="3" md="2" lg="2" xl="2" class="mip-search-item">
      <v-checkbox v-model="isCompleted" label="完了" color="#595959"></v-checkbox>
    </v-col>
    <v-col cols="6" sm="3" md="2" lg="2" xl="2" class="mip-search-item">
      <v-checkbox v-model="isFailure" label="失注" color="#595959"></v-checkbox>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
  },
  props: {
    isProspectVal: Boolean,
    isDecisionVal: Boolean,
    isCompletedval: Boolean,
    isFailureVal: Boolean
  },
  computed: {
    isProspect: {
      get () {
        return this.isProspectVal
      },
      set (val) {
        this.$emit('update:isProspectVal', val)
      }
    },
    isDecision: {
      get () {
        return this.isDecisionVal
      },
      set (val) {
        this.$emit('update:isDecisionVal', val)
      }
    },
    isCompleted: {
      get () {
        return this.isCompletedval
      },
      set (val) {
        this.$emit('update:isCompletedval', val)
      }
    },
    isFailure: {
      get () {
        return this.isFailureVal
      },
      set (val) {
        this.$emit('update:isFailureVal', val)
      }
    }
  }
}
</script>

<style lang="scss">
</style>
