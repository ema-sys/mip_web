<template>
  <v-app>
    <MipHeader/>
    <v-content>
      <router-view/>
    </v-content>
    <MipFooter/>
  </v-app>
</template>

<script>
import MipHeader from '@/views/MipHeader.vue'
import MipFooter from '@/views/MipFooter.vue'

export default {
  name: 'App',
  components: {
    MipHeader,
    MipFooter
  }
}
</script>

<style lang="scss" scoped>
</style>
