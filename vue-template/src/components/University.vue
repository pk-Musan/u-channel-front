<template>
  <el-container>
    <el-main>
      <div>大学一覧</div>
      <li v-for="university in university_list" :key="university.id">
          <router-link :to="{ name: 'university', params: { name: university.logical_name, id: university.id }}">{{ university.physical_name }}</router-link>
      </li>
    </el-main>
  </el-container>
</template>

<script>
// import store from '../store'

export default {
  data () {
    return {
      university_list: []
    }
  },
  created () {
    switch (this.$route.params.filter) {
      case 'region': {
        for (var i = 0; i < this.get_university().length; i++) {
          if (this.$route.params.name === this.get_university()[i].logical_region) {
            this.university_list.push(this.get_university()[i])
          }
        }
        break
      }
      case 'prefecture': {
        for (var l = 0; l < this.get_university().length; l++) {
          if (this.$route.params.name === this.get_university()[l].logical_prefecture) {
            this.university_list.push(this.get_university()[l])
          }
        }
        break
      }
    }
    console.log(this.$route.path)
  },
  methods: {
    get_university: function () {
      return require('../assets/university.json')
      /*
      store.get_axios('university.json', 'search_list')
      store.$on('GET_AJAX_COMPLETE', () => {
        return store.get_data('search_list')
      })
      */
    }
  }
}
</script>
