<template>
  <el-container>
    <el-main>
      <div>Card</div>
      <div>{{ card_list }}</div>
    </el-main>
  </el-container>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
      card_list: {},
      name: {}
    }
  },
  created () {
    // Json取得
    store.get_axios('currentprice.json', 'search_list')
    // store.get_axios('message取得のapi', 'search_list')
    // Json取得後に呼び出される
    store.$on('GET_AJAX_COMPLETE', () => {
      this.card_list = store.get_data('search_list')
    })
  }
}
</script>
