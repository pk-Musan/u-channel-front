<template>
  <el-container>
    <el-main>
      <div>???????</div>
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
    for (var i = 0; i < this.get_university().length; i++) {
      if (this.$route.params.value === this.get_university[i].logical_region) {
        this.university_list.push(this.get_university[i])
      }
    }
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
