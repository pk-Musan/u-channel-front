<template>
  <el-container>
    <el-main>
      <div>Message</div>
      <div id="post">
        <input v-model="message" placeholder="">
        <button v-on:click="postMessage">投稿</button>
      </div>
    </el-main>
  </el-container>
</template>

<script>
// import store from '../store'

export default {
  data () {
    return {
      message: '',
      university_id: ''
    }
  },
  created () {
    this.university_id = this.$route.params.value
    console.log(this.$route.params.value)
  },
  watch: {
    '$route': function (to, from) {
      if (to.params.value !== 'top') {
        console.log(to.params.value)
        this.university_id = to.params.value
      }
    }
  },
  methods: {
    postMessage: function () {
      if (this.message === '') {
        alert('Empty')
      } else {
        // messageが空でなければpost
        // store.get_axios('post先のURL', this.message, this.university_id)
        alert('message: ' + this.message + '\n' + 'id: ' + this.university_id)
      }
    }
  }
}
</script>
