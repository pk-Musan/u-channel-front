<template>
  <el-container>
    <el-main>
      <div>Top</div>
      <div>{{ msg }}</div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: 'Uちゃんねる'
    }
  }
}
</script>

<style scoped>
</style>
