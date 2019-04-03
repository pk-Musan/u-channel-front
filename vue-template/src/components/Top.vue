<template>
  <el-container>
    <el-main>
      <div v-if='top_link'>
        <router-link :to="{name: 'top', path: '/'}">Topへ</router-link>
      </div>
      <div v-else>
        <router-link :to="{ name: 'region', params: { value: 'region' }}">地域名から探す</router-link>
        <router-link :to="{ name: 'prefecture', params: { value: 'prefecture' }}">都道府県から探す</router-link>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: 'Uちゃんねる',
      top_link: false
    }
  },
  created () {
    if (this.$route.path !== '/') {
      this.top_link = true
    } else {
      this.top_link = false
    }
  },
  watch: {
    '$route': function () {
      if (this.$route.path !== '/') {
        this.top_link = true
      } else {
        this.top_link = false
      }
    }
  }
}
</script>

<style scoped>
</style>
