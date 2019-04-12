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
    this.university_id = this.$route.params.id
    console.log(this.$route.params.id)
  },
  watch: {
    '$route': function () {
      console.log(this.$route.params.id)
      this.university_id = this.$route.params.id
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
