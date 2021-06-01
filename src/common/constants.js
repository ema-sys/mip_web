export default {
  menuItems: [
    {
      menuIndex: 0,
      name: 'ホーム',
      icon: 'mdi-home',
      url: '/'
    },
    {
      menuIndex: 1,
      name: '案件',
      icon: 'mdi-content-paste',
      url: '',
      subMenuItems: [
        {
          name: '案件照会',
          url: '/matter/refer'
        },
        {
          name: '案件登録',
          url: '/matter/entry'
        }
      ]
    },
    {
      menuIndex: 2,
      name: '工程',
      icon: 'mdi-factory ',
      url: '/work'
    },
    {
      menuIndex: 3,
      name: 'メンテナンス',
      icon: 'mdi-cogs',
      url: '/service'
    }
  ],
  workItems: [
    {
      src: require('../assets/work-img-1.png'),
      url: '/work#work-1'
    },
    {
      src: require('../assets/work-img-2.png'),
      url: '/work#work-2'
    },
    {
      src: require('../assets/work-img-3.png'),
      url: '/work#work-3'
    }
  ],
  matterItems: [
    {
      name: '案件照会',
      url: '/matter/refer'
    },
    {
      name: '案件登録',
      url: '/matter/entry'
    }
  ]
}
