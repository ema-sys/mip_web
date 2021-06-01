import MatterMain from '@/views/matter/MatterMain.vue'
import MatterIndex from '@/views/matter/MatterIndex.vue'
import MatterRefer from '@/views/matter/MatterRefer.vue'

export default {
  path: '/matter',
  component: MatterMain,
  children: [
    {
      path: '',
      component: MatterIndex
    },
    {
      path: 'refer',
      component: MatterRefer
    }
  ]
}
