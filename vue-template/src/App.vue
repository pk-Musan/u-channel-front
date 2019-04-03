<template>
  <div id="app">
    <myheader/>

    <el-container style="height: 100%; width: 100%;">
      <router-view class="view one" name="top"></router-view>
      <router-view class="view two" name="search"></router-view>
      <router-view class="view three" name="board"></router-view>

      <el-footer style="text-align: center; background-color: #545c64; color: #fff">
        <h4>(c) copyright.</h4>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import myheader from '@/components/Header'
export default {
  name: 'App',
  components: {
    myheader
  },
  data () {
    return {
      university_list: []
    }
  },
  created () {
    // 大学リストのJson取得
    // store.get_ajax('universities', 'search_list')
    /* Json取得後に呼び出される
    store.$on('GET_AJAX_COMPLETE', () => {
      this.university_list = store.get_data('search_list')
    })
    */
    this.university_list = this.get_university()
    // console.log(this.university_list)
  },
  methods: {
    get_university: function () {
      return require('./assets/university.json')
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

<style>
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
}
*/
</style>
