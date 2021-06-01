<template>
  <header class="main-header" id="mip-header">
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>製造業向けポータル</v-toolbar-title>
      <v-tabs v-model="headerTabIndex">
        <v-tab v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.url">
          <v-menu bottom :offset-y="offset">
            <template v-slot:activator="{ on }">
              <div class="tab-div-outer" dark v-on="on"><p class="tab-div-inner">{{ menuItem.name }}</p></div>
            </template>
            <v-list dark>
              <v-list-item v-for="(subMenuItem, index) in menuItem.subMenuItems" :key="index" :to="subMenuItem.url" @click="selectMenu(menuItem)">
                <v-list-item-title>{{ subMenuItem.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped dark>
      <v-list nav dense>
        <v-list-group v-for="(menuItem, index) in menuItems" :key="index" :prepend-icon="menuItem.icon" no-action :append-icon="menuItem.subMenuItems ? 'mdi-arrow-down-drop-circle' : 'mdi-chevron-right'">
          <template v-slot:activator>
            <v-list-item v-if="menuItem.subMenuItems">
              <v-list-item-content>
                <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-else :to="menuItem.url">
              <v-list-item-content>
                <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item v-for="(subMenuItem) in menuItem.subMenuItems" :key="subMenuItem.name" :to="subMenuItem.url">
            <v-list-item-content>
              <v-list-item-title>{{ subMenuItem.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import constants from '../common/constants'

export default {
  name: 'MipHeader',
  data () {
    return {
      drawer: false,
      menuItems: constants.menuItems,
      headerTabIndex: null
    }
  },
  methods: {
    selectMenu: function (menuItem) {
      this.headerTabIndex = menuItem.menuIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}
.v-tabs {
  display: none;

  @include display_pc {
    display: block !important;
  }
}
.v-tab {
  padding-left: 0px;
  padding-right: 0px;
}
.tab-div-outer{
  display: table;
  width: 100%;
  height: 100%;
  text-align: center;
}
.tab-div-inner{
  display: table-cell;
  vertical-align: middle;
}
</style>
