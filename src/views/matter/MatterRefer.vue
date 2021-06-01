<template>
  <section class="matter-refer">
    <v-container fluid fill-height class="matter-refer__content">
      <v-row>
        <v-col class="matter-refer__content-text">
          <div class="box">
            <div class="box-header">
              <div class="box-title">検索条件</div>
            </div>
            <div class="box-body denSearchBox">
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4" xl="4" class="mip-search-item">
                  <mip-search-matter-no-input v-model="matterNo" />
                </v-col>
                <v-col cols="12" sm="8" md="8" lg="8" xl="8">
                  <mip-search-matter-date-from-to-input :fromVal.sync="matterDateFrom" :toVal.sync="matterDateTo" />
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4" xl="4" class="mip-search-item">
                  <mip-search-customer-name-input v-model="customerName" />
                </v-col>
                <v-col cols="12" sm="8" md="8" lg="8" xl="8" class="mip-search-item">
                  <mip-search-matter-name-input v-model="matterName" />
                </v-col>
                <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                  <v-row>
                    <v-col cols="12" sm="10" md="8" lg="7" xl="6" class="mip-search-item">
                      <mip-search-matter-status-check-button
                        :isProspectVal.sync="isCheckStatusProspect"
                        :isDecisionVal.sync="isCheckStatusDecision"
                        :isCompletedval.sync="isCheckStatusCompleted"
                        :isFailureVal.sync="isCheckStatusFailure" />
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="12" sm="3" md="2" lg="2" xl="1" class="mip-search-item">
                      <mip-search-button @click="searchClick"></mip-search-button>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid fill-height>
      <v-row>
        <v-col>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="4" sm="3" md="2" lg="2" xl="2">
              <mip-new-button @click="newClick"></mip-new-button>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-data-table :headers="headers" :items="items">
                <template v-slot:item.statusName="{ item }">
                  <v-chip :color="statusColor(item.statusName)" dark>
                    {{ item.statusName }}
                  </v-chip>
                </template>
                <template v-slot:item.detail="{ item }">
                  <mip-list-update-button @click="detailItem(item)" />
                </template>
                <template v-slot:item.organize="{ item }">
                  <mip-list-organize-update-button @click="detailItem(item)" />
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {

      // 検索条件
      matterNo: null,
      matterDateFrom: null,
      matterDateTo: null,
      customerName: null,
      matterName: null,
      isCheckStatusProspect: false,
      isCheckStatusDecision: false,
      isCheckStatusCompleted: false,
      isCheckStatusFailure: false,

      // 一覧
      headers: [
        { text: '案件番号', value: 'matterNo' },
        { text: '案件登録日', value: 'matterRegistDate' },
        { text: '納品予定日', value: 'deliveryDueDate' },
        { text: '得意先名', value: 'customerName' },
        { text: '案件名', value: 'matterName' },
        { text: '状態', value: 'statusName' },
        { text: '詳細', value: 'detail', sortable: false },
        { text: '構成', value: 'organize', sortable: false }
      ],
      items: [
        { seqNo: 1, matterNo: 'J1020210321015', matterRegistDate: '2021/03/21', deliveryDueDate: '2021/04/30', customerName: '関東テレコム産業(株)', matterName: '明治ビル第３基地局', statusName: '見込み' },
        { seqNo: 2, matterNo: 'J1020210321016', matterRegistDate: '2021/03/21', deliveryDueDate: '2021/04/30', customerName: '東京都地域振興組合', matterName: '関東衛星通信中継車', statusName: '確定' }
      ]
    }
  },
  methods: {
    searchClick (e) {
      confirm(e + ' ガチで検索しますか')
    },
    newClick (e) {
      confirm(e + ' ガチで新規登録しますか')
    },
    detailItem (item) {
      const index = this.items.indexOf(item)
      confirm(index + '番目をガチで変更しますか')
    },
    organizeItem (item) {
      const index = this.items.indexOf(item)
      confirm(index + '番目の構成をガチで変更しますか')
    },
    statusColor (status) {
      switch (status) {
        case '見込み':
          return '#E46C0A'
        case '確定':
          return '#0070C0'
        case '完了':
          return '#595959'
        case '失注':
          return '#595959'
        default:
          return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
