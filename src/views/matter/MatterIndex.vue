<template>
  <section class="matter-index">
    <AppBackgroundHolder :title="title"/>
    <h2>インデックス</h2>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(matterItem, index) in matterItems" :key="index" :to="matterItem.url">
            <v-list-item-title>{{ matterItem.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
  </section>
</template>

<script>
import AppBackgroundHolder from '@/components/sample/AppBackgroundHolder.vue'
import constants from '@/common/constants'

export default {
  data () {
    return {
      title: '案件 インデックス',
      matterItems: constants.matterItems
    }
  },
  components: {
    AppBackgroundHolder
  }
}
</script>
