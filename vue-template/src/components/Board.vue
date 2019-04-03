<template>
  <el-container>
    <el-main>
      <div>{{ name }}</div>
      <br>
      <div>Card</div>
      <div>
        <li v-for="card in card_list" :key="card.id">
            {{ card.text }}
        </li>
      </div>
      <br>
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
      university: [],
      name: '',
      university_id: '',
      card_list: {},
      message: ''
    }
  },
  created () {
    // console.log(this.$route.params.value)
    // urlのパラメータから現在開いてる大学のidを取得
    this.university_id = this.$route.params.id

    // 取得した大学のidを基に特定の大学の情報を取得
    // this.university = this.get_university(this.university_id)
    this.university = this.get_university()

    // 取得した大学の物理名を取得(画面表示用)
    // this.name = this.university.physical_name
    this.name = this.university[this.university_id - 1].physical_name

    // 取得した大学のidを基に全メッセージを取得
    // this.card_list = this.get_message(this.university_id)
    this.card_list = this.get_message()

    // console.log(this.university[0].id)
    // console.log(this.card_list)
  },
  watch: {
    // リンクが変わったらパラメータに応じてuniversity_idを書き換え
    '$route': function (to, from) {
      if (to.path.indexOf('university') !== -1) {
        // console.log(to.params.value)
        this.university_id = to.params.id
        this.university = this.get_university()

        // 取得したuniversity/idを基に大学名を取得(画面表示用)
        this.name = this.university[this.university_id - 1].physical_name

        this.card_list = this.get_message()
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
    },
    get_message: function () {
      return require('../assets/message.json')

      // 取得したidを基に全メッセージを取得
      /*
      store.get_axios('message.json', 'search_list')
      store.$on('GET_AJAX_COMPLETE', () => {
        return store.get_data('search_list')
      })
      */
    },
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
