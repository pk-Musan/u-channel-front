import Vue from 'vue'
// Ajax通信ライブラリ
import axios from 'axios'

// Json取得のベースURL
const URL_BASE = '/assets/'

// Vue.js のインスタンス
export default new Vue({
  data: {
    // Jsonデータ格納用
    search_list: {}
  },
  methods: {
    // Ajax通信でJsonを取得し、特定のプロパティに格納する
    // 取得したら GET_AJAX_COMPLETE で通知する
    get_axios (url, name) {
      return axios.get(URL_BASE + url).then((res) => {
        Vue.set(this, name, res.data)
        this.$emit('GET_AJAX_COMPLETE')
      })
    },
    // プロパティ名を指定してデータを取得
    get_data (name) {
      return this.$data[name]
    },
    // Axiosでapi(url)を指定してmesssageをポスト
    post_axios (url, message, id) {
      return axios.post(URL_BASE + url, {
        text: message,
        university_id: id
      })
    }
  }
})
