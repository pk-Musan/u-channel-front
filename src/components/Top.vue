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
    switch (this.$route.name) {
      case 'region': {
        this.top_link = true
        break
      }
      case 'prefecture': {
        this.top_link = true
        break
      }
      case 'universities': {
        this.top_link = true
        break
      }
      case 'university': {
        this.top_link = true
        break
      }
      default: {
        this.top_link = false
        break
      }
    }
    console.log(this.$route.name)
  },
  watch: {
    '$route': function () {
      switch (this.$route.name) {
        case 'region': {
          this.top_link = true
          break
        }
        case 'prefecture': {
          this.top_link = true
          break
        }
        case 'universities': {
          this.top_link = true
          break
        }
        case 'university': {
          this.top_link = true
          break
        }
        default: {
          this.top_link = false
          break
        }
      }
      console.log(this.$route.name)
    }
  }
}
</script>

<style scoped>
</style>
