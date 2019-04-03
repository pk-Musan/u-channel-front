<template>
  <el-container>
    <el-main>
      <div>都道府県一覧</div>
      <li v-for="prefecture in prefecture_list" :key="prefecture.logical_name">
          <router-link :to="{ name: 'universities', params: { filter: 'prefecture', name: prefecture.logical_name }}">{{ prefecture.physical_name }}</router-link>
      </li>
    </el-main>
  </el-container>
</template>

<script>
// import store from '../store'

export default {
  data () {
    return {
      prefecture_list: []
    }
  },
  created () {
    this.prefecture_list = this.get_prefecture()
  },
  watch: {
    '$route': function () {
      this.prefecture_list = this.get_prefecture()
    }
  },
  methods: {
    get_prefecture: function () {
      return require('../assets/prefecture.json')
      /*
      store.get_axios('prefecture.json', 'search_list')
      store.$on('GET_AJAX_COMPLETE', () => {
        return store.get_data('search_list')
      })
      */
    }
  }
}
</script>
