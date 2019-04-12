<template>
  <el-container>
    <el-main>
      <div>地域一覧</div>
      <li v-for="region in region_list" :key="region.logical_name">
          <router-link :to="{ name: 'universities', params: { filter: 'region', name: region.logical_name }}">{{ region.physical_name }}</router-link>
      </li>
    </el-main>
  </el-container>
</template>

<script>
// import store from '../store'

export default {
  data () {
    return {
      region_list: []
    }
  },
  created () {
    this.region_list = this.get_region()
  },
  watch: {
    '$route': function () {
      this.region_list = this.get_region()
    }
  },
  methods: {
    get_region: function () {
      return require('../assets/region.json')
      /*
      store.get_axios('region.json', 'search_list')
      store.$on('GET_AJAX_COMPLETE', () => {
        return store.get_data('search_list')
      })
      */
    }
  }
}
</script>
